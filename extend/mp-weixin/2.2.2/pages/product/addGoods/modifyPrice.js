(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/addGoods/modifyPrice"],{"1d4e":function(t,e,a){"use strict";a.r(e);var i=a("33c5"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"33c5":function(t,e,a){"use strict";(function(t){var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("9523")),o=a("5a8f"),c=a("f26a"),u=i(a("2e02")),l={components:{avatar:function(){Promise.all([a.e("common/vendor"),a.e("components/yq-avatar/yq-avatar")]).then(function(){return resolve(a("b70d"))}.bind(null,a)).catch(a.oe)}},data:function(){return{popupOpenModel:!1,selectAllFlag:!1,isBatchOperation:!1,multiSpecificationList:[],addMultiSpecification:[],attrObj:{},index:0,imgName:"",batchData:{price:"",cost:"",ot_price:"",stock:"",bar_code:"",weight:"",volume:"",extension_one:"",extension_two:""}}},onLoad:function(t){this.attrObj=t},onShow:function(){this.initData()},watch:{multiSpecificationList:{handler:function(t){t.filter((function(t){return t.select})).length==t.length?this.selectAllFlag=!0:this.selectAllFlag=!1},deep:!0}},methods:{initData:function(){var t=this;(0,o.getStorage)("attrValue")?this.multiSpecificationList=(0,o.getStorage)("attrValue"):this.multiSpecificationList=this.attrFormat((0,o.getStorage)("modifyPriceData").template_value),this.multiSpecificationList.forEach((function(e){t.$set(e,"more_thanFlag",!1),t.$set(e,"select",!1)}))},selectImage:function(t){this.$util.uploadImageOne("upload/image",(function(e){t.image=e.data.path}))},clk:function(t){var e=this.$refs.avatar;this.index=t,e.fChooseImg(1,{selWidth:"350upx",selHeight:"350upx",inner:!0})},doUpload:function(e){var a=this;t.uploadFile({url:c.HTTP_REQUEST_URL+"/api/upload/image/field",filePath:e.path,name:"field",formData:{filename:e.path,name:a.imgName},header:(0,n.default)({"Content-Type":"multipart/form-data"},c.TOKENNAME,"Bearer "+u.default.state.app.token),success:function(t){var e=JSON.parse(t.data);a.multiSpecificationList[a.index]["image"]=e.data.path},complete:function(t){}})},getImgName:function(t){this.imgName=t},moreThan:function(t){t.more_thanFlag=!0},batchOperation:function(){var t=this;this.isBatchOperation=!0,this.multiSpecificationList.forEach((function(e){t.$set(e,"select",!1)}))},selectAll:function(){var t=this;this.selectAllFlag=!this.selectAllFlag,this.multiSpecificationList.forEach((function(e){t.selectAllFlag?t.$set(e,"select",!0):t.$set(e,"select",!1)}))},selectGoods:function(t){t.select=!t.select},openChangeModel:function(){this.multiSpecificationList.filter((function(t){return t.select})).length?this.$refs.changePopup.open():(0,o.Toast)("请选择商品")},saveBachData:function(){var t=this;Object.keys(this.batchData).forEach((function(e){t.multiSpecificationList.forEach((function(a){a.select&&(a[e]=t.batchData[e])}))})),this.isBatchOperation=!1,this.$refs.changePopup.close()},saveAttrValue:function(){(0,o.setStorage)("attrValue",this.multiSpecificationList),(0,o.navigateBack)(1)},closeChangePopup:function(){this.$refs.changePopup.close()},attrFormat:function(t){var e=[],a=[];return function(t){if(t.length>1)t.forEach((function(i,n){0===n&&(e=t[n]["detail"]);var o=[];e.forEach((function(e){t[n+1]&&t[n+1]["detail"]&&t[n+1]["detail"].forEach((function(i){var c=(0!==n?"":t[n]["value"]+"_$_")+e+"-$-"+t[n+1]["value"]+"_$_"+i;if(o.push(c),n===t.length-2){var u={image:"",price:0,cost:0,ot_price:0,stock:0,bar_code:"",weight:0,volume:0,brokerage:0,brokerage_two:0};c.split("-$-").forEach((function(t,e){var a=t.split("_$_");u["detail"]||(u["detail"]={}),u["detail"][a[0]]=a.length>1?a[1]:""})),Object.values(u.detail).forEach((function(t,e){u["value"+e]=t})),a.push(u)}}))})),e=o.length?o:[]}));else{var i=[];t.forEach((function(t,e){t["detail"].forEach((function(e,o){i[o]=t["value"]+"_"+e,a[o]={image:"",price:0,cost:0,ot_price:0,stock:0,bar_code:"",weight:0,volume:0,brokerage:0,brokerage_two:0,detail:(0,n.default)({},t["value"],e)},Object.values(a[o].detail).forEach((function(t,e){a[o]["value"+e]=t}))}))})),e.push(i.join("$&"))}return a}(t)}}};e.default=l}).call(this,a("543d")["default"])},"56de":function(t,e,a){},5806:function(t,e,a){"use strict";a.r(e);var i=a("6075"),n=a("1d4e");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("a0c3");var c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"ec3cfa7e",null,!1,i["a"],void 0);e["default"]=u.exports},6075:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uniPopup:function(){return a.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(a.bind(null,"b4af"))}},n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.multiSpecificationList,(function(e,a){var i=t.__get_orig(e),n=Object.values(e.detail);return{$orig:i,l0:n}})));t._isMounted||(t.e0=function(e){t.popupOpenModel=!t.popupOpenModel}),t.$mp.data=Object.assign({},{$root:{l1:a}})},o=[]},"80de":function(t,e,a){"use strict";(function(t,e){var i=a("4ea4");a("4c7d");i(a("66fd"));var n=i(a("5806"));t.__webpack_require_UNI_MP_PLUGIN__=a,e(n.default)}).call(this,a("bc2e")["default"],a("543d")["createPage"])},a0c3:function(t,e,a){"use strict";var i=a("56de"),n=a.n(i);n.a}},[["80de","common/runtime","common/vendor"]]]);