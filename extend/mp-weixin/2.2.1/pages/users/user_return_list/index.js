(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_return_list/index"],{"0552":function(t,e,n){"use strict";n.r(e);var i=n("2a01"),o=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},"2a01":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("59c6"),o=n("26cb"),r={components:{home:function(){n.e("components/home/index").then(function(){return resolve(n("4cc1"))}.bind(null,n)).catch(n.oe)},authorize:function(){Promise.all([n.e("common/vendor"),n.e("components/Authorize")]).then(function(){return resolve(n("02f6"))}.bind(null,n)).catch(n.oe)}},data:function(){return{loading:!1,loadend:!1,loadTitle:"加载更多",orderList:[],orderStatus:-3,page:1,limit:20,isAuto:!1,isShowAuth:!1}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?this.getOrderList():(this.isAuto=!0,this.isShowAuth=!0)},onReachBottom:function(){this.getOrderList()},methods:{onLoadFun:function(){this.isShowAuth=!1,this.getOrderList()},authColse:function(t){this.isShowAuth=t},goOrderDetails:function(e){if(!e)return that.$util.Tips({title:"缺少订单号无法查看订单详情"});t.navigateTo({url:"/pages/order_details/index?order_id="+e+"&isReturen=1"})},getOrderList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="",(0,i.getOrderList)({type:t.orderStatus,page:t.page,limit:t.limit}).then((function(e){var n=e.data||[],i=n.length<t.limit;t.orderList=t.$util.SplitArray(n,t.orderList),t.$set(t,"orderList",t.orderList),t.loadend=i,t.loading=!1,t.loadTitle=i?"我也是有底线的":"加载更多",t.page=t.page+1})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))}}};e.default=r}).call(this,n("543d")["default"])},"856b":function(t,e,n){},"8ff7":function(t,e,n){"use strict";var i=n("856b"),o=n.n(i);o.a},a6d6:function(t,e,n){"use strict";n.r(e);var i=n("c0c61"),o=n("0552");for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("8ff7");var a=n("f0c5"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"1694179a",null,!1,i["a"],void 0);e["default"]=u.exports},c0c61:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.orderList.length),i=n?t.__map(t.orderList,(function(e,n){var i=t.__get_orig(e),o=e.cartInfo.length||0;return{$orig:i,g1:o}})):null;t.$mp.data=Object.assign({},{$root:{g0:n,l0:i}})},o=[]},f914:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("4c7d");i(n("66fd"));var o=i(n("a6d6"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["f914","common/runtime","common/vendor"]]]);