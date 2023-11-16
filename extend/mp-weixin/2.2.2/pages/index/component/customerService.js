(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/component/customerService"],{"07c4":function(t,e,n){"use strict";n.r(e);var o=n("f23a"),i=n("d19c");for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("be9e");var u=n("f0c5"),f=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"32550b8e",null,!1,o["a"],void 0);e["default"]=f.exports},7854:function(t,e,n){},"7f80":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("3255"),i={name:"customerService",props:{dataConfig:{type:Object,default:function(){}},merId:{type:[String,Number],default:"0"}},computed:(0,o.configMap)({is_open_service:0}),data:function(){return{logoConfig:this.dataConfig.logoConfig.url,topConfig:(this.dataConfig.topConfig.val||75)+"%"}},created:function(){},methods:{setTouchMove:function(t){t.touches[0].clientY<545&&t.touches[0].clientY>66&&(this.topConfig=t.touches[0].clientY+"px")}}};e.default=i},be9e:function(t,e,n){"use strict";var o=n("7854"),i=n.n(o);i.a},d19c:function(t,e,n){"use strict";n.r(e);var o=n("7f80"),i=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=i.a},f23a:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/component/customerService-create-component',
    {
        'pages/index/component/customerService-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("07c4"))
        })
    },
    [['pages/index/component/customerService-create-component']]
]);
