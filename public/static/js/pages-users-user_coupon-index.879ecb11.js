(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_coupon-index"],{"2cc3":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.navTabBox[data-v-00dcfae2]{background:#fff;height:%?90?%}.longTab[data-v-00dcfae2]{display:flex;text-align:center}.tab-item[data-v-00dcfae2]{width:50%;display:inline-block;line-height:%?90?%}.tab-item uni-text[data-v-00dcfae2]{position:relative;display:inline-block}.tab-item.on[data-v-00dcfae2]{color:var(--view-theme)}.tab-item.on uni-text[data-v-00dcfae2]:after{content:"";display:inline-block;width:90%;height:%?3?%;background-color:var(--view-theme);position:absolute;left:5%;bottom:0}.b-color[data-v-00dcfae2]{background-color:var(--view-theme)}.pic-num[data-v-00dcfae2]{color:#fff;font-size:%?20?%}.coupon-list .item .text .condition[data-v-00dcfae2]{display:flex;align-items:center}.condition .line-title[data-v-00dcfae2]{display:flex;align-items:center;justify-content:center;width:%?90?%;height:%?40?%!important;padding:0 %?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--view-minorColor);border:1px solid var(--view-theme);opacity:1;border-radius:%?22?%;font-size:%?20?%!important;color:var(--view-theme);margin-right:%?12?%}.condition .coupon-title[data-v-00dcfae2]{width:%?280?%}.store-info[data-v-00dcfae2]{background:#fff;padding:%?18?% %?20?%;position:relative}.store-info[data-v-00dcfae2]::before, .store-info[data-v-00dcfae2]::after{content:"";display:inline-block;width:%?24?%;height:%?24?%;background:#f5f5f5;border-radius:100%;position:absolute;bottom:%?-12?%;z-index:10}.store-info[data-v-00dcfae2]::before{left:%?-10?%}.store-info[data-v-00dcfae2]::after{right:%?-10?%}.store-info .image[data-v-00dcfae2]{width:%?40?%;height:%?40?%;border-radius:100%;margin-right:%?9?%}.store-info .name[data-v-00dcfae2]{color:#282828}.store-info .store[data-v-00dcfae2]{color:var(--view-theme);font-size:%?20?%;padding:%?2?% %?15?%;border:1px solid var(--view-theme);border-radius:%?16?%}.svip-btn[data-v-00dcfae2]{background-color:#e8c077}.noCommodity[data-v-00dcfae2]{width:100%}.noCommodity .pictrue[data-v-00dcfae2]{margin:0 auto}.coupon_value[data-v-00dcfae2]{max-width:%?220?%}',""]),t.exports=e},3574:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{style:t.viewColor},[n("v-uni-view",{staticClass:"navTabBox"},[n("v-uni-view",{staticClass:"longTab"},t._l(t.tabList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"tab-item",class:{on:i==t.tabIndex-1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.bindTab(i)}}},[n("v-uni-text",[t._v(t._s(e.title))])],1)})),1)],1),t.couponsList.length?n("v-uni-view",{staticClass:"coupon-list"},t._l(t.couponsList,(function(e,i){return n("v-uni-view",{key:i},[e.merchant&&0==e.status?n("v-uni-view",{staticClass:"store-info acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"store_name acea-row row-between-wrapper"},[n("v-uni-image",{staticClass:"image",attrs:{src:e.merchant.mer_avatar}}),n("v-uni-text",{staticClass:"name"},[t._v(t._s(e.merchant.mer_name))])],1),0==t.hide_mer_status&&0==e.status?n("v-uni-view",{staticClass:"store",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goStore(e)}}},[t._v("进店")]):t._e()],1):t._e(),n("v-uni-view",{staticClass:"item acea-row row-center-wrapper"},[0==e.status?[5==e.coupon.send_type?n("v-uni-view",{staticClass:"money vip-coupon"},[n("v-uni-view",{staticClass:"line1 coupon_value"},[t._v("￥"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(e.coupon_price))])],1),n("v-uni-view",{staticClass:"pic-num"},[t._v("满"+t._s(e.use_min_price)+"元可用")])],1):n("v-uni-view",{staticClass:"money",style:{"background-image":"url("+t.domain+"/static/diy/couponBg"+t.keyColor+".png)"}},[n("v-uni-view",{staticClass:"line1 coupon_value"},[t._v("￥"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(e.coupon_price))])],1),n("v-uni-view",{staticClass:"pic-num"},[t._v("满"+t._s(e.use_min_price)+"元可用")])],1)]:n("v-uni-view",{staticClass:"money moneyGray"},[n("v-uni-view",[t._v("￥"),n("v-uni-text",{staticClass:"num"},[t._v(t._s(e.coupon_price))])],1),n("v-uni-view",{staticClass:"pic-num"},[t._v("满"+t._s(e.use_min_price)+"元可用")])],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"condition line1"},[e.coupon&&0===e.coupon.type?n("v-uni-view",{staticClass:"line-title",class:0===e.status?"bg-color-huic":"bg-color-check"},[t._v("店铺券")]):e.coupon&&1===e.coupon.type?n("v-uni-view",{staticClass:"line-title",class:0===e._type?"bg-color-huic":"bg-color-check"},[t._v("商品券")]):e.coupon&&11===e.coupon.type?n("v-uni-view",{staticClass:"line-title",class:0===e._type?"bg-color-huic":"bg-color-check"},[t._v("品类券")]):e.coupon&&10===e.coupon.type?n("v-uni-view",{staticClass:"line-title",class:0===e._type?"bg-color-huic":"bg-color-check"},[t._v("通用券")]):e.coupon&&12===e.coupon.type?n("v-uni-view",{staticClass:"line-title",class:0===e._type?"bg-color-huic":"bg-color-check"},[t._v("跨店券")]):n("v-uni-view",{staticClass:"line-title",class:0===e._type?"bg-color-huic":"bg-color-check"},[t._v("商品券")]),n("v-uni-view",{staticClass:"line1 coupon-title"},[t._v(t._s(e.coupon_title))])],1),n("v-uni-view",{staticClass:"data acea-row row-between-wrapper"},[n("v-uni-view",[t._v(t._s(t._f("timeYMD")(e.start_time))+"-"+t._s(t._f("timeYMD")(e.end_time)))]),0==e.status?n("v-uni-view",[n("v-uni-navigator",{staticClass:"bnt1 b-color",class:5==e.coupon.send_type?"svip-btn":"",attrs:{url:"/pages/columnGoods/goods_coupon_list/index?coupon_id="+e.coupon_id,"hover-class":"none"}},[t._v("去使用")])],1):t._e(),1==e.status?n("v-uni-view",{staticClass:"bnt1 gray",staticStyle:{position:"static"}},[t._v("已使用")]):t._e(),2==e.status?n("v-uni-view",{staticClass:"bnt1 gray",staticStyle:{position:"static"}},[t._v("已过期")]):t._e()],1)],1)],2)],1)})),1):t._e(),t.couponsList.length||1!=t.loading?t._e():n("v-uni-view",{staticClass:"noCommodity"},[n("v-uni-view",{staticClass:"pictrue"},[n("v-uni-image",{attrs:{src:t.domain+"/static/images/noCoupon.png"}})],1)],1)],1)},o=[]},5094:function(t,e,n){"use strict";n.r(e);var i=n("f607"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"58d4":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.ajcaptchaCheck=function(t){return o.default.post("ajcheck",t,{noAuth:!0})},e.appleAppAuth=function(t){return o.default.post("auth/apple",t,{noAuth:!0})},e.appletsDecrypt=function(t){return o.default.post("user/mp/binding",t)},e.bindingPhone=function(t){return o.default.post("user/binding",t)},e.getAjcaptcha=function(t){return o.default.get("ajcaptcha",t,{noAuth:!0})},e.getAppVersion=function(){return o.default.get("appVersion",{},{noAuth:!0})},e.getArticleBannerList=function(){return o.default.get("article/banner/list",{},{noAuth:!0})},e.getArticleCategoryList=function(){return o.default.get("article/category/lst",{},{noAuth:!0})},e.getArticleDetails=function(t){return o.default.get("article/detail/"+t,{},{noAuth:!0})},e.getArticleHotList=function(){return o.default.get("article/hot/list",{},{noAuth:!0})},e.getArticleList=function(t,e){return o.default.get("article/lst/"+t,e,{noAuth:!0})},e.getAssistData=function(t){return o.default.get("diy/assist",t,{noAuth:!0})},e.getCateData=function(t){return o.default.get("diy/category",t,{noAuth:!0})},e.getCity=function(){return o.default.get("system/city/lst",{},{noAuth:!0})},e.getCityList=function(t){return o.default.get("v2/system/city",{address:t},{noAuth:!0})},e.getCityV2=function(t){return o.default.get("v2/system/city/lst/"+t,{},{noAuth:!0})},e.getCombinationData=function(t){return o.default.get("diy/group",t,{noAuth:!0})},e.getCouponData=function(t){return o.default.get("diy/coupon",t,{noAuth:!0})},e.getCoupons=function(t){return o.default.get("coupon/product",t,{noAuth:!0})},e.getDiy=function(t){return o.default.get("diy",t,{noAuth:!0})},e.getIndexData=function(){return o.default.get("common/home",{},{noAuth:!0})},e.getLiveData=function(t){return o.default.get("diy/broadcast",t,{noAuth:!0})},e.getLiveList=function(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})},e.getLogo=function(){return o.default.get("wechat/get_logo",{},{noAuth:!0})},e.getOpenAdv=function(){return o.default.get("open_screen",{},{noAuth:!0})},e.getPageDiy=function(t){return o.default.get("micro",t,{noAuth:!0})},e.getPresellData=function(t){return o.default.get("diy/presell",t,{noAuth:!0})},e.getProductData=function(t){return o.default.get("diy/spu",t,{noAuth:!0})},e.getSeckillData=function(t){return o.default.get("diy/seckill",t,{noAuth:!0})},e.getShopCoupons=function(t){return o.default.get("coupon/store/"+t,{},{noAuth:!0})},e.getTemlIds=function(){return o.default.get("wechat/teml_ids",{},{noAuth:!0})},e.getUserCoupons=function(t){return o.default.get("coupon/list",t)},e.graphicLstData=function(t){return o.default.get("diy/community",t,{noAuth:!0})},e.hotRankingList=function(t){return o.default.get("diy/hot_top",t,{noAuth:!0})},e.loginMobile=function(t){return o.default.post("login/mobile",t,{noAuth:!0})},e.logout=function(){return o.default.get("logout")},e.modifyPassword=function(t){return o.default.post("user/change/password",t)},e.modifyPhone=function(t){return o.default.post("user/change/phone",t)},e.phoneLogin=function(t){return o.default.post("login",t,{noAuth:!0})},e.phoneRegister=function(t){return o.default.post("register",t,{noAuth:!0})},e.phoneRegisterReset=function(t){return o.default.post("register/reset",t,{noAuth:!0})},e.pink=function(){return o.default.get("pink",{},{noAuth:!0})},e.registerVerify=function(t,e,n,i){return o.default.post("register/verify",{phone:t,type:void 0===e?"reset":e,key:n,code:i},{noAuth:!0})},e.setCouponReceive=function(t){return o.default.post("coupon/receive/"+t)},e.setFormId=function(t){return o.default.post("wechat/set_form_id",{formId:t})},e.storeList=function(t){return o.default.get("diy/store",t,{noAuth:!0})},e.switchH5Login=function(t){return o.default.post("user/switch",t)},e.verifyCode=function(){return o.default.get("verify_code",{},{noAuth:!0})},e.wechatAppAuth=function(t){return o.default.post("auth/app",t,{noAuth:!0})};var o=i(n("3314"))},"7d3b":function(t,e,n){var i=n("2cc3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("e65f35e0",i,!0,{sourceMap:!1,shadowMode:!1})},"99a8":function(t,e,n){"use strict";var i=n("7d3b"),o=n.n(i);o.a},ea9b:function(t,e,n){"use strict";n.r(e);var i=n("3574"),o=n("5094");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("99a8");var u=n("f0c5"),s=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"00dcfae2",null,!1,i["a"],void 0);e["default"]=s.exports},f607:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("99af");var i=n("58d4"),o=n("26cb"),a=n("3255"),u=n("f26a"),s=n("ddb3"),c=(getApp(),{components:{},data:function(){return{domain:u.HTTP_REQUEST_URL,tabIndex:1,couponsList:[],loading:!1,isUsed:0,tabList:[{title:"未使用"},{title:"已使用/已过期"}],limit:15,page:1,isScroll:!0,moneyBg:"/static/images/couponBg"}},computed:(0,a.configMap)(["hide_mer_status"],(0,o.mapGetters)(["isLogin","viewColor","keyColor"])),filters:{timeYMD:function(t){if(t){var e=/\d{4}-\d{1,2}-\d{1,2}/g.exec(t);return e[0]}}},onLoad:function(){this.isLogin?this.getUseCoupons():(0,s.toLogin)()},mounted:function(){},methods:{bindTab:function(t){this.tabIndex=t+1,this.page=1,this.isScroll=!0,this.couponsList=[],this.getUseCoupons()},goStore:function(t){1!=this.hide_mer_status&&0==t.status&&uni.navigateTo({url:"/pages/store/home/index?id=".concat(t.mer_id)})},getUseCoupons:function(){var t=this;this.isScroll&&(0,i.getUserCoupons)({statusTag:this.tabIndex,page:this.page,limit:this.limit}).then((function(e){t.loading=!0,t.couponsList=t.couponsList.concat(e.data.list),t.isScroll=t.couponsList.length<e.data.count,t.page++}))}},onReachBottom:function(){this.getUseCoupons()}});e.default=c}}]);