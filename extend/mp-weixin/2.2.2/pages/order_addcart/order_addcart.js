(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_addcart/order_addcart"],{"09cd":function(t,e,i){"use strict";(function(t,e){var c=i("4ea4");i("4c7d");c(i("66fd"));var s=c(i("2a7c"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(s.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},"17e2":function(t,e,i){},"21f7":function(t,e,i){"use strict";i.r(e);var c=i("ddad"),s=i.n(c);for(var r in c)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return c[t]}))}(r);e["default"]=s.a},"2a7c":function(t,e,i){"use strict";i.r(e);var c=i("d301"),s=i("21f7");for(var r in s)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(r);i("e9b1");var n=i("f0c5"),o=Object(n["a"])(s["default"],c["b"],c["c"],!1,null,"0ea1519a",null,!1,c["a"],void 0);e["default"]=o.exports},d301:function(t,e,i){"use strict";i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var c=function(){var t=this,e=t.$createElement,i=(t._self._c,t.cartList.valid.length>0||t.cartList.invalid.length>0),c=t.cartList.valid.length>0||t.cartList.invalid.length>0,s=c?t.cartList.invalid.length:null,r=t.recommend?0==t.cartList.invalid.length&&0==t.cartList.invalid.length:null,n=t.recommend?t.hostProduct.length>5&&1==t.recommend_switch:null,o=t.cartList.valid.length;t.$mp.data=Object.assign({},{$root:{g0:i,g1:c,g2:s,g3:r,g4:n,g5:o}})},s=[]},ddad:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=i("cd6d"),s=i("59c6"),r=i("58d4"),n=i("736f"),o=i("26cb"),a=i("3255"),u=i("f26a"),h=i("ddb3"),l=(getApp(),{props:{image:{type:String,default:""}},components:{customTab:function(){i.e("components/customTab").then(function(){return resolve(i("40b7"))}.bind(null,i)).catch(i.oe)},recommend:function(){Promise.all([i.e("common/vendor"),i.e("components/recommend/index")]).then(function(){return resolve(i("1857"))}.bind(null,i)).catch(i.oe)},couponListWindow:function(){i.e("components/couponListWindow/index").then(function(){return resolve(i("5fac"))}.bind(null,i)).catch(i.oe)},addcartWindow:function(){i.e("components/addcartWindow/index").then(function(){return resolve(i("a070"))}.bind(null,i)).catch(i.oe)}},data:function(){return{domain:u.HTTP_REQUEST_URL,loading:!1,loadend:!1,loadTitle:"加载更多",isFooter:!1,cartCount:0,goodsHidden:!0,footerswitch:!0,hostProduct:[],cartList:{valid:[],invalid:[]},isAllSelect:!0,selectValue:[],selectCountPrice:0,hotScroll:!1,hotPage:1,hotLimit:10,coupon:{coupon:!1,list:[]},cartTotalCount:0,recommend:!1,productValue:[],attr:{cartAttr:!1,productAttr:[],productSelect:{}},isOpen:!1,source:"",attrImage:"",isCart:!0,cart_id:"",attrValue:"",uniqueValue:"",newVal:{},goods:{},currSku:"",newData:{},activeRouter:""}},computed:(0,a.configMap)({hide_mer_status:1,recommend_switch:0,navigation:{}},(0,o.mapGetters)(["isLogin","viewColor"])),onReady:function(){},mounted:function(){},onLoad:function(t){},onShow:function(){var e=getCurrentPages(),i=e[e.length-1].route;this.activeRouter="/"+i,this.getNav(),1==this.isLogin?(this.getCartList(),this.getCartNum(),this.goodsHidden=!0,this.footerswitch=!0,this.isAllSelect=!0,this.selectValue=[],t.setStorage({key:"invoice_Data",data:{},success:function(){}})):setTimeout((function(){(0,h.toLogin)()}),300)},methods:{goRouter:function(e){var i=getCurrentPages(),c=i[i.length-1].$page.fullPath;e.link!=c&&t.switchTab({url:e.link,fail:function(i){t.redirectTo({url:e.link})}})},getNav:function(){var e=this;(0,c.getNavigation)().then((function(i){e.newData=i.data,e.newData.status&&e.newData.status.status?(t.hideTabBar(),e.isFooter=!0):(t.showTabBar(),e.isFooter=!1)}))},subDel:function(t){var e=this,i=this,c=[];if(this.cartList.valid.forEach((function(t){t.list.forEach((function(t){t.check&&c.push(t.cart_id)}))})),0==c.length)return i.$util.Tips({title:"请选择产品"});(0,s.cartDel)({cart_id:c}).then((function(t){return e.getCartList(),e.getCartNum(),i.$util.Tips({title:t.message,icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},subCollect:function(t){var e=this,i=[];if(this.cartList.valid.forEach((function(t){t.list.forEach((function(t){t.check&&i.push(t.spu.spu_id)}))})),0==i.length)return e.$util.Tips({title:"请选择产品"});(0,n.collectAll)({type_id:i,type:1}).then((function(t){return e.$util.Tips({title:t.message,icon:"success"})})).catch((function(t){return e.$util.Tips({title:t})}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1),this.$set(this,"isOpen",!1)},changeCart:function(t,e){if(this.goods!=t){this.goods=JSON.parse(JSON.stringify(t)),this.currSku=t.productAttr.sku.split(","),this.$set(this.attr,"productAttr",t.attr);var i={};this.attrValue=t.productAttr.sku,this.attrImage=t.product.image,this.goods.attrValue.forEach((function(t){i[t.sku]=t})),this.$set(this,"productValue",i);i[this.attrValue];this.isOpen=this.attr.cartAttr=!0,this.DefaultSelect(t)}else this.isOpen=this.attr.cartAttr=!0},DefaultSelect:function(t){var e=this.attr.productAttr,i=[];if(this.currSku)i=this.currSku;else for(var c in this.productValue)if(this.productValue[c].stock>0){i=this.attr.productAttr.length?c.split(","):[];break}for(var s=0;s<e.length;s++)this.$set(e[s],"index",i[s]);var r=this.productValue[i.join(",")];r&&e.length?(this.$set(this.attr.productSelect,"store_name",t.product.store_name),this.$set(this.attr.productSelect,"image",r.image?r.image:t.product.image),this.$set(this.attr.productSelect,"price",r.price),this.$set(this.attr.productSelect,"stock",r.stock),this.$set(this.attr.productSelect,"unique",r.unique),this.$set(this.attr.productSelect,"svip_price",r.svip_price),this.$set(this,"uniqueValue",r.unique),this.$set(this,"attrValue",i.join(",")),this.$set(this,"attrTxt","已选择"),0==r.stock?this.$set(this.attr.productSelect,"cart_num",0):this.$set(this.attr.productSelect,"cart_num",1)):!r&&e.length?(this.$set(this.attr.productSelect,"store_name",t.product.store_name),this.$set(this.attr.productSelect,"image",t.product.image),this.$set(this.attr.productSelect,"price",t.product.price),this.$set(this.attr.productSelect,"svip_price",r.svip_price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this,"uniqueValue",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):r||e.length?r&&!e.length&&(this.$set(this.attr.productSelect,"store_name",t.product.store_name),this.$set(this.attr.productSelect,"image",r.image),this.$set(this.attr.productSelect,"price",r.price),this.$set(this.attr.productSelect,"svip_price",r.svip_price),this.$set(this.attr.productSelect,"stock",r.stock),this.$set(this.attr.productSelect,"unique",r.unique),this.$set(this,"uniqueValue",r.unique),this.$set(this,"attrValue",i.join(",")),this.$set(this,"attrTxt","已选择"),0==r.stock?this.$set(this.attr.productSelect,"cart_num",0):this.$set(this.attr.productSelect,"cart_num",1)):(this.$set(this.attr.productSelect,"store_name",t.product.store_name),this.$set(this.attr.productSelect,"image",t.product.image),this.$set(this.attr.productSelect,"price",t.product.price),this.$set(this.attr.productSelect,"svip_price",r.svip_price),this.$set(this.attr.productSelect,"stock",t.product.stock),this.$set(this.attr.productSelect,"unique",t.product.unique||""),this.$set(this,"uniqueValue",t.product.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")),this.goCart(r)},goCart:function(t){return this.attr.productAttr.length&&!0===this.isOpen&&0==t.stock?this.$util.Tips({title:"产品库存不足，请选择其它"}):0==this.attr.productSelect.cart_num?this.$util.Tips({title:"购买个数不能为0！"}):void 0},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},ChangeAttr:function(t){var e=this.productValue[t];this.currSku=t,this.newVal=this.productValue[t],e&&this.$set(this,"uniqueValue",e.unique),e&&e.stock>0?(this.$set(this.attr.productSelect,"image",e.image?e.image:this.attrImage),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"stock",e.stock),this.$set(this.attr.productSelect,"unique",e.unique),this.$set(this,"uniqueValue",e.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",t)):(this.$set(this.attr.productSelect,"image",e.image?e.image:this.attrImage),this.$set(this.attr.productSelect,"price",e.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""))},subOrder:function(e){var i=[];if(this.cartList.valid.forEach((function(t){t.list.forEach((function(t){t.check&&i.push(t.cart_id)}))})),!(i.length>0))return this.$util.Tips({title:"请选择产品"});t.navigateTo({url:"/pages/users/order_confirm/index?cartId="+i.join(",")})},addCart:function(t,e){var i=this;if(t.hasOwnProperty("productAttr")&&t.cart_num>=t.productAttr.stock)return t.cart_num=t.productAttr.stock,t.numAdd=!0,void(t.numSub=!1);var c=this;(0,s.changeCartNum)(t.cart_id,{cart_num:t.cart_num+1}).then((function(e){t.cart_num=Number(t.cart_num)+1,c.cartTotalCount=Number(c.cartTotalCount)+1,t.numAdd=!1,t.numSub=!1,i.cartAllCheck("goodsCheck")})).catch((function(t){c.$util.Tips({title:t})}))},goCat:function(){var t=this;(0,s.changeCartNum)(t.goods.cart_id,{cart_num:t.goods.cart_num,product_attr_unique:t.newVal.unique}).then((function(e){if(t.goods.hasOwnProperty("productAttr")&&t.goods.cart_num>t.goods.productAttr.stock)return t.goods.cart_num=t.goods.productAttr.stock,t.goods.numAdd=!0,void(t.goods.numSub=!1);t.goods.numAdd=!1,t.goods.numSub=!1,t.onMyEvent(),t.getCartList(!0),t.isAllSelect=!1})).catch((function(e){t.$util.Tips({title:e})}))},subCart:function(t){var e=this,i=!1;t.cart_num<1&&(i=!0),t.cart_num<=1?(t.cart_num=1,t.numSub=!0,i=!0):0==i&&(0,s.changeCartNum)(t.cart_id,{cart_num:Number(t.cart_num)-1}).then((function(i){t.numSub=!1,t.numAdd=!1,t.cart_num<=1&&(t.numSub=!0),t.cart_num=Number(t.cart_num)-1,e.cartTotalCount=Number(e.cartTotalCount)-1,e.cartAllCheck("goodsCheck")})).catch((function(t){e.$util.Tips({title:t})}))},getCartNum:function(){var t=this;(0,s.getCartCounts)().then((function(e){t.cartTotalCount=e.data[0].count||0}))},getCartList:function(e){var i=this;(0,s.getCartList)().then((function(e){e.data.list.forEach((function(t,e){t.allCheck=!0,t.list.forEach((function(t,e){t.check=!0,1==t.cart_num?t.numSub=!0:t.numSub=!1,t.cart_num==t.productAttr.stock?t.numAdd=!0:t.numAdd=!1}))})),i.cartList.valid=e.data.list,i.cartList.invalid=e.data.fail,0==e.data.list.length&&0==e.data.list.length?(i.recommend=!0,i.hostProduct.length||i.getHostProduct()):i.recommend=!1;i.cartAllCheck("cartCheck"),t.stopPullDownRefresh()}))},storeAllCheck:function(t,e){t.allCheck?(t.allCheck=!1,t.list.forEach((function(t,e){t.check=!1}))):(t.allCheck=!0,t.list.forEach((function(t,e){t.check=!0}))),this.cartAllCheck("goodsCheck")},goodsCheck:function(t){t.check=!t.check,this.cartAllCheck("goodsCheck")},cartAllCheck:function(t){var e=this,i=[],c=0,s=0;this.cartList.valid.forEach((function(r,n){if("goodsCheck"==t){var o=r.list.filter((function(t){return 1==t.check}));r.list.length==o.length?(r.allCheck=!0,i.push(r)):r.allCheck=!1}else r.list.forEach((function(t){t.check=e.isAllSelect})),r.allCheck=e.isAllSelect,r.allCheck&&i.push(r);r.list.forEach((function(t){t.check&&(c=e.$util.$h.Add(c,e.$util.$h.Mul(t.productAttr.price,t.cart_num)),s+=t.cart_num)}))})),this.cartCount=s,this.selectCountPrice=c,this.isAllSelect=i.length==this.cartList.valid.length},checkboxAllChange:function(){this.isAllSelect=!this.isAllSelect,this.cartAllCheck("cartCheck")},getHostProduct:function(){var t=this;t.loadend||t.hotScroll||(t.loading=!0,t.loadTitle="加载更多",(0,n.getProductHot)(t.hotPage,t.hotLimit).then((function(e){e.data.list;t.hotPage++,t.hotScroll=e.data.list.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data.list),t.loading=!1,t.loadTitle=t.hotScroll?"我也是有底线的":"加载更多"})))},goodsOpen:function(){this.goodsHidden=!this.goodsHidden},manage:function(){this.footerswitch=!this.footerswitch},unsetCart:function(){for(var t=this,e=[],i=0,c=t.cartList.invalid.length;i<c;i++)e.push(t.cartList.invalid[i].cart_id);(0,s.cartDel)({cart_id:e}).then((function(e){t.$util.Tips({title:"清除成功"}),t.getCartNum(),t.$set(t.cartList,"invalid",[])})).catch((function(t){}))},giveCoupon:function(e){var i=this,c=[],s=[],n=[];e.list.map((function(t){n.push(t.product_id)})),t.showLoading({title:"加载中...",mask:!0}),(0,r.getCoupons)({ids:n.join(",")}).then((function(n){c=n.data,(0,r.getShopCoupons)(e.mer_id).then((function(e){var r=e.data;t.hideLoading(),s=c.concat(r),i.$set(i.coupon,"list",s),i.$set(i.coupon,"coupon",!0)})).catch((function(t){}))}))},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},ChangCouponsUseState:function(t){this.coupon.list[t].issue=!0}},onPullDownRefresh:function(){this.cartList={valid:[],invalid:[]},this.getCartNum(),this.getCartList()},onReachBottom:function(){this.recommend&&this.getHostProduct()},onPageScroll:function(e){t.$emit("scroll")}});e.default=l}).call(this,i("543d")["default"])},e9b1:function(t,e,i){"use strict";var c=i("17e2"),s=i.n(c);s.a}},[["09cd","common/runtime","common/vendor"]]]);