<?php
// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2022 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

namespace crmeb\services\express\storage;

use app\common\repositories\store\shipping\ExpressPartnerRepository;
use app\common\repositories\store\shipping\ExpressRepository;
use app\common\repositories\system\merchant\MerchantRepository;
use crmeb\services\AccessTokenServeService;
use crmeb\services\BaseExpress;
use think\exception\ValidateException;

/**
 * Class Express
 * @package crmeb\services\express\storage
 */
class Express extends BaseExpress
{
    /**
     * 注册服务
     */
    const EXPRESS_OPEN = 'expr/open';

    /**
     * 电子面单模版
     */
    const EXPRESS_TEMP = 'expr/temp';

    /**
     * 快递公司
     */
    const EXPRESS_LIST = 'expr/express';

    /**
     * 快递查询
     */
    const EXPRESS_QUERY = 'expr/query';

    /**
     * 面单打印
     */
    const EXPRESS_DUMP = 'expr/dump';

    /** 初始化
     * @param array $config
     * @return mixed|void
     */

    protected function initialize(array $config = [])
    {
        parent::initialize($config); // TODO: Change the autogenerated stub
    }

    /**
     * 开通物流服务
     * @return bool|mixed
     */
    public function open()
    {
        return $this->accessToken->httpRequest(self::EXPRESS_OPEN, []);
    }

    /**
     * 获取电子面单模版
     * @param $com 快递公司编号
     * @param int $page
     * @param int $limit
     * @return bool|mixed
     */
    public function temp(string $com)
    {
        $param = ['com' => $com];
        return $this->accessToken->httpRequest(self::EXPRESS_TEMP, $param,'post',true, ['version:v1.1']);
    }

    /**
     * 获取物流公司列表
     * @param int $type 快递类型：1，国内运输商；2，国际运输商；3，国际邮政
     * @return bool|mixed
     */
    public function express(int $type = 0, int $page = 0, int $limit = 20)
    {
        $param = [];
        if ($type) $param['type'] = $type;
        return $this->accessToken->httpRequest(self::EXPRESS_LIST, $param);
    }

    /**
     * 查询物流信息
     * @param $com
     * @param $num
     * @return bool|mixed
     * @return 是否签收 ischeck
     * @return 物流状态：status 0在途，1揽收，2疑难，3签收，4退签，5派件，6退回，7转单，10待清关，11清关中，12已清关，13清关异常，14收件人拒签
     * @return 物流详情 content
     */
    public function query(string $num, string $com = '')
    {
        $param = [
            'com' => $com,
            'num' => $num
        ];
        if ($com === null) {
            unset($param['com']);
        }
        return $this->accessToken->httpRequest(self::EXPRESS_QUERY, $param);
    }

    /**
     * 电子面单打印
     * @param array $data 必需参数: com(快递公司编码)、to_name(寄件人)、to_tel（寄件人电话）、to_addr（寄件人详细地址）、from_name（收件人）、from_tel（收件人电话)、from_addr（收件人地址）、temp_id（电子面单模板ID）、siid（云打印机编号）、count（商品数量）
     * @return bool|mixed
     */
    public function dump($merId,$data)
    {
        if (!$data['count']) throw new ValidateException('商品数量缺失');
        if (!$data['temp_id']) throw new ValidateException('电子面单模板ID缺失');
        if (!$data['to_addr'] || !$data['to_tel'] || !$data['to_name']) throw new ValidateException('寄件人信息缺失');
        if (!$data['from_name'] || !$data['from_tel'] || !$data['from_addr']) throw new ValidateException('收件人信息缺失');
        if (!$data['com']) throw new ValidateException('快递公司编码缺失');
        $param = $data;
        $vserion = [];
        //修改没有打印机的时候print_type=IMAGE，就会返回面单图片
        if (!$data['siid']) {
            $vserion = ['version:v1.1'];
            $param['print_type'] = 'IMAGE';
        }

        $exp = app()->make(ExpressRepository::class)->getWhere(['code' => $data['com']]);
        $expressData = app()->make(ExpressPartnerRepository::class)->getSearch(['express_id' => $exp['id'], 'mer_id' => $merId,])->find();
        if ($exp['partner_id'] == 1) {
            if (!$expressData) throw new ValidateException('未查询到快递公司的月结账号');
            $param['partner_id'] = $expressData['account'];
        }
        if ($exp['partner_key'] == 1) $param['partner_key'] = $expressData['key'];
        if ($exp['net'] == 1) $param['net'] = $expressData['net_name'];
        if ($exp['check_man'] == 1) $param['checkMan'] = $expressData['check_man'];
        if ($exp['partner_name'] == 1) $param['partner_name'] = $expressData['partner_name'];
        if ($exp['is_code'] == 1) $param['code'] = $expressData['code'];
        //修改增加header版本号，兼容旧版和新版
        return $this->accessToken->httpRequest(self::EXPRESS_DUMP, $param, 'POST', true, $vserion);
    }

}
