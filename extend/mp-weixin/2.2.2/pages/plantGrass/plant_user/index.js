(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/plantGrass/plant_user/index"],{1348:function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("4c7d");o(n("66fd"));var i=o(n("bbf9"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},2805:function(t,e,n){"use strict";(function(t){var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("9523")),r=n("3fd7"),s=n("26cb"),a=n("ddb3"),l=n("f26a");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}getApp();var c={components:{WaterfallsFlow:function(){n.e("components/plantWaterfallsFlow/WaterfallsFlow").then(function(){return resolve(n("300a"))}.bind(null,n)).catch(n.oe)}},data:function(){return{domain:l.HTTP_REQUEST_URL,goods:[],loadTitle:"加载更多",loading:!1,loaded:!1,userInfo:{},where:{page:1,limit:30},tab:0,uid:""}},created:function(){},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,s.mapGetters)(["isLogin","viewColor"])),watch:{},onLoad:function(t){this.uid=t.id,this.isLogin?(this.getAuthorInfo(this.uid),this.getList(this.uid)):(0,a.toLogin)()},onShow:function(){},onReady:function(){},mounted:function(){},methods:{getAuthorInfo:function(t){var e=this;(0,r.userInfoApi)(t).then((function(t){e.userInfo=t.data}))},followAuthor:function(){var t=this;if(!1===this.isLogin)(0,a.toLogin)();else{var e=!this.userInfo.is_start;(0,r.followAuthorApi)(this.userInfo.uid,{status:e}).then((function(e){200===e.status&&(t.userInfo.is_start=!t.userInfo.is_start),t.$util.Tips({title:e.message})}))}},changeTab:function(t){this.tab=t,this.where.page=1,this.loaded=this.loading=!1,this.goods=[];var e=this.userInfo.is_self?this.uid:this.userInfo.uid;this.getList(e)},getList:function(e){var n=this;n.loaded||n.loading||(n.loading=!0,n.loadTitle="",1==n.tab?this.where.is_type=1:this.where.is_type="",0==n.tab?(0,r.userArticleLst)(e,n.where).then((function(t){var e=t.data.list,o=n.$util.SplitArray(e,n.goods);n.loaded=e.length<n.where.limit,n.loading=!1,n.loadTitle=n.loaded?"到底了":"加载更多",n.$set(n,"goods",o),n.$set(n.where,"page",n.where.page+1)})).catch((function(e){n.loading=!1,t.showToast({title:e,icon:"none"})})):(0,r.starArticleLst)(n.where).then((function(t){n.loading=!1;var e=t.data.list,o=n.$util.SplitArray(e,n.goods);n.loaded=e.length<n.where.limit,n.loading=!1,n.loadTitle=n.loaded?"到底了":"加载更多",n.$set(n,"goods",o),n.$set(n.where,"page",n.where.page+1)})).catch((function(e){n.loading=!1,t.showToast({title:e,icon:"none"})})))}},onReachBottom:function(){var t=this.userInfo.is_self?this.uid:this.userInfo.uid;this.getList(t)},onPullDownRefresh:function(){},onPageScroll:function(e){t.$emit("scroll")}};e.default=c}).call(this,n("543d")["default"])},4138:function(t,e,n){},4443:function(t,e,n){"use strict";var o=n("4138"),i=n.n(o);i.a},"7d83":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={WaterfallsFlow:function(){return n.e("components/WaterfallsFlow/WaterfallsFlow").then(n.bind(null,"7612"))}},i=function(){var t=this.$createElement,e=(this._self._c,this.goods.length),n=e>0?parseInt(this.uid):null,o=0==this.goods.length&&!this.loading,i=this.loading||0==this.goods.length;this.$mp.data=Object.assign({},{$root:{g0:e,m0:n,g1:o,g2:i}})},r=[]},bbf9:function(t,e,n){"use strict";n.r(e);var o=n("7d83"),i=n("dc95");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("4443");var s=n("f0c5"),a=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"b1e33a3e",null,!1,o["a"],void 0);e["default"]=a.exports},dc95:function(t,e,n){"use strict";n.r(e);var o=n("2805"),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a}},[["1348","common/runtime","common/vendor"]]]);