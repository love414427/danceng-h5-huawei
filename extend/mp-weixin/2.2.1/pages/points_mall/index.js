(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/points_mall/index"],{2971:function(t,e,n){"use strict";n.r(e);var o=n("bb9a"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"45e3":function(t,e,n){"use strict";var o=n("8382"),i=n.n(o);i.a},7648:function(t,e,n){"use strict";n.r(e);var o=n("ffff"),i=n("2971");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("45e3");var d=n("f0c5"),l=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,"0722b230",null,!1,o["a"],void 0);e["default"]=l.exports},8382:function(t,e,n){},"8e30":function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("4c7d");o(n("66fd"));var i=o(n("7648"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},bb9a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("ddb3");var o=n("26cb"),i=n("9252"),a=(n("f823"),n("f26a")),d={components:{},data:function(){return{tabClick:0,autoplay:!0,circular:!0,interval:3e3,duration:500,imgUrls:[],goodList:[],modelList:[],modelLength:0,tabTitle:[],domain:a.HTTP_REQUEST_URL,isShowAuth:!1,loadend:!1,loading:!1,loadTitle:"加载更多",where:{page:1,limit:10,scope:""}}},computed:(0,o.mapGetters)(["isLogin","viewColor"]),onLoad:function(){this.getIntegralHome(),this.getIntegralScope(),this.getIntegralGoods()},watch:{},onShow:function(){},methods:{onLoadFun:function(){this.isShowAuth=!1},authColse:function(t){this.isShowAuth=t},getIntegralHome:function(){var t=this;(0,i.getIntegralHome)().then((function(e){t.imgUrls=e.data.banner,t.modelList=e.data.district,t.modelLength=e.data.district.length,t.modelLength>10&&(t.modelList=t.chunk(t.modelList,10))}))},chunk:function(t,e){var n=0,o=n,i=[];while(n<t.length)n+=e,i.push(t.slice(o,n)),o=n;return i},getIntegralScope:function(){var e=this;(0,i.getIntegralScope)().then((function(t){t.data.unshift({title:"全部",group_data_id:"",min:"",max:""}),e.tabTitle=t.data})).catch((function(n){e.loading=!1,t.showToast({title:n,icon:"none"})}))},longClick:function(t,e){this.tabClick=t,e.min||e.max?(e.min=e.min||0,e.max=e.max||0,this.where.scope=e.min+","+e.max):this.where.scope="",this.where.page=1,this.loading=!1,this.loadend=!1,this.goodList=[],this.getIntegralGoods()},getIntegralGoods:function(){var e=this;e.loadend||e.loading||(e.loading=!0,e.loadTitle="",(0,i.getIntegralGoodsList)(e.where).then((function(t){var n=t.data.list,o=e.$util.SplitArray(n,e.goodList),i=n.length<e.where.limit;e.loadend=i,e.loading=!1,e.loadTitle=i?"已全部加载":"加载更多",e.$set(e,"goodList",o),e.$set(e.where,"page",e.where.page+1)})).catch((function(n){e.loading=!1,t.showToast({title:n,icon:"none"})})))},goGoodsDetail:function(e){t.navigateTo({url:"/pages/points_mall/integral_goods_details?id=".concat(e.product_id)})},goPages:function(e){-1!=e.indexOf("http")||(-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index","/pages/index/index","/pages/plant_grass/index"].indexOf(e)?t.navigateTo({url:e+"?delta=0"}):t.switchTab({url:e}))}},onReachBottom:function(){this.getIntegralGoods()}};e.default=d}).call(this,n("543d")["default"])},ffff:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.goodList.length),o=n?t.__map(t.goodList,(function(e,n){var o=t.__get_orig(e),i=parseFloat(Number(e.price).toFixed(2));return{$orig:o,m0:i}})):null;t.$mp.data=Object.assign({},{$root:{g0:n,l0:o}})},i=[]}},[["8e30","common/runtime","common/vendor"]]]);