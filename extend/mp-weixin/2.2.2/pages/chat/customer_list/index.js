(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/customer_list/index"],{3048:function(t,i,e){"use strict";(function(t,i){var n=e("4ea4");e("4c7d");n(e("66fd"));var r=n(e("8f3d"));t.__webpack_require_UNI_MP_PLUGIN__=e,i(r.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"43bd":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=(t._self._c,0==t.type&&t.list.length>0),n=t.__map(t.list,(function(i,n){var r=t.__get_orig(i),l=e&&i.merchant?i.last&&i.last.create_time.split(" ")[1]||"":null;return{$orig:r,g1:l}})),r=1==t.type&&t.list.length>0,l=t.__map(t.list,(function(i,e){var n=t.__get_orig(i),l=r?i.last&&i.last.create_time.split(" ")[1]:null;return{$orig:n,g3:l}})),a=t.list.length;t.$mp.data=Object.assign({},{$root:{g0:e,l0:n,g2:r,l1:l,g4:a}})},r=[]},"449a":function(t,i,e){},"86d5":function(t,i,e){"use strict";e.r(i);var n=e("c68f"),r=e.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(l);i["default"]=r.a},"8f3d":function(t,i,e){"use strict";e.r(i);var n=e("43bd"),r=e("86d5");for(var l in r)["default"].indexOf(l)<0&&function(t){e.d(i,t,(function(){return r[t]}))}(l);e("9887");var a=e("f0c5"),c=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);i["default"]=c.exports},9887:function(t,i,e){"use strict";var n=e("449a"),r=e.n(n);r.a},c68f:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("6859"),r=e("ddb3"),l=e("26cb"),a={name:"CustomerList",components:{emptyPage:function(){e.e("components/emptyPage").then(function(){return resolve(e("c71c"))}.bind(null,e)).catch(e.oe)}},data:function(){return{list:[],productId:0,orderId:"",type:0,timer:null,page:1,limit:9999,mer_id:"",loading:!1,clear:!1}},computed:(0,l.mapGetters)(["isLogin","viewColor"]),onLoad:function(t){this.type=t.type,this.mer_id=t.mer_id,this.isLogin?this.getList(this.mer_id):(0,r.toLogin)()},onShow:function(t){this.isLogin?this.liveUpdate():(0,r.toLogin)()},onHide:function(){this.timer&&(clearInterval(this.timer),this.timer=null),this.clear=!0},onUnload:function(){this.timer&&(clearInterval(this.timer),this.timer=null),this.clear=!0},methods:{getList:function(t){var i=this;this.loading=!0,0==this.type?(0,n.serviceList)({page:this.page,limit:this.limit}).then((function(t){if(i.list=t.data.list,400==t.status)return clearInterval(i.timer),i.timer=null,i.$util.Tips({title:t.message})})).finally((function(t){return i.loading=!1,i.$util.Tips({title:t})})).catch((function(t){return i.$util.Tips({title:t})})):(0,n.serviceUserList)(t,{page:this.page,limit:this.limit}).then((function(t){if(i.list=t.data.list,400==t.status)return clearInterval(i.timer),i.timer=null,i.$util.Tips({title:t.message})})).finally((function(t){return i.loading=!1,clearInterval(i.timer),i.timer=null,i.$util.Tips({title:t})})).catch((function(t){return clearInterval(i.timer),i.timer=null,i.$util.Tips({title:t})}))},liveUpdate:function(){var t=this;this.clear=!1,t.timer&&(clearInterval(t.timer),t.timer=null),t.timer=setInterval((function(){t.clear?clearInterval(t.timer):!t.loading&&t.getList(t.mer_id)}),5e3)},goPage:function(i){i.num=0,0==this.type?t.navigateTo({url:"/pages/chat/customer_list/chat?mer_id=".concat(i.mer_id)}):t.navigateTo({url:"/pages/chat/customer_list/chat?userId=".concat(i.user.uid,"&mer_id=").concat(i.mer_id)})}},changeTitle:function(t){this.mer_id=t.detail.value.toString()}};i.default=a}).call(this,e("543d")["default"])}},[["3048","common/runtime","common/vendor"]]]);