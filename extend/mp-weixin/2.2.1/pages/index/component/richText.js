(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/component/richText"],{"073f":function(n,t,e){"use strict";e.r(t);var o=e("988c"),r=e("b9d2");for(var i in r)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(i);e("f8c1");var a=e("f0c5"),f=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,"79f9fff8",null,!1,o["a"],void 0);t["default"]=f.exports},"284b":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("f26a"),r={name:"richText",props:{dataConfig:{type:Object,default:function(){}}},components:{"jyf-parser":function(){Promise.all([e.e("common/vendor"),e.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(e("3192"))}.bind(null,e)).catch(e.oe)}},data:function(){return{tagStyle:{img:"width:100%;"},bgColor:this.dataConfig.bgColor.color[0].item,lrConfig:2*this.dataConfig.lrConfig.val,description:this.dataConfig.richText.val,udConfig:2*this.dataConfig.udConfig.val,domain:o.HTTP_REQUEST_URL}},created:function(){},methods:{}};t.default=r},"988c":function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}));var o={jyfParser:function(){return Promise.all([e.e("common/vendor"),e.e("components/jyf-parser/jyf-parser")]).then(e.bind(null,"3192"))}},r=function(){var n=this.$createElement,t=(this._self._c,this.description?this.description.replace(/<br\/>/gi,""):null);this.$mp.data=Object.assign({},{$root:{g0:t}})},i=[]},b9d2:function(n,t,e){"use strict";e.r(t);var o=e("284b"),r=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=r.a},dd08:function(n,t,e){},f8c1:function(n,t,e){"use strict";var o=e("dd08"),r=e.n(o);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/component/richText-create-component',
    {
        'pages/index/component/richText-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("073f"))
        })
    },
    [['pages/index/component/richText-create-component']]
]);
