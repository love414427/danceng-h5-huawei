(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/combination/index"],{"163e":function(t,n,e){"use strict";(function(t,n){var i=e("4ea4");e("4c7d");i(e("66fd"));var o=i(e("75d6"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(o.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"2e05":function(t,n,e){"use strict";var i=e("9de8"),o=e.n(i);o.a},"75d6":function(t,n,e){"use strict";e.r(n);var i=e("c16a"),o=e("f1a7");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("2e05");var c=e("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"44792d7b",null,!1,i["a"],void 0);n["default"]=s.exports},"9de8":function(t,n,e){},baf3:function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("041f"),a=(e("58d4"),e("3255")),c=e("f26a"),s=e("26cb"),r=getApp(),u={components:{passwordPopup:function(){Promise.all([e.e("common/vendor"),e.e("components/passwordPopup/index")]).then(function(){return resolve(e("5edd"))}.bind(null,e)).catch(e.oe)},home:function(){e.e("components/home/index").then(function(){return resolve(e("4cc1"))}.bind(null,e)).catch(e.oe)},tabNav:function(){e.e("components/combinNav/index").then(function(){return resolve(e("477c8"))}.bind(null,e)).catch(e.oe)},userNameSwiper:function(){e.e("components/userNameSwiper/userNameSwiper").then(function(){return resolve(e("cf8e"))}.bind(null,e)).catch(e.oe)}},computed:(0,a.configMap)({statusBarHeight:0},(0,s.mapGetters)(["viewColor","keyColor"])),data:function(){return{domain:c.HTTP_REQUEST_URL,navH:"",topImage:"",combinationList:[],combinationUserList:[],combinationUserCount:0,navTop:[{cate_name:"精选",store_category_id:""}],active:1,type:0,scrollLeft:0,interval:0,status:1,page:1,limit:10,loading:!1,loadend:!1,pageloading:!1,isFixed:!1,navIndex:0,avatar:"../../../static/images/f.png",headBg:"../static/images/comHead"}},onShareAppMessage:function(){return t.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]}),{title:"拼团",path:"pages/activity/combination/index"}},onShareTimeline:function(){return{title:"拼团活动",query:{key:""},imageUrl:""}},onLoad:function(){getCurrentPages();i.setNavigationBarTitle({title:"拼团列表"}),this.navH=r.globalData.navHeight,this.getCombinationProductList(""),this.getIndexConfig(),this.getCombinationUser()},methods:{goBack:function(){i.navigateBack()},getCombinationProductList:function(t){var n=this,e={page:n.page,limit:n.limit,store_category_id:t};n.pageloading||(this.pageloading=!0,(0,o.getCombinationList)(e).then((function(t){var e=t.data.list;n.page++,n.combinationList=n.combinationList.concat(e),i.stopPullDownRefresh(),n.page=n.page,n.pageloading=!1})).catch((function(t){n.pageloading=!1})))},getIndexConfig:function(){var t=this;(0,o.getActivitycategory)(4).then((function(n){t.navTop=t.navTop.concat(n.data)}))},getCombinationUser:function(){var t=this;(0,o.getCombinationUser)({limit:30}).then((function(n){t.$set(t,"combinationUserCount",n.data.count),t.$set(t,"combinationUserList",n.data.list)}))},changeTab:function(t){this.navIndex!=t.index&&(this.navIndex=t.index,this.page=1,this.limit=8,this.combinationList=[],this.getCombinationProductList(t.pid))},goDetails:function(t){i.navigateTo({url:"/pages/activity/combination_details/index?id="+t.product_group_id})}},onPullDownRefresh:function(){this.page=1,this.pageloading=!1,this.loadend=!1,this.combinationList=[],this.getCombinationProductList("")},onReachBottom:function(){this.getCombinationProductList("")},onPageScroll:function(t){}};n.default=u}).call(this,e("bc2e")["default"],e("543d")["default"])},c16a:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement,n=(this._self._c,this.combinationUserList.length),e=n>0?this.combinationUserList.slice(0,10):null;this.$mp.data=Object.assign({},{$root:{g0:n,l0:e}})},o=[]},f1a7:function(t,n,e){"use strict";e.r(n);var i=e("baf3"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a}},[["163e","common/runtime","common/vendor"]]]);