(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/productConSwiper/index"],{"0ad8":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{imgUrls:{type:Array,default:function(){return[]}},videoline:{type:String,value:""},videoCoverImg:{type:String}},data:function(){return{indicatorDots:!0,circular:!0,autoplay:!0,interval:5e3,duration:500,currents:"1",controls:!0,isPlay:!0,videoContext:""}},created:function(){},watch:{},mounted:function(){this.videoContext=t.createVideoContext("myVideo",this)},methods:{getpreviewImage:function(n){t.previewImage({urls:this.imgUrls,current:n})},videoPause:function(t){},bindPause:function(){this.videoContext.play(),this.$set(this,"controls",!1),this.autoplay=!1},change:function(t){this.$set(this,"currents",t.detail.current+1)},endedFun:function(){this.controls=!0}}};n.default=e}).call(this,e("543d")["default"])},"0b3f":function(t,n,e){"use strict";var i=e("2db7"),o=e.n(i);o.a},1855:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isPlay&&t.videoline&&""!=t.videoline&&"https:"!=t.videoline?t.videoline&&("http"==t.videoline.substring(0,4)||"https"==t.videoline.substring(0,5)):null);t.$mp.data=Object.assign({},{$root:{g0:e}})},o=[]},"2db7":function(t,n,e){},"58c8":function(t,n,e){"use strict";e.r(n);var i=e("1855"),o=e("a63a");for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("0b3f");var u=e("f0c5"),a=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"9959539c",null,!1,i["a"],void 0);n["default"]=a.exports},a63a:function(t,n,e){"use strict";e.r(n);var i=e("0ad8"),o=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/productConSwiper/index-create-component',
    {
        'components/productConSwiper/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("58c8"))
        })
    },
    [['components/productConSwiper/index-create-component']]
]);
