(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/rank/index"],{"11c4":function(t,e,a){"use strict";var n=a("d2e1"),c=a.n(n);c.a},1281:function(t,e,a){"use strict";(function(t,e){var n=a("4ea4");a("4c7d");n(a("66fd"));var c=n(a("8f18"));t.__webpack_require_UNI_MP_PLUGIN__=a,e(c.default)}).call(this,a("bc2e")["default"],a("543d")["createPage"])},1940:function(t,e,a){"use strict";a.r(e);var n=a("799a"),c=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=c.a},"780e":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement;this._self._c},c=[]},"799a":function(t,e,a){"use strict";(function(t){var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(a("448a")),i=a("041f"),o=a("f26a"),u={data:function(){return{categoryList:[{store_category_id:0,cate_name:"总榜"}],cate_name:"",spuTopList:[],active:0,pro_top_banner:"https://zhongbang-1257983696.cos.ap-beijing.myqcloud.com/uploads/def/20220801/383c0026840f70a9b4e33a43c6bd3341.png",scrollInto:"",domain:o.HTTP_REQUEST_URL}},onLoad:function(t){this.spuTop(t.cate_id||0)},methods:{spuTop:function(t){var e=this;(0,i.spuTop)().then((function(a){e.categoryList=[].concat((0,c.default)(e.categoryList),(0,c.default)(a.data)),e.cate_name=e.getCate(t,e.categoryList)||"",e.$nextTick((function(){e.getSpuTopList(t),e.active=t&&e.cate_name?t:0,e.scrollInto="cate".concat(t)}))}))},getSpuTopList:function(t){var e=this;t=this.cate_name?t:0,(0,i.spuTopList)({cate_pid:t}).then((function(t){e.spuTopList=t.data[0]&&t.data[0]["list"]||[]}))},checkActive:function(t,e){this.active=e.store_category_id,this.cate_name=e.cate_name,this.spuTopList=[],this.getSpuTopList(e.store_category_id)},godDetail:function(e){t.navigateTo({url:"/pages/goods_details/index?id="+e.product_id})},getCate:function(t,e){for(var a=0;a<e.length;a++)if(e[a].store_category_id==t)return e[a]["cate_name"]}}};e.default=u}).call(this,a("543d")["default"])},"8f18":function(t,e,a){"use strict";a.r(e);var n=a("780e"),c=a("1940");for(var i in c)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return c[t]}))}(i);a("11c4");var o=a("f0c5"),u=Object(o["a"])(c["default"],n["b"],n["c"],!1,null,"45d15545",null,!1,n["a"],void 0);e["default"]=u.exports},d2e1:function(t,e,a){}},[["1281","common/runtime","common/vendor"]]]);