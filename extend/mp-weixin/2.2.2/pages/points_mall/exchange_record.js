(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/exchange_record"],{"0518":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=(this._self._c,this.exchangeList.length),n=0==this.exchangeList.length&&!this.loading;this.$mp.data=Object.assign({},{$root:{g0:e,g1:n}})},a=[]},"20ff":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("9523")),o=n("26cb"),r=n("9252"),c=n("6859"),s=n("3255"),l=n("ddb3");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"exchangeRecord",components:{emptyPage:function(){n.e("components/emptyPage").then(function(){return resolve(n("c71c"))}.bind(null,n)).catch(n.oe)},payment:function(){Promise.all([n.e("common/vendor"),n.e("components/payment/index")]).then(function(){return resolve(n("fecf"))}.bind(null,n)).catch(n.oe)}},props:{},data:function(){return{exchangeList:[],payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"wechat",title:"微信快捷支付",payStatus:1},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"支付宝支付",payStatus:this.$store.getters.globalData.alipay_open},{name:"余额支付",icon:"icon-yuezhifu",value:"balance",title:"可用余额:",number:0,payStatus:this.$store.getters.globalData.yue_pay_status}],loadend:!1,loading:!1,loadTitle:"加载更多",page:1,limit:20,userInfo:{},pay_close:!1,pay_order_id:"",order_id:"",totalPrice:"0",delta:1}},computed:d(d({},(0,o.mapGetters)(["isLogin","viewColor"])),(0,s.configMap)(["alipay_open","yue_pay_status"])),watch:{alipay_open:function(t){this.payMode[1].payStatus=t},yue_pay_status:function(t){this.payMode[2].payStatus=t}},onLoad:function(t){this.delta=t.delta||0},onUnload:function(){},onShow:function(){!1===this.isLogin?(0,l.toLogin)():(this.getIntegralOrderList(),this.getUserInfo())},methods:{goDetail:function(e){t.navigateTo({url:"/pages/points_mall/integral_order_details?order_id=".concat(e)})},getUserInfo:function(){var t=this;(0,c.getUserInfo)().then((function(e){t.payMode[2].number=e.data.now_money}))},getIntegralOrderList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="",(0,r.integralOrderList)({page:t.page,limit:t.limit}).then((function(e){var n=e.data.list.length<t.limit;t.loadend=n,t.loading=!1,t.loadTitle=n?"已全部加载":"加载更多",t.exchangeList.push.apply(t.exchangeList,e.data.list),t.page++})).catch((function(e){t.$util.Tips({title:e})})))},goPay:function(t){this.$set(this,"pay_close",!0),this.order_id=t.order_id,this.pay_order_id=t.group_order_id.toString(),this.$set(this,"totalPrice",t.pay_price)},pay_complete:function(){this.loadend=!1,this.page=1,this.$set(this,"exchangeList",[]),this.pay_close=!1,this.pay_order_id="",this.getIntegralOrderList()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},payClose:function(){this.$set(this,"pay_close",!1),this.pay_order_id=""},onChangeFun:function(t){var e=t,n=e.action||null,i=void 0!=e.value?e.value:null;n&&this[n]&&this[n](i)},goOrderDetails:function(e){if(!e)return that.$util.Tips({title:"缺少订单号无法查看订单详情"});t.navigateTo({url:"/pages/points_mall/integral_order_details?order_id="+e})},getLogistics:function(e){t.navigateTo({url:"/pages/users/goods_logistics/index?orderId=".concat(e)})},delOrder:function(e,n,i){var a=this;t.showModal({title:"提示",content:"确定删除该记录吗？",success:function(t){t.confirm?(0,r.integralOrderDelete)(e).then((function(t){a.exchangeList[n]["orderProduct"].splice(i,1),a.$util.Tips({title:"删除成功"})})).catch((function(t){return a.$util.Tips({title:t})})):t.cancel}})}},onReachBottom:function(){this.getIntegralOrderList()}};e.default=f}).call(this,n("543d")["default"])},"3d09":function(t,e,n){"use strict";n.r(e);var i=n("20ff"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"3d42":function(t,e,n){},"4ce6":function(t,e,n){"use strict";var i=n("3d42"),a=n.n(i);a.a},"977c":function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("4c7d");i(n("66fd"));var a=i(n("ebbd"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},ebbd:function(t,e,n){"use strict";n.r(e);var i=n("0518"),a=n("3d09");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("4ce6");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=c.exports}},[["977c","common/runtime","common/vendor"]]]);