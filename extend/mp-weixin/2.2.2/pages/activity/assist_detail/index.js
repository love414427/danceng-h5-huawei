(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/assist_detail/index"],{2891:function(t,e,a){"use strict";var n=a("5c50"),i=a.n(n);i.a},"33ae":function(t,e,a){"use strict";a.r(e);var n=a("7155"),i=a("5268");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("2891");var s=a("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"9a19b8b0",null,!1,n["a"],void 0);e["default"]=o.exports},5268:function(t,e,a){"use strict";a.r(e);var n=a("c262"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"5c50":function(t,e,a){},7155:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={jyfParser:function(){return Promise.all([a.e("common/vendor"),a.e("components/jyf-parser/jyf-parser")]).then(a.bind(null,"3192"))}},i=function(){var t=this,e=t.$createElement,a=(t._self._c,(t.bargainInfo.yet_assist_count/t.bargainInfo.assist_count*100).toFixed(2)),n=t.bargainInfo.product&&t.bargainInfo.product.content?t.bargainInfo.product.content.content.replace(/<br\/>/gi,""):null;t._isMounted||(t.e0=function(e){t.H5ShareBox=!1}),t.$mp.data=Object.assign({},{$root:{g0:a,g1:n}})},r=[]},"9c9a":function(t,e,a){"use strict";(function(t,e){var n=a("4ea4");a("4c7d");n(a("66fd"));var i=n(a("33ae"));t.__webpack_require_UNI_MP_PLUGIN__=a,e(i.default)}).call(this,a("bc2e")["default"],a("543d")["createPage"])},c262:function(t,e,a){"use strict";(function(t){var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("2eee")),r=n(a("c973")),s=n(a("7037")),o=n(a("9523")),c=a("041f"),u=a("f26a"),d=a("ddb3"),l=a("736f"),p=n(a("3f65")),f=(n(a("43a2")),a("26cb")),g=a("3255"),h=a("6859"),b=n(a("c5df")),m=n(a("9673"));function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}var _=getApp(),y={components:{passwordPopup:function(){Promise.all([a.e("common/vendor"),a.e("components/passwordPopup/index")]).then(function(){return resolve(a("5edd"))}.bind(null,a)).catch(a.oe)},countDown:function(){a.e("components/countDown/index").then(function(){return resolve(a("628d"))}.bind(null,a)).catch(a.oe)},copyPassword:function(){a.e("components/copyPassword/index").then(function(){return resolve(a("5f00"))}.bind(null,a)).catch(a.oe)},home:function(){a.e("components/home/index").then(function(){return resolve(a("4cc1"))}.bind(null,a)).catch(a.oe)},"jyf-parser":function(){Promise.all([a.e("common/vendor"),a.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(a("3192"))}.bind(null,a)).catch(a.oe)}},mixins:[b.default],data:function(){return{countDownDay:"00",countDownHour:"00",countDownMinute:"00",countDownSecond:"00",active:!1,id:0,userInfo:{},bargainUid:0,bargainUserInfo:{},bargainUserId:0,bargainInfo:[],bargainData:{assistSku:[]},offset:0,limit:20,limitStatus:!1,bargainUserHelpList:[],bargainUserHelpInfo:[],bargainUserBargainPrice:0,status:"",bargainCount:[],old_price:0,retunTop:!0,bargainPartake:0,interval:null,userBargainStatus:0,productStock:0,quota:0,userBargainStatusHelp:!0,navH:"",statusPay:"",bargainSumCount:0,bargainPrice:0,datatime:0,offest:"",tagStyle:{img:"width:100%;display:block;",video:"width:100%;"},domain:u.HTTP_REQUEST_URL,H5ShareBox:!1,systemH:0,pages:"",protocol:"",host:"",currSpid:"",posters:!1,actionSheetHidden:!0,posterImageStatus:!1,storeImage:"",PromotionCode:"",canvasStatus:!1,posterImage:"",posterbackgd:"/static/images/posterbackgd.png",isDown:!0,isCopy:!1,copyUrl:"",load:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){(0,o.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,g.configMap)({site_name:"",share_pic:""},(0,f.mapGetters)(["isLogin","uid","viewColor","keyColor"]))),watch:{isLogin:{handler:function(t,e){t&&this.getBargainDetails()},deep:!0}},onLoad:function(e){var a=this;e.spid&&(_.globalData.spid=e.spid,a.currSpid=e.spid),t.getSystemInfo({success:function(t){a.systemH=t.statusBarHeight,a.navH=a.systemH+10}});var n=getCurrentPages();if(n.length,e.scene){var i=p.default.getUrlParams(decodeURIComponent(e.scene));"object"===(0,s.default)(i)?(i.id&&(e.id=i.id),i.bargain&&(e.bargain=i.bargain),i.spid&&(_.globalData.spid=i.spid,a.currSpid=i.spid)):_.globalData.spid=i}e.spid&&(_.globalData.spid=e.spid),e.hasOwnProperty("id")&&(a.id=e.id,a.bargainUid=e.bargain||0),a.isLogin?("undefined"==a.bargainUid&&(a.bargainUid=a.$store.state.app.uid),a.getBargainDetails(),a.downloadFilePromotionCode(),a.getHistory()):(0,d.toLogin)(),(0,m.default)(a.currSpid,a.isLogin),t.setNavigationBarTitle({title:"助力详情"})},onShow:function(){},onReady:function(){},methods:{goBack:function(){t.navigateBack({delta:1})},goProduct:function(){t.navigateTo({url:"/pages/goods_details/index?id=".concat(this.bargainInfo.product.old_product_id)})},goPoster:function(){var e=this;return(0,r.default)(i.default.mark((function a(){var n,r;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.posterImage){a.next=4;break}return e.posterImageStatus=!0,e.posters=!1,a.abrupt("return");case 4:return n=e,n.posters=!1,n.$set(n,"canvasStatus",!0),t.showLoading({title:"海报生成中",mask:!0}),a.t0=n.posterbackgd,a.next=11,n.fileStoreImage(n.storeImage);case 11:return a.t1=a.sent,a.next=14,n.fileStoreImage(n.codeImg);case 14:return a.t2=a.sent,a.next=17,n.fileStoreImage(n.share_pic);case 17:a.t3=a.sent,r=[a.t0,a.t1,a.t2,a.t3],n.$util.goodsPosterCanvas(r,n.bargainData.store_name,n.bargainPrice,n.site_name,n.old_price,(function(t){n.$set(n,"posterImage",t),n.$set(n,"posterImageStatus",!0),n.$set(n,"canvasStatus",!1),n.$set(n,"actionSheetHidden",!n.actionSheetHidden)}),(function(t){n.$set(n,"canvasStatus",!1)}));case 20:case"end":return a.stop()}}),a)})))()},imgToBase:function(t){return(0,r.default)(i.default.mark((function e(){var a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,h.imgToBase)({image:t});case 2:return a=e.sent,e.abrupt("return",a.data.image);case 4:case"end":return e.stop()}}),e)})))()},fileStoreImage:function(e){var a=this,n="https:"==e.split("//")[0];return n||(e="https://"+e.split("//")[1]),new Promise((function(n,i){var r=a;t.downloadFile({url:e,success:function(t){n(t.tempFilePath)},fail:function(t){return r.$util.Tips({title:"".concat(t)})}})}))},listenerActionSheet:function(){0==this.isLogin?(0,d.toLogin)():this.posters=!this.posters},listenerActionClose:function(){this.posters=!1},posterImageClose:function(){this.posterImageStatus=!1},downloadFilePromotionCode:function(){var t=this;(0,l.getProductCode)(t.id,{type:"wechat",product_type:3}).then(function(){var e=(0,r.default)(i.default.mark((function e(a){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.codeImg=a.data.url,t.$set(t,"isDown",!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$util.Tips({title:e}),t.posters=!1,t.$set(t,"isDown",!1),t.$set(t,"PromotionCode","")}))},savePosterPath:function(){},copyPwd:function(){var t=this;(0,l.copyPasswordApi)({id:t.id,product_type:30}).then(function(){var e=(0,r.default)(i.default.mark((function e(a){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.copyUrl=a.data.str,t.posters=!1,t.isCopy=!0;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},closeCopy:function(){this.isCopy=!1},goPay:function(){var e=this,a={product_id:e.bargainInfo.product_assist_set_id,product_attr_unique:e.bargainInfo.product.unique,cart_num:1,product_type:3,is_new:1};(0,l.postCartAdd)(a).then((function(e){t.navigateTo({url:"/pages/users/order_confirm/index?new=1&cartId="+e.data.cart_id})})).catch((function(t){return e.$util.Tips({title:t})}))},getBargainDetails:function(){var t=this,e=t.id;(0,c.getAssistDetail)(e,{type:2}).then((function(e){t.bargainInfo=e.data,t.bargainData=e.data.assist,t.bargainPrice=t.bargainData.assistSku[0].assist_price,t.old_price=t.bargainData.assistSku[0].sku&&t.bargainData.assistSku[0].sku.price||0,t.userInfo=e.data.user,t.bargainSumCount=e.data.yet_assist_count,t.$set(t,"storeImage",t.bargainInfo.product.image),t.datatime=e.data.stopTime,t.pages="/pages/activity/assist_detail/index?id="+t.id,t.bargainUserHelpList=[],t.getBargainUser()})).catch((function(e){t.$util.Tips({title:e},{tab:3})}))},currentBargainUser:function(){var e=this,a=e.bargainInfo.product_assist_id;(0,c.initiateAssistApi)(a).then((function(e){var a=e.data.product_assist_set_id;t.hideLoading(),t.navigateTo({url:"/pages/activity/assist_detail/index?id="+a})})).catch((function(a){t.hideLoading(),e.$util.Tips({title:a})}))},setBargainHelp:function(){var t=this;t.load=!0,(0,c.postAssistHelp)(t.bargainInfo.product_assist_set_id).then((function(e){t.$set(t,"bargainUserHelpList",[]),t.getBargainUser(),t.$util.Tips({title:e.message}),t.getBargainDetails(),t.load=!1})).catch((function(e){t.$util.Tips({title:e}),t.$set(t,"bargainUserHelpList",[]),t.getBargainUser(),t.load=!1}))},getBargainUser:function(){var t=this,e={offset:t.offset,limit:t.limit};(0,c.assistHelpList)(t.id).then((function(a){var n=t.bargainUserHelpList,i=a.data.list.length;n.concat(a.data.list),t.$set(t,"bargainUserHelpList",a.data.list),t.$set(t,"limitStatus",e.limit>i),t.$set(t,"offest",Number(e.offset)+Number(e.limit))}))},goBargainList:function(){t.navigateTo({url:"/pages/activity/assist/index"})},goOrderDetail:function(e){1==e.paid?t.navigateTo({url:"/pages/order_details/index?order_id="+e.order_id}):t.navigateTo({url:"/pages/order_details/stay?order_id="+e.group_order_id})},close:function(){this.$set(this,"active",!1)},addShareAssist:function(){(0,c.getAssistUser)(this.bargainInfo.product_assist_set_id).then((function(t){}))}},onHide:function(){null!==this.interval&&clearInterval(this.interval)},onUnload:function(){null!==this.interval&&clearInterval(this.interval)},onShareAppMessage:function(){var t={title:"您的好友"+this.userInfo.nickname+"邀请您帮他助力"+this.bargainInfo.product.store_name+" 快去帮忙吧！",path:"/pages/activity/assist_detail/index?id="+this.id+"&spread="+this.uid,imageUrl:this.bargainInfo.product.image};return this.close(),this.addShareAssist(),t}};e.default=y}).call(this,a("543d")["default"])}},[["9c9a","common/runtime","common/vendor"]]]);