(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/integral_order"],{2750:function(t,e,a){"use strict";(function(t){var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(a("9523")),i=a("9252"),n=a("6859"),o=(a("736f"),a("937f"),a("4d59")),d=a("f26a"),c=(a("ddb3"),a("26cb"));function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){(0,s.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={components:{addressWindow:function(){a.e("components/addressWindow/index").then(function(){return resolve(a("376c"))}.bind(null,a)).catch(a.oe)}},data:function(){return{confirm:[],textareaStatus:!0,cartArr:[{name:"微信支付",icon:"icon-weixin2",value:"weixin",title:"微信快捷支付",payStatus:1},{name:"支付宝支付",icon:"icon-icon34",value:"alipayQr",title:"支付宝支付",payStatus:this.$store.getters.globalData.alipay_open},{name:"余额支付",icon:"icon-icon-test",value:"balance",title:"可用余额:",payStatus:this.$store.getters.globalData.yue_pay_status}],formContent:"",payType:"weixin",openType:1,active:0,coupon:{coupon:!1,list:[],statusTile:"立即使用"},address:{address:!1},addressInfo:{},pinkId:0,addressId:0,couponId:0,cartId:"",BargainId:0,combinationId:0,seckillId:0,userInfo:{},mark:"",couponTitle:"请选择",coupon_price:0,useIntegral:!1,integral_price:0,integral:0,ChangePrice:0,formIds:[],status:0,is_address:!1,toPay:!1,shippingType:0,system_store:{},storePostage:0,contacts:"",contactsTel:"",mydata:{},storeList:[],store_self_mention:0,cartInfo:{},priceGroup:{},animated:!1,totalPrice:0,integralRatio:"0",pagesUrl:"",offlinePostage:"",isAuto:!1,isShowAuth:!1,from:"",news:1,order_key:"",order_type:20,invTitle:"不开发票",special_invoice:!1,invoice_func:!1,header_type:"",invShow:!1,invList:[],invChecked:"",urlQuery:"",pay_close:!1,resData:{},product_type:1,newImg:[],domain:d.HTTP_REQUEST_URL}},computed:(0,c.mapGetters)(["isLogin","viewColor","keyColor"]),onLoad:function(t){if(this.from="routine","weixin"==this.payType&&(this.payType=this.from),!t.cartId)return this.$util.Tips({title:"请选择要购买的商品"},{tab:3,url:1});this.addressId=t.addressId||0,this.cartId=t.cartId,this.is_address=!!t.is_address,this.invChecked=t.invoice_id||"",this.textareaStatus=!0,this.isLogin&&0==this.toPay?this.getFun():this.isShowAuth=!0},onShow:function(){t.removeStorageSync("form_type_cart");var e=this;t.$on("handClick",(function(a){a&&(e.system_store=a.address),t.$off("handClick")}))},methods:{getFun:function(){this.getaddressInfo(),this.$nextTick((function(){this.getUserInfo(),this.$refs.addressWindow.getAddressList()}))},getUserInfo:function(){var t=this;(0,n.getUserInfo)().then((function(e){t.userInfo=e.data}))},onLoadFun:function(){this.getFun(),this.isShowAuth=!1},authColse:function(t){this.isShowAuth=t},payClose:function(){this.pay_close=!1},payItem:function(t){var e=t;this.active=e,this.animated=!0,this.payType=this.cartArr[e].value,"weixin"==this.payType&&(this.payType=this.from)},goPay:function(){var e,a=this;if(!a.addressId)return a.$util.Tips({title:"请选择收货地址"});if(parseFloat(a.resData.true_integral)<parseFloat(a.resData.order_total_integral))return a.$util.Tips({title:"积分不足！"});if(e={cart_id:this.cartId.split(","),address_id:this.addressId,pay_type:this.payType,mark:this.mark,order_type:this.order_type,key:this.order_key},e.mark&&this.isEmojiCharacter(e.mark[Object.keys(e.mark)[0]]))a.$util.Tips({title:"备注不允许输入表情！"});else{if("balance"==e.payType&&parseFloat(a.userInfo.now_money)<parseFloat(a.totalPrice))return a.$util.Tips({title:"余额不足！"});t.showLoading({title:"订单支付中",mask:!0}),(0,o.openPaySubscribe)().then((function(){a.payment(e)}))}},payment:function(e){var a=this;(0,i.integralOrderCreate)(e).then((function(e){var r=e.data.status,s=e.data.result.order_id,i=e.data.result.pay_key,n=e.data.result.config,o="/pages/order_pay_status/index?order_type=20&order_id="+s+"&msg="+e.message;switch(a.orderPay=!0,t.hideLoading(),r){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":case"error":return a.$util.Tips({title:e.message},{tab:5,url:o});case"success":return a.$util.Tips({title:e.message,icon:"success"},{tab:5,url:o});case"alipay":case"alipayQr":return void t.navigateTo({url:"/pages/order_pay_back/index?keyCode="+i+"&url="+n});case"routine":n.timeStamp=n.timestamp,a.toPay=!0;var d="";d=t.requestOrderPayment?"requestOrderPayment":"requestPayment",t[d](l(l({},n),{},{success:function(e){return t.hideLoading(),a.$util.Tips({title:"支付成功",icon:"success"},{tab:5,url:o})},fail:function(t){var e="/pages/order_pay_status/index?order_type=20&order_id="+s+"&msg=取消支付";return a.$util.Tips({title:"取消支付"},{tab:5,url:e+"&status=0"})}}));break;case"balance":return a.$util.Tips({title:e.msg},{tab:5,url:o+"&status=1"});default:var c="/pages/order_pay_status/index?order_type=20&order_id="+s+"&msg=取消支付";return a.$util.Tips({title:"取消支付"},{tab:5,url:c+"&status=0"})}})).catch((function(e){return t.hideLoading(),a.$util.Tips({title:e})}))},isEmojiCharacter:function(t){if(t)for(var e=0;e<t.length;e++){var a=t.charCodeAt(e);if(55296<=a&&a<=56319){if(t.length>1){var r=t.charCodeAt(e+1),s=1024*(a-55296)+(r-56320)+65536;if(118784<=s&&s<=128895)return!0}}else if(t.length>1){r=t.charCodeAt(e+1);if(8419==r)return!0}else{if(8448<=a&&a<=10239)return!0;if(11013<=a&&a<=11015)return!0;if(10548<=a&&a<=10549)return!0;if(12951<=a&&a<=12953)return!0;if(169==a||174==a||12349==a||12336==a||11093==a||11036==a||11035==a||11088==a)return!0}}},changeClose:function(){this.$set(this.address,"address",!1)},ChangCouponsClone:function(){},changeTextareaStatus:function(){},OnChangeAddress:function(t){this.textareaStatus=!0,this.addressId=t,this.address.address=!1,this.getaddressInfo()},bindHideKeyboard:function(t){this.mark=t.detail.value},getConfirm:function(){var t=this,e=this;(0,i.integralOrderConfirm)({cart_id:this.cartId.split(","),address_id:this.addressId}).then((function(t){e.$set(e,"resData",t.data),e.$set(e,"cartInfo",t.data.order),e.$set(e,"order_key",t.data.key),e.$set(e,"order_type",t.data.order_type)})).catch((function(e){return t.$util.Tips({title:e},{tab:3,url:1})}))},bindDateChange:function(t,e){this.confirm[e].value=t.target.value},bindTimeChange:function(t,e){this.confirm[e].value=t.target.value},getaddressInfo:function(){var t=this;t.addressId?(0,n.getAddressDetail)(t.addressId).then((function(e){e.data.is_default=parseInt(e.data.is_default),t.addressInfo=e.data||{},t.addressId=e.data.address_id||0,t.address.addressId=e.data.address_id||0,t.getConfirm()})):(0,n.getAddressList)().then((function(e){t.addressInfo=e.data.list.length>0?e.data.list[0]:{},t.addressId=e.data.list.length>0?e.data.list[0].address_id:0,t.address.addressId=e.data.list.length>0?e.data.list[0].address_id:0,t.getConfirm()}))},onAddress:function(){this.addressInfo.real_name?(this.textareaStatus=!1,this.address.address=!0,this.pagesUrl="/pages/users/user_address/index?cartId="+this.cartId+"&product_type=20"):t.navigateTo({url:"/pages/users/user_address/index?cartId=".concat(this.cartId,"&product_type=20")})},clickTextArea:function(){var t=this;this.$nextTick((function(){t.$refs.getFocus.focus()}))}}};e.default=f}).call(this,a("543d")["default"])},"60ab":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){}));var r=function(){var t=this.$createElement;this._self._c},s=[]},"64c5":function(t,e,a){"use strict";(function(t,e){var r=a("4ea4");a("4c7d");r(a("66fd"));var s=r(a("f65c"));t.__webpack_require_UNI_MP_PLUGIN__=a,e(s.default)}).call(this,a("bc2e")["default"],a("543d")["createPage"])},8794:function(t,e,a){},"9f34":function(t,e,a){"use strict";var r=a("8794"),s=a.n(r);s.a},e14c:function(t,e,a){"use strict";a.r(e);var r=a("2750"),s=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e["default"]=s.a},f65c:function(t,e,a){"use strict";a.r(e);var r=a("60ab"),s=a("e14c");for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);a("9f34");var n=a("f0c5"),o=Object(n["a"])(s["default"],r["b"],r["c"],!1,null,"994e724e",null,!1,r["a"],void 0);e["default"]=o.exports}},[["64c5","common/runtime","common/vendor"]]]);