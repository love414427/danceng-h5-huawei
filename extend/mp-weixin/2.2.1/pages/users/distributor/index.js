(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/distributor/index"],{"00a6":function(t,e,i){"use strict";(function(t,e){var s=i("4ea4");i("4c7d");s(i("66fd"));var r=s(i("507e"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(r.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},"423b":function(t,e,i){},"507e":function(t,e,i){"use strict";i.r(e);var s=i("b42f"),r=i("5d9c");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("e04f");var c=i("f0c5"),o=Object(c["a"])(r["default"],s["b"],s["c"],!1,null,"a41f933c",null,!1,s["a"],void 0);e["default"]=o.exports},"5d9c":function(t,e,i){"use strict";i.r(e);var s=i("b93f"),r=i.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=r.a},b42f:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var s=function(){var t=this,e=t.$createElement,i=(t._self._c,t.menus.length&&t.openActivity),s=t.openActivity?t.fastList.length:null,r=t.openActivity?t.fastList.length:null,a=t.openActivity?t.distribution.length:null;t.$mp.data=Object.assign({},{$root:{g0:i,g1:s,g2:r,g3:a}})},r=[]},b93f:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("6859"),r=i("f823"),a=i("736f"),c=i("26cb"),o=i("f26a"),n={components:{ProductWindow:function(){i.e("components/productWindow/index").then(function(){return resolve(i("b739"))}.bind(null,i)).catch(i.oe)}},computed:(0,c.mapGetters)(["viewColor","keyColor"]),data:function(){return{domain:o.HTTP_REQUEST_URL,explainShow:!1,menus:[],fastList:[],userInfo:{},distribution:[],explainTxt:"",attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],storeInfo:{},attrValue:"",attrTxt:"请选择",cart_num:1,id:0,loadend:!1,loading:!1,loadTitle:"加载更多",where:{page:1,limit:20},openActivity:!1}},onLoad:function(){},onShow:function(){this.bagExplain(),this.productBag(),this.bagRecommend(),this.getUserInfo()},onReachBottom:function(){this.productBag()},methods:{goBuy:function(t){this.id=t.product_id,this.getGoodsDetails(t)},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},getGoodsDetails:function(e){t.showLoading({title:"加载中",mask:!0});var i=this;(0,a.getProductDetail)(e.product_id).then((function(e){t.hideLoading(),i.attr.cartAttr=!0;var s=e.data;i.$set(i,"storeInfo",s),i.$set(i.attr,"productAttr",e.data.attr),i.$set(i,"productValue",e.data.sku),i.DefaultSelect()})).catch((function(e){t.hideLoading()}))},ChangeAttr:function(t){var e=this.productValue[t];e&&e.stock>0?(this.$set(this.attr.productSelect,"image",e.image),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"svip_price",e.svip_price),this.$set(this.attr.productSelect,"stock",e.stock),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"svip_price",e.svip_price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},DefaultSelect:function(){var t=this.attr.productAttr,e=[];for(var i in this.productValue)if(this.productValue[i].stock>0){e=this.attr.productAttr.length?i.split(","):[];break}for(var s=0;s<t.length;s++)this.$set(t[s],"index",e[s]);var r=this.productValue[e.join(",")];r&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",r.image),this.$set(this.attr.productSelect,"price",r.price),this.$set(this.attr.productSelect,"svip_price",r.svip_price),this.$set(this.attr.productSelect,"stock",r.stock),this.$set(this.attr.productSelect,"unique",r.unique),this.$set(this,"attrValue",e.join(",")),this.$set(this,"attrTxt","已选择"),0==r.stock?this.$set(this.attr.productSelect,"cart_num",0):this.$set(this.attr.productSelect,"cart_num",1)):!r&&t.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"svip_price",r.svip_price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):r||t.length?r&&!t.length&&(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",r.image),this.$set(this.attr.productSelect,"price",r.price),this.$set(this.attr.productSelect,"svip_price",r.svip_price),this.$set(this.attr.productSelect,"stock",r.stock),this.$set(this.attr.productSelect,"unique",r.unique),this.$set(this,"attrValue",e.join(",")),this.$set(this,"attrTxt","已选择"),0==r.stock?this.$set(this.attr.productSelect,"cart_num",0):this.$set(this.attr.productSelect,"cart_num",1)):(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"svip_price",r.svip_price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},ChangeCartNum:function(t){var e=this.productValue[this.attrValue];if(void 0!==e||this.attr.productAttr.length||(e=this.attr.productSelect),void 0!==e){var i=e.stock||0,s=this.attr.productSelect;t?(s.cart_num++,s.cart_num>i&&(this.$set(this.attr.productSelect,"cart_num",i),this.$set(this,"cart_num",i))):(s.cart_num--,s.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},goPay:function(){var e=this,i=e.productValue[this.attrValue];if(e.attr.productAttr.length&&0==i.stock)return e.$util.Tips({title:"产品库存不足，请选择其它"});var s={product_id:e.id,cart_num:Number(e.attr.productSelect.cart_num),is_new:1,product_attr_unique:void 0!==e.attr.productSelect?e.attr.productSelect.unique:""};(0,a.postCartAdd)(s).then((function(i){e.attr.cartAttr=!1,t.navigateTo({url:"/pages/users/order_confirm/index?cartId="+i.data.cart_id})})).catch((function(t){return e.$util.Tips({title:t})}))},godDetail:function(e){(0,r.goShopDetail)(e).then((function(i){t.navigateTo({url:"/pages/goods_details/index?id=".concat(e.product_id)})}))},productBag:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle="",(0,a.productBag)(t.where).then((function(e){var i=e.data.list,s=t.$util.SplitArray(i,t.distribution),r=i.length<t.where.limit;t.loadend=r,t.loading=!1,t.loadTitle=r?"已全部加载":"加载更多",t.$set(t,"distribution",s),t.$set(t.where,"page",t.where.page+1)})).catch((function(e){t.loading=!1,t.loadTitle="加载更多"})))},bagRecommend:function(){var t=this;(0,a.bagRecommend)().then((function(e){t.fastList=e.data.list}))},getUserInfo:function(){var t=this;(0,s.getUserInfo)().then((function(e){t.userInfo=e.data}))},bagExplain:function(){var t=this,e=this;(0,a.bagExplain)().then((function(e){var i=e.data;t.menus=i.data,t.explainTxt=i.explain,t.openActivity=!0})).catch((function(i){return t.openActivity=!1,e.$util.Tips({title:i})}))},explain:function(){this.explainShow=!0},close:function(){this.explainShow=!1}}};e.default=n}).call(this,i("543d")["default"])},e04f:function(t,e,i){"use strict";var s=i("423b"),r=i.n(s);r.a}},[["00a6","common/runtime","common/vendor"]]]);