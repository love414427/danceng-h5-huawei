(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/columnGoods/goods_search/index"],{"005d":function(t,e,i){"use strict";(function(t,e){var o=i("4ea4");i("4c7d");o(i("66fd"));var a=o(i("5dac"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(a.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},"0dfe":function(t,e,i){},"201e":function(t,e,i){"use strict";var o=i("0dfe"),a=i.n(o);a.a},"52a0":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=(t._self._c,t.historyList.length),o=t.historyList.length>9&&!t.historyBox,a=t.historyList.length>9&&t.historyBox,s=t.historyList.length,n=t.hotSearchList.length>8&&!t.hotSearchBox,c=t.hotSearchList.length>8&&t.hotSearchBox;t._isMounted||(t.e0=function(e){t.historyBox=!0},t.e1=function(e){t.historyBox=!1},t.e2=function(e){t.hotSearchBox=!0},t.e3=function(e){t.hotSearchBox=!1}),t.$mp.data=Object.assign({},{$root:{g0:i,g1:o,g2:a,g3:s,g4:n,g5:c}})},a=[]},"5dac":function(t,e,i){"use strict";i.r(e);var o=i("52a0"),a=i("87d1");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("a2f9"),i("201e");var n=i("f0c5"),c=Object(n["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=c.exports},"87d1":function(t,e,i){"use strict";i.r(e);var o=i("d663"),a=i.n(o);for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);e["default"]=a.a},a2f9:function(t,e,i){"use strict";var o=i("df4e"),a=i.n(o);a.a},d663:function(t,e,i){"use strict";(function(t){var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("736f"),s=o(i("9673")),n=(i("3255"),i("f823")),c=i("041f"),r=i("26cb"),h=i("ddb3"),u={computed:(0,r.mapGetters)(["isLogin","uid"]),components:{passwordPopup:function(){Promise.all([i.e("common/vendor"),i.e("components/passwordPopup/index")]).then(function(){return resolve(i("5edd"))}.bind(null,i)).catch(i.oe)}},data:function(){return{hostProduct:[],searchValue:"",focus:!0,bastList:[],hotSearchList:[],first:0,limit:8,page:1,loading:!1,loadend:!1,loadTitle:"加载更多",hotPage:1,isScroll:!0,historyList:[],tempStorage:[],historyBox:!1,hotSearchBox:!1}},onLoad:function(t){this.searchValue=t.searchVal||""},onShow:function(){try{this.historyList=[],this.tempStorage=[];var e=t.getStorageSync("historyList");e.length>0?this.historyList=e:this.historyList=[],this.tempStorage=this.historyList}catch(i){}this.getRoutineHotSearch()},methods:{remove:function(){var e=this;t.showModal({title:"提示",content:"确认删除全部历史搜索记录？",success:function(i){if(i.confirm){e.tempStorage=[];try{t.setStorageSync("historyList",e.tempStorage),e.historyList=[]}catch(o){}}else i.cancel}})},getRoutineHotSearch:function(){var t=this;(0,a.getSearchKeyword)().then((function(e){t.$set(t,"hotSearchList",e.data)}))},setHotSearchValue:function(t,e){var i=this;this.focus=!1,e?this.$set(this,"searchValue",t.keyword):this.$set(this,"searchValue",t),this.$nextTick((function(){i.focus=!0})),this.searchBut()},setValue:function(t){this.$set(this,"searchValue",t.detail.value)},searchBut:function(){var e=this;if(/^(\/@[1-9]{1}).*\*\//.test(this.searchValue))t.showLoading({title:"加载中",mask:!0}),(0,a.copyPasswordSearch)({key:this.searchValue}).then((function(i){t.hideLoading();var o=i.data;(0,s.default)(i.data.user.uid,e.isLogin),(0,n.goShopDetail)(o,e.uid).then((function(i){e.isLogin?(0,c.initiateAssistApi)(o.activity_id).then((function(e){var i=e.data.product_assist_set_id;t.hideLoading(),t.navigateTo({url:"/pages/activity/assist_detail/index?id="+i})})).catch((function(e){t.showToast({title:e,icon:"none"})})):(0,h.toLogin)()}))})).catch((function(i){t.showToast({title:i,icon:"none"}),e.searchValue=""}));else{var i=!1;this.tempStorage.forEach((function(t,o){t==e.searchValue&&(i=!0)})),!i&&this.searchValue&&this.tempStorage.unshift(this.searchValue);try{t.setStorageSync("historyList",this.tempStorage)}catch(o){}t.navigateTo({url:"/pages/columnGoods/goods_search_con/index?searchValue="+this.searchValue})}}}};e.default=u}).call(this,i("543d")["default"])},df4e:function(t,e,i){}},[["005d","common/runtime","common/vendor"]]]);