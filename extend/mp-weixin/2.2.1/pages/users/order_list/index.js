(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/order_list/index"],{"2f74":function(t,e,i){"use strict";(function(t,e){var n=i("4ea4");i("4c7d");n(i("66fd"));var r=n(i("4158"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(r.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},3973:function(t,e,i){},"3edd":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=(this._self._c,this.presellProList.length),i=this.orderList.length,n=this.orderList.length,r=0==this.orderList.length&&this.page>1;this.$mp.data=Object.assign({},{$root:{g0:e,g1:i,g2:n,g3:r}})},r=[]},4158:function(t,e,i){"use strict";i.r(e);var n=i("3edd"),r=i("deee");for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);i("c488");var a=i("f0c5"),s=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"41052770",null,!1,n["a"],void 0);e["default"]=s.exports},"722f":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("9523")),o=i("59c6"),a=i("6859"),s=i("4d59"),u=i("26cb"),c=i("3255"),d=i("f26a");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){(0,r.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}getApp();var f={components:{payment:function(){Promise.all([i.e("common/vendor"),i.e("components/payment/index")]).then(function(){return resolve(i("fecf"))}.bind(null,i)).catch(i.oe)},emptyPage:function(){i.e("components/emptyPage").then(function(){return resolve(i("c71c"))}.bind(null,i)).catch(i.oe)},home:function(){i.e("components/home/index").then(function(){return resolve(i("4cc1"))}.bind(null,i)).catch(i.oe)},authorize:function(){Promise.all([i.e("common/vendor"),i.e("components/Authorize")]).then(function(){return resolve(i("02f6"))}.bind(null,i)).catch(i.oe)},addInvoicing:function(){i.e("components/addInvoicing/index").then(function(){return resolve(i("ab68"))}.bind(null,i)).catch(i.oe)}},data:function(){return{loading:!1,loadend:!1,loadTitle:"加载更多",orderList:[],presellProList:[],presellOrderCount:0,orderData:{},orderStatus:0,page:1,limit:20,domain:d.HTTP_REQUEST_URL,payMode:[{name:"微信支付",icon:"icon-weixinzhifu",value:"wechat",title:"微信快捷支付",payStatus:1},{name:"支付宝支付",icon:"icon-zhifubao",value:"alipay",title:"支付宝支付",payStatus:this.$store.getters.globalData.alipay_open},{name:"余额支付",icon:"icon-yuezhifu",value:"balance",title:"可用余额:",number:0,payStatus:this.$store.getters.globalData.yue_pay_status}],pay_close:!1,pay_order_id:"",invoice_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1,isReady:!0,invoice:{invoice:!1,add:!1}}},computed:h(h({},(0,u.mapGetters)(["isLogin","viewColor"])),(0,c.configMap)(["hide_mer_status","community_status","alipay_open","yue_pay_status"])),watch:{alipay_open:function(t){this.payMode[1].payStatus=t},yue_pay_status:function(t){this.payMode[2].payStatus=t}},onShow:function(){this.isLogin?(this.page=1,this.loadend=!1,this.loading=!1,this.getOrderData(),this.getOrderList(),this.getUserInfo(),this.getpreSellOrderList()):(this.isAuto=!0,this.isShowAuth=!0)},onReady:function(){},mounted:function(){},methods:{goMall:function(e){0==this.hide_mer_status&&t.navigateTo({url:"/pages/store/home/index?id="+e.mer_id})},onLoadFun:function(){this.isShowAuth=!1,this.getOrderData(),this.getOrderList(),this.getUserInfo()},authColse:function(t){this.isShowAuth=t},onChangeFun:function(t){var e=t,i=e.action||null,n=void 0!=e.value?e.value:null;i&&this[i]&&this[i](n)},getUserInfo:function(){var t=this;(0,a.getUserInfo)().then((function(e){t.payMode[2].number=e.data.now_money}))},payClose:function(){this.pay_close=!1},onLoad:function(t){t.status&&(this.orderStatus=t.status)},getOrderData:function(){var t=this;(0,o.orderData)().then((function(e){t.$set(t,"orderData",e.data)}))},cancelOrder:function(t,e){var i=this;if(!e)return i.$util.Tips({title:"缺少订单号无法取消订单"});(0,o.unOrderCancel)(e).then((function(e){return i.$util.Tips({title:e.message,icon:"success"},(function(){i.orderList.splice(t,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData()}))})).catch((function(t){return i.$util.Tips({title:t})}))},goPay:function(t,e){this.$set(this,"pay_close",!0),this.order_id=e,this.pay_order_id=e.toString(),this.$set(this,"totalPrice",t)},pay_complete:function(){this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.pay_close=!1,this.pay_order_id="",this.getOrderData(),this.getOrderList()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},goOrderDetails:function(e){var i=this;if(!e)return that.$util.Tips({title:"缺少订单号无法查看订单详情"});t.showLoading({title:"正在加载"}),(0,s.openOrderSubscribe)().then((function(){t.hideLoading(),0==i.orderStatus?t.navigateTo({url:"/pages/order_details/stay?order_id="+e}):t.navigateTo({url:"/pages/order_details/index?order_id="+e})})).catch((function(){t.hideLoading()}))},goOrderDetails_Evaluation:function(e){if(!e)return that.$util.Tips({title:"缺少订单号无法查看订单详情和评价"});0==this.orderStatus?t.navigateTo({url:"/pages/order_details/stay?order_id="+e}):t.navigateTo({url:"/pages/order_details/index?order_id="+e})},statusClick:function(t){t!=this.orderStatus&&(this.orderStatus=t,this.loadend=!1,this.loading=!1,this.page=1,this.$set(this,"orderList",[]),this.getOrderList())},getOrderList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="加载更多",t.isReady&&(t.isReady=!1,0==t.orderStatus?(0,o.groupOrderList)({page:t.page,limit:t.limit}).then((function(e){t.isReady=!0;var i=e.data.list||[],n=i.length<t.limit;t.orderList=1==t.page?i:t.$util.SplitArray(i,t.orderList),t.$set(t,"orderList",t.orderList),t.getProductCount(),t.loadend=n,t.loading=!1,t.loadTitle=n?"我也是有底线的":"加载更多",t.page=t.page+1})):(0,o.getOrderList)({status:t.orderStatus-1,page:t.page,limit:t.limit}).then((function(e){var i=e.data.list||[],n=i.length<t.limit;t.orderList=1==t.page?i:t.$util.SplitArray(i,t.orderList),t.$set(t,"orderList",t.orderList),t.getProductCount(),t.loadend=n,t.loading=!1,t.loadTitle=n?"我也是有底线的":"加载更多",t.page=t.page+1,t.isReady=!0})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"}))))},getpreSellOrderList:function(){var t=this;(0,o.getOrderList)({status:10,page:1,limit:1}).then((function(e){var i=e.data.list||[];t.presellOrderCount=e.data.count,t.$set(t,"presellProList",i)}))},getProductCount:function(){var t=this;0!==this.orderStatus&&this.orderList.forEach((function(e,i){var n=0;e.orderProduct&&(e.orderProduct.forEach((function(t){n+=t.product_num})),t.orderList[i]["orderNum"]=n)}))},delOrder:function(t,e){var i=this;(0,o.orderDel)(t).then((function(t){return i.orderList.splice(e,1),i.$set(i,"orderList",i.orderList),i.$set(i.orderData,"unpaid_count",i.orderData.unpaid_count-1),i.getOrderData(),i.$util.Tips({title:"删除成功",icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},confirmOrder:function(e,i){var n=this;t.showModal({title:"确认收货",content:"为保障权益，请收到货确认无误后，再确认收货",success:function(t){t.confirm&&(0,o.orderTake)(e.order_id).then((function(t){return n.$util.Tips({title:"操作成功",icon:"success"},(function(){n.orderList.splice(i,1),n.getOrderData()}))})).catch((function(t){return n.$util.Tips({title:t})}))}})},applyInvoice:function(t){this.invoice_order_id=t,this.invoice.invoice=!0,this.$refs.addInvoicing.popupTitle=!1,this.$refs.addInvoicing.getInvoiceDefault(),this.$refs.addInvoicing.getInvoiceList()},changeInvoiceClose:function(t){t&&this.getInvoiceData(t),this.$set(this.invoice,"invoice",!1)},getInvoiceData:function(t){var e=this;(0,o.applyInvoiceApi)(e.invoice_order_id,t).then((function(t){return e.$util.Tips({title:t.message})})).catch((function(t){return e.$util.Tips({title:t})}))}},onReachBottom:function(){this.getOrderList()}};e.default=f}).call(this,i("543d")["default"])},c488:function(t,e,i){"use strict";var n=i("3973"),r=i.n(n);r.a},deee:function(t,e,i){"use strict";i.r(e);var n=i("722f"),r=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a}},[["2f74","common/runtime","common/vendor"]]]);