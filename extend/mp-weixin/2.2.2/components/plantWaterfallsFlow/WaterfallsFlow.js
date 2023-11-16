(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/plantWaterfallsFlow/WaterfallsFlow"],{"1e4b":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("9523")),l=i("3fd7"),a=i("26cb"),r=i("ddb3");function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}var o={components:{WaterfallsFlowItem:function(){i.e("components/plantWaterfallsFlowItem/WaterfallsFlowItem").then(function(){return resolve(i("ba13"))}.bind(null,i)).catch(i.oe)}},props:{wfList:{type:Array,require:!0},updateNum:{type:Number,default:10},isAuth:{type:Number||String,default:0},tab:{type:Number,default:1},uid:{type:Number,default:0},isShow:{type:Boolean,default:!1}},data:function(){return{allList:[],leftList:[],rightList:[],mark:0,boxHeight:[]}},watch:{"wfList.length":{handler:function(t,e){var i=this;(!this.wfList.length||this.wfList.length===this.updateNum&&this.wfList.length<=this.allList.length)&&(this.allList=[],this.leftList=[],this.rightList=[],this.boxHeight=[],this.mark=0),this.wfList.length&&(this.allList=this.wfList,this.leftList=[],this.rightList=[],this.boxHeight=[],this.allList.forEach((function(t,e){(i.allList.length<3||i.allList.length<=7&&i.allList.length-e>1||i.allList.length>7&&i.allList.length-e>2)&&(e%2?i.rightList.push(t):i.leftList.push(t))})),this.allList.length<3?this.mark=this.allList.length+1:this.allList.length<=7?this.mark=this.allList.length-1:this.mark=this.allList.length-2,this.mark<this.allList.length&&this.waterFall())},immediate:!0,deep:!0},mounted:function(){},mark:function(){var t=this.allList.length;this.mark<t&&0!==this.mark&&this.boxHeight.length&&this.waterFall()}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){(0,s.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},(0,a.mapGetters)(["isLogin"])),methods:{waterFall:function(){var t=this.mark;if(this.allList[t])if(0==t)this.leftList.push(this.allList[t]),this.getViewHeight(0);else if(1==t)this.rightList.push(this.allList[t]),this.getViewHeight(1);else{if(this.boxHeight.length){var e=this.boxHeight[0]>this.boxHeight[1]?1:0;e?this.rightList.push(this.allList[t]):this.leftList.push(this.allList[t])}else this.rightList.length<this.leftList.length?this.rightList.push(this.allList[t]):this.leftList.push(this.allList[t]);this.getViewHeight()}},getViewHeight:function(){var e=this;this.$nextTick((function(){setTimeout((function(){t.createSelectorQuery().in(e).select("#right").boundingClientRect((function(i){i&&(e.boxHeight[1]=i.height),t.createSelectorQuery().in(e).select("#left").boundingClientRect((function(t){t&&(e.boxHeight[0]=t.height),e.mark=e.mark+1})).exec()})).exec()}),100)}))},itemTap:function(t){this.$emit("itemTap",t)},giveStart:function(e){var i=e.relevance_id?0:1;(0,l.graphicStartApi)(e.community_id,{status:i}).then((function(t){e.relevance_id?(e.relevance_id=!e.relevance_id,e.count_start--,e.count_start=0==e.count_start?0:e.count_start):(e.relevance_id=!e.relevance_id,e.count_start++)})).catch((function(e){t.showToast({title:e,icon:"none"})}))},likeToggle:function(t,e){1==this.isLogin?t?this.giveStart(this.rightList[e]):this.giveStart(this.leftList[e]):(0,r.toLogin)()}}};e.default=o}).call(this,i("543d")["default"])},"300a":function(t,e,i){"use strict";i.r(e);var n=i("7d40"),s=i("e7b5");for(var l in s)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(l);i("34ea");var a=i("f0c5"),r=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,"7e1e171f",null,!1,n["a"],void 0);e["default"]=r.exports},"34ea":function(t,e,i){"use strict";var n=i("43af"),s=i.n(n);s.a},"43af":function(t,e,i){},"7d40":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return n}));var n={WaterfallsFlowItem:function(){return i.e("components/WaterfallsFlowItem/WaterfallsFlowItem").then(i.bind(null,"a849"))}},s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.leftList.length),n=t.rightList.length;t._isMounted||(t.e0=function(e,i){var n=[],s=arguments.length-2;while(s-- >0)n[s]=arguments[s+2];var l=n[n.length-1].currentTarget.dataset,a=l.eventParams||l["event-params"];i=a.index;return t.likeToggle(!1,i,e)},t.e1=function(e,i){var n=[],s=arguments.length-2;while(s-- >0)n[s]=arguments[s+2];var l=n[n.length-1].currentTarget.dataset,a=l.eventParams||l["event-params"];i=a.index;return t.likeToggle(!0,i,e)}),t.$mp.data=Object.assign({},{$root:{g0:i,g1:n}})},l=[]},e7b5:function(t,e,i){"use strict";i.r(e);var n=i("1e4b"),s=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/plantWaterfallsFlow/WaterfallsFlow-create-component',
    {
        'components/plantWaterfallsFlow/WaterfallsFlow-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("300a"))
        })
    },
    [['components/plantWaterfallsFlow/WaterfallsFlow-create-component']]
]);
