(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/annex/vip_paid/index"],{"0f08":function(e,t,n){"use strict";(function(e,t){var i=n("4ea4");n("4c7d");i(n("66fd"));var a=i(n("f2ee"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"36b7":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={easyLoadimage:function(){return Promise.all([n.e("common/vendor"),n.e("components/easy-loadimage/easy-loadimage")]).then(n.bind(null,"2243"))}},a=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.memberType,(function(t,n){var i=e.__get_orig(t),a=e._f("moneyFormat")(t.value.price),o=e._f("moneyFormat")(t.value.cost_price);return{$orig:i,f0:a,f1:o}}))),i=e.goodsList.length;e.$mp.data=Object.assign({},{$root:{l0:n,g0:i}})},o=[]},"37bc":function(e,t,n){},"52f0":function(e,t,n){"use strict";n.r(t);var i=n("7b59"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"72bb":function(e,t,n){"use strict";var i=n("37bc"),a=n.n(i);a.a},"7b59":function(e,t,n){"use strict";(function(e){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("9523")),o=n("26cb"),r=n("6859"),s=(n("59c6"),n("ddb3")),c=n("4d59"),u=i(n("569a"));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={components:{payment:function(){Promise.all([n.e("common/vendor"),n.e("components/payment/index")]).then(function(){return resolve(n("fecf"))}.bind(null,n)).catch(n.oe)},easyLoadimage:function(){Promise.all([n.e("common/vendor"),n.e("components/easy-loadimage/easy-loadimage")]).then(function(){return resolve(n("2243"))}.bind(null,n)).catch(n.oe)}},filters:{dateFormat:function(e){return(0,u.default)(1e3*e).format("YYYY-MM-DD")},moneyFormat:function(e){return parseFloat(e)}},data:function(){return{memberType:[],userInfo:{},memberRights:[],memberExplain:[],memberCoupons:[],isGetFree:null,account:"",password:"",goodsList:[],pay_order_id:"",payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"routine",title:"微信快捷支付",payStatus:!0}],pay_close:!1,totalPrice:"0",formContent:"",page:1,limit:15,finished:!1,loading:!1,memberEndTime:"",type:0,svipDef:null,svip_type:0}},watch:{},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?(this.memberEquity(),this.getMemberCard(),this.groomList()):(0,s.toLogin)()},onShow:function(){e.removeStorageSync("form_type_cart")},onReachBottom:function(){this.groomList()},methods:{pay:function(){0==this.totalPrice?this.createMemberCard("weixin"):this.pay_close=!0},payClose:function(){this.pay_close=!1},goDetail:function(t){e.navigateTo({url:"/pages/goods_details/index?id=".concat(t)})},goUrl:function(t){-1!=t.indexOf("http")||(-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index","/pages/plant_grass/index"].indexOf(t)?e.navigateTo({url:t}):e.switchTab({url:t}))},memberEquity:function(){var t=this;(0,r.memberEquity)().then((function(n){t.memberRights=n.data.interests,t.userInfo=n.data.user,n.data.user.is_svip>0&&e.navigateTo({url:"/pages/annex/vip_center/index"})})).catch((function(t){e.showToast({title:t,icon:"none"})}))},getMemberCard:function(){var t=this;e.showLoading({title:"正在加载…"}),(0,r.memberCard)().then((function(n){e.hideLoading(),t.memberType=n.data.list,t.svipDef=n.data.def,t.svip_type=n.data.def.svip_type,t.totalPrice=n.data.def.price.toString(),t.pay_order_id=n.data.def.group_data_id.toString()})).catch((function(t){e.hideLoading(),e.showToast({title:t,icon:"none"})}))},groomList:function(){var e=this;this.finished||this.loading||(this.loading=!0,(0,r.groomList)({page:this.page,limit:this.limit}).then((function(t){e.goodsList=e.goodsList.concat(t.data.list),e.finished=t.data.list.length<e.limit,e.loading=!1,e.page+=1})).catch((function(e){})))},checkType:function(e,t){this.type=t,this.svipDef=e.value,this.svip_type=e.value.svip_type,this.pay_order_id=e.group_data_id,this.totalPrice=e.value.price.toString()},payCheck:function(e){this.createMemberCard(e)},createMemberCard:function(t){var n=this;e.showLoading({title:"正在加载…"});var i={pay_type:t},a=this.pay_order_id;(0,c.openPaySubscribe)().then((function(){(0,r.memberCardCreate)(a,i).then((function(t){if(!(parseFloat(n.totalPrice)>0))return e.hideLoading(),n.$util.Tips({title:"开通成功"},(function(){e.navigateTo({url:"/pages/annex/vip_center/index"})}));n.callPay(t)})).catch((function(t){e.hideLoading(),e.showToast({title:t,icon:"none"})}))}))},callPay:function(t){var n=this,i=t.data.status,a=(t.data.result.order_id,t.data.result.pay_key),o=t.data.result.config,r="/pages/annx/vip_center/index";switch(i){case"ORDER_EXIST":case"EXTEND_ORDER":case"PAY_ERROR":case"error":return e.hideLoading(),n.payClose(),n.$util.Tips({title:t.message});case"success":return e.hideLoading(),n.payClose(),n.$util.Tips({title:t.message,icon:"success"});case"alipay":case"alipayQr":return e.hideLoading(),n.payClose(),void e.navigateTo({url:"/pages/order_pay_back/index?keyCode="+a+"&url="+o});case"routine":o.timeStamp=o.timestamp;var s="";s=e.requestOrderPayment?"requestOrderPayment":"requestPayment",e[s](l(l({},o),{},{success:function(t){return e.hideLoading(),n.payClose(),n.$util.Tips({title:"支付成功",icon:"success"},{tab:5,url:r})},fail:function(t){return e.hideLoading(),n.payClose(),n.$util.Tips({title:"取消支付"})}}));break;case"balance":return e.hideLoading(),n.payClose(),n.$util.Tips({title:t.msg},{tab:5,url:r})}},onChangeFun:function(e){var t=e,n=t.action||null,i=void 0!=t.value?t.value:null;n&&this[n]&&this[n](i)}},onPageScroll:function(t){e.$emit("scroll")}};t.default=f}).call(this,n("543d")["default"])},f2ee:function(e,t,n){"use strict";n.r(t);var i=n("36b7"),a=n("52f0");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("72bb");var r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"650467f8",null,!1,i["a"],void 0);t["default"]=s.exports}},[["0f08","common/runtime","common/vendor"]]]);