(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/customTab"],{"40b7":function(t,n,e){"use strict";e.r(n);var u=e("6733"),a=e("46c8");for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("b275a");var c=e("f0c5"),i=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"74e8a677",null,!1,u["a"],void 0);n["default"]=i.exports},"46c8":function(t,n,e){"use strict";e.r(n);var u=e("62f7"),a=e.n(u);for(var r in u)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=a.a},"62f7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{newData:{type:Object,default:{}},activeRouter:{type:String,default:""}},data:function(){return{}},mounted:function(){},methods:{goRouter:function(n){var e=getCurrentPages(),u=e[e.length-1].$page.fullPath;n.link!=u&&t.switchTab({url:n.link,fail:function(e){t.redirectTo({url:n.link})}})}}};n.default=e}).call(this,e("543d")["default"])},6733:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var u=function(){var t=this.$createElement;this._self._c},a=[]},"841a":function(t,n,e){},b275a:function(t,n,e){"use strict";var u=e("841a"),a=e.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/customTab-create-component',
    {
        'components/customTab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("40b7"))
        })
    },
    [['components/customTab-create-component']]
]);
