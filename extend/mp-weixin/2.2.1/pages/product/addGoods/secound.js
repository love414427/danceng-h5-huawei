(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/addGoods/secound"],{"42b1":function(t,e,o){"use strict";o.r(e);var a=o("93c7"),d=o("f9ff");for(var n in d)["default"].indexOf(n)<0&&function(t){o.d(e,t,(function(){return d[t]}))}(n);o("ea75");var i=o("f0c5"),r=Object(i["a"])(d["default"],a["b"],a["c"],!1,null,"4c716614",null,!1,a["a"],void 0);e["default"]=r.exports},7804:function(t,e,o){},"93c7":function(t,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return d})),o.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},d=[]},a403:function(t,e,o){"use strict";(function(t){var a=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var d=a(o("9523")),n=o("f26a"),i=a(o("2e02")),r=o("5a8f"),c=o("0b33");function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){(0,d.default)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var f={components:{},props:{merId:{type:[String,Number],default:""},product_id:{type:[String,Number],default:""},resetKey:{type:Boolean,default:!1}},data:function(){return{disModel:!1,upload_max:10,uploadUrl:"".concat(n.HTTP_REQUEST_URL,"/api/upload/video"),addGoodsSecoundData:{is_good:0,is_gift_bag:0,sort:"",once_count:"",video_link:""}}},created:function(){this.initData()},watch:{addGoodsSecoundData:{handler:function(t){var e=this;setTimeout((function(){(0,r.setStorage)(e.product_id?"editGoodsDetils":"addGoodsSecoundData",t)}))},deep:!0},resetKey:{handler:function(t){this.initData()}}},methods:{initData:function(){var t=this,e={};if((0,r.getStorage)("goodsDis")&&(this.disModel=!0),this.product_id)return e=(0,r.getStorage)("editGoodsDetils"),Object.keys(this.addGoodsSecoundData).forEach((function(o){t.addGoodsSecoundData[o]=e[o]})),e.content&&((0,r.setStorage)("goodsDis",{store_name:e.content.title,imageList:e.content.image}),this.disModel=!0),void(0,r.setStorage)("canChangeSecound",!0);(0,r.getStorage)("addGoodsSecoundData")&&Object.keys(this.addGoodsSecoundData).forEach((function(e){((0,r.getStorage)("addGoodsSecoundData")[e]||0==(0,r.getStorage)("addGoodsSecoundData")[e])&&(t.addGoodsSecoundData[e]=(0,r.getStorage)("addGoodsSecoundData")[e])}))},lastStep:function(){this.$emit("lastStep")},submitCreatedGoods:function(){var e=this;(0,r.Loading)();var o=["addGoodsFormData","singleSpecification","attrValue","modifyPriceData","addGoodsSecoundData","goodsDis","editGoodsDetils","canChange","canChangeSecound"],a=0==(0,r.getStorage)("addGoodsFormData").spec_type?[(0,r.getStorage)("singleSpecification")]:(0,r.getStorage)("attrValue"),d=u(u(u({},this.addGoodsSecoundData),(0,r.getStorage)("addGoodsFormData")),{},{content:{title:(0,r.getStorage)("goodsDis")?(0,r.getStorage)("goodsDis").store_name:"",image:(0,r.getStorage)("goodsDis")?(0,r.getStorage)("goodsDis").imageList:[]},video_link:this.addGoodsSecoundData.video_link});d.attrValue=a.filter((function(t){return""!=t})),(0,r.getStorage)("addGoodsFormData").spec_type,this.product_id?(0,c.productUpdate)(this.merId,this.product_id,d).then((function(a){o.forEach((function(t){(0,r.getStorage)(t)&&(0,r.removeStorage)(t)})),(0,r.hideLoading)(),(0,r.Modal)("提交成功","点击确定，返回商品管理",{showCancel:!1}).then((function(){t.redirectTo({url:"/pages/product/goodsOnSale/index?mer_id="+e.merId})}))})).catch((function(t){(0,r.Toast)(t)})):(0,c.productCreate)(this.merId,d).then((function(a){o.forEach((function(t){(0,r.getStorage)(t)&&(0,r.removeStorage)(t)})),(0,r.hideLoading)(),(0,r.Modal)("提交成功","点击确定，返回商品管理",{showCancel:!1}).then((function(){t.redirectTo({url:"/pages/product/goodsOnSale/index?mer_id="+e.merId})}))})).catch((function(t){(0,r.Toast)(t)}))},isGood:function(t){this.addGoodsSecoundData.is_good=t.detail.value?1:0},isGiftBag:function(t){this.addGoodsSecoundData.is_gift_bag=t.detail.value?1:0},switchChange:function(t,e){this.addGoodsSecoundData[e.model]=t?1:0},inputGoodsDetils:function(){(0,r.navigateTo)(1,"/pages/product/addGoods/addGoodDetils",{mer_id:this.merId})},uploadVideo:function(){var e=this;t.chooseVideo({sourceType:["camera","album"],success:function(o){Math.ceil(o.size/1024)<1024*e.upload_max?t.uploadFile({url:e.uploadUrl,filePath:o.tempFilePath,name:"file",formData:{user:"test"},header:(0,d.default)({"Content-Type":"multipart/form-data"},n.TOKENNAME,"Bearer "+i.default.state.app.token),success:function(t){var o=JSON.parse(t.data);e.addGoodsSecoundData.video_link=o.data.src},complete:function(t){}}):t.showModal({title:"提示",content:"视频超出限制".concat(e.upload_max,"MB,已过滤")})},fail:function(e){t.showModal({content:JSON.stringify(e)})}})},deleteImage:function(t){this.addGoodsSecoundData.video_link=""}}};e.default=f}).call(this,o("543d")["default"])},ea75:function(t,e,o){"use strict";var a=o("7804"),d=o.n(a);d.a},f9ff:function(t,e,o){"use strict";o.r(e);var a=o("a403"),d=o.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){o.d(e,t,(function(){return a[t]}))}(n);e["default"]=d.a},ff52:function(t,e,o){"use strict";(function(t,e){var a=o("4ea4");o("4c7d");a(o("66fd"));var d=a(o("42b1"));t.__webpack_require_UNI_MP_PLUGIN__=o,e(d.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])}},[["ff52","common/runtime","common/vendor"]]]);