<?php

namespace crmeb\services;

use Swoole\Coroutine\System;
use think\facade\Cache;

class LockService
{

    /**
     * @param $key
     * @param $fn
     * @param int $ex
     * @throws \Throwable
     */
    public function exec($key, $fn, int $ex = 6)
    {
        try {
            $this->lock($key, $key, $ex);
            return $fn();
        } finally {
            $this->unlock($key, $key);
        }
    }

    public function tryLock($key, $value = '1', $ex = 6)
    {
        return Cache::store('redis')->handler()->set('lock_' . $key, $value, ["NX", "EX" => $ex]);
    }

    public function lock($key, $value = '1', $ex = 6)
    {
        if ($this->tryLock($key, $value, $ex)) {
            return true;
        }
        System::sleep(1);
        return $this->lock($key, $value, $ex);
    }

    public function unlock($key, $value = '1')
    {
        $script = <<< EOF
if (redis.call("get", "lock_" .. KEYS[1]) == ARGV[1]) then
	return redis.call("del", "lock_" .. KEYS[1])
else
	return 0
end
EOF;
        return Cache::store('redis')->handler()->eval($script, [$key, $value], 1) > 0;
    }
}