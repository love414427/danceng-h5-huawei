(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_pay_status/index"],{"0e76":function(t,e,i){"use strict";i.r(e);var n=i("64d1"),r=i("a13b");for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("abea");var a=i("f0c5"),s=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=s.exports},"26f7":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("59c6"),r=(i("4d59"),i("26cb")),o=i("f26a"),a={components:{authorize:function(){Promise.all([i.e("common/vendor"),i.e("components/Authorize")]).then(function(){return resolve(i("02f6"))}.bind(null,i)).catch(i.oe)}},filters:{timeYMD:function(t){if(t){var e=/\d{4}-\d{1,2}-\d{1,2}/g.exec(t);return e[0]}}},data:function(){return{domain:o.HTTP_REQUEST_URL,orderId:"",order_type:"",order_pay_info:{},isAuto:!1,isShowAuth:!1,status:0,msg:"",couponList:[],isOpen:!1,moneyBg:"/static/images/couponBg",text:"展开更多",timer:null,payResult:"正在查询支付结果..."}},computed:(0,r.mapGetters)(["isLogin","viewColor","keyColor"]),onLoad:function(t){if(!t.order_id)return this.$util.Tips({title:"缺少参数无法查看订单支付状态"},{tab:3,url:1});this.orderId=t.order_id,this.order_type=t.order_type,this.status=t.status||0,this.msg=t.msg||"",this.isLogin?this.refreshData():(this.isAuto=!0,this.isShowAuth=!0)},onHide:function(){clearInterval(this.timer),this.timer=null},methods:{refreshData:function(){var t=this;this.timer=setInterval((function(){t.getOrderPayInfo()}),1e3)},bindMore:function(){this.isOpen=!this.isOpen,this.text="展开更多"==this.text?"收起":"展开更多"},onLoadFun:function(){this.isShowAuth=!1,this.getOrderPayInfo()},authColse:function(t){this.isShowAuth=t},getOrderPayInfo:function(){var e=this,i=this;(0,n.getPayOrder)(i.orderId).then((function(n){i.$set(i,"order_pay_info",n.data),i.couponList=n.data.give_coupon,20==i.order_type?i.payResult=1==n.data.paid?"商品兑换成功":"支付失败":i.payResult=1==n.data.paid?"支付成功":"支付失败",t.setNavigationBarTitle({title:1==n.data.paid?"支付成功":"支付失败"}),1==n.data.paid&&(clearInterval(e.timer),e.timer=null)})).catch((function(e){t.hideLoading()}))},goIndex:function(e){t.switchTab({url:"/pages/index/index"})},goPink:function(e){t.navigateTo({url:"/pages/activity/combination_status/index?id="+e})},goOrderDetails:function(e){20==this.order_type?t.navigateTo({url:"/pages/points_mall/exchange_record?delte=1"}):0==this.order_pay_info.paid?t.navigateTo({url:"/pages/users/order_list/index"}):2==this.order_pay_info.orderList[0]["is_virtual"]?t.navigateTo({url:"/pages/users/order_list/index?status=3"}):t.navigateTo({url:"/pages/users/order_list/index?status=1"})}},destroyed:function(){clearInterval(this.timer),this.timer=null},deactivated:function(){clearInterval(this.timer),this.timer=null}};e.default=a}).call(this,i("543d")["default"])},"3c8d":function(t,e,i){},"5abf":function(t,e,i){"use strict";(function(t,e){var n=i("4ea4");i("4c7d");n(i("66fd"));var r=n(i("0e76"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(r.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},"64d1":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.couponList.length>0&&t.order_pay_info.paid),n=i?t.__map(t.couponList,(function(e,i){var n=t.__get_orig(e),r=1==e.coupon_type?t._f("timeYMD")(e.use_start_time):null,o=1==e.coupon_type?t._f("timeYMD")(e.use_end_time):null;return{$orig:n,f0:r,f1:o}})):null,r=i?t.couponList.length:null;t.$mp.data=Object.assign({},{$root:{g0:i,l0:n,g1:r}})},r=[]},a13b:function(t,e,i){"use strict";i.r(e);var n=i("26f7"),r=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},abea:function(t,e,i){"use strict";var n=i("3c8d"),r=i.n(n);r.a}},[["5abf","common/runtime","common/vendor"]]]);