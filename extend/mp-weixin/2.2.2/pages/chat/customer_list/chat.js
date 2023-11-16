(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/customer_list/chat"],{"22ee":function(t,e,i){"use strict";var n=i("a263"),s=i.n(n);s.a},4462:function(t,e,i){"use strict";(function(t,n){var s=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(i("8c81")),r=s(i("f1e2")),c=i("6859"),d=i("736f"),a=i("041f"),h=i("59c6"),u=i("f26a"),l=i("ddb3"),f=i("3255"),p=i("26cb"),g=function(t,e){e=1*e||1;var i=[];return t.forEach((function(t,n){n%e===0&&i.push([]),i[i.length-1].push(t)})),i},m=(getApp(),{name:"CustomerService",components:{Loading:function(){i.e("components/Loading/index").then(function(){return resolve(i("a869"))}.bind(null,i)).catch(i.oe)}},props:{couponList:{type:Array,default:function(){return[]}}},computed:(0,f.configMap)(["hide_mer_status"],(0,p.mapGetters)(["isLogin","viewColor","uid"])),data:function(){return{url:"".concat(u.HTTP_REQUEST_URL,"/api/upload/image"),headers:{"Authori-zation":"Bearer "+this.$store.state.app.token},emojiGroup:g(o.default,21),active:!1,voice:!1,speak:"按住 说话",recording:!1,swiperOption:{pagination:{el:".swiper-pagination",clickable:!0},speed:1e3,observer:!0,observeParents:!0},percent:0,footerConH:0,footerH:1.08,socket:null,toUid:0,page:1,limit:30,loading:!1,loaded:!1,history:[],sendColor:!1,sendtxt:"",productId:0,presellId:0,combinationId:0,productInfo:{},orderId:"",orderInfo:{},cartInfo:{},autoplay:!1,circular:!0,interval:3e3,duration:500,upload_max:2,uploadImages:[],uploads:[],exceeded_list:[],windowH:0,isBQ:!1,scrollTop:0,textCon:"",iconColor:"#CCCCCC",mer_id:0,refund_order_id:0,refundDetail:"",userId:0,pageType:0,status:!1,storeInfo:"",isBack:!1,httpUrl:"",press:!1,index:0,j:0}},watch:{textCon:function(t,e){this.iconColor=""==t?"#CCCCCC":"#86C956"}},beforeDestroy:function(){t.$off(["socket_open","reply","chat","send_chat","socket_error","socket_close"])},onUnload:function(){this.wsEnd()},onLoad:function(e){var i=this;this.toUid=e.uid||0,this.productId=parseInt(e.productId)||0,this.presellId=parseInt(e.presellId)||0,this.combinationId=parseInt(e.combinationId)||0,this.orderId=e.order_id||"",this.mer_id=e.mer_id||0,this.refund_order_id=e.refund_order_id||0,this.userId=e.userId||0,t.getSystemInfo({success:function(t){i.windowH=t.windowHeight}})},onReady:function(){this.httpUrl="".concat(u.HTTP_REQUEST_URL,"/static/look.png")},mounted:function(){var e=this,i=this;i.isLogin?(0==i.userId?(i.getHistory(),i.getproductInfo(),i.getOrderInfo(),i.getRefundDetail(),i.getStoreDetail()):i.getMerHistory(),t.$on("socket_open",(function(){0==i.userId?i.socket.send({data:{mer_id:i.mer_id},type:"chat_start"}):i.socket.send({data:{uid:i.userId,mer_id:i.mer_id},type:"service_chat_start"})})),t.$on(["reply","chat","send_chat"],(function(t){if(t.longpress=!1,i.history.length>0&&i.history[i.history.length-1]["children"].length>0){var e=i.history[i.history.length-1]["children"].length-1,n=i.history[i.history.length-1]["children"][e];t.send_time-n.send_time>300?i.history.push({time:t.create_time,children:[t]}):i.history[i.history.length-1]["children"].push(t)}else i.history.push({time:t.create_time,children:[t]});i.deleteMsg(t),i.height()})),t.$on("socket_error",(function(){if(!i.isBack){var n=e;t.showModal({title:"提示",content:"连接失败,是否重新连接",success:function(e){e.confirm?n.wsStart():e.cancel&&t.navigateBack()}})}})),t.$on("err_tip",(function(i){e.isBack||t.showModal({title:"提示",content:i,success:function(t){t.confirm||t.cancel}})})),t.$on("socket_close",(function(){if(!e.isBack){e.$mp.page.route;var i=e;t.showModal({title:"提示",content:"连接断开，是否重新连接",success:function(e){e.confirm?i.wsStart():e.cancel&&t.navigateBack()}})}})),i.hasService(),i.wsStart()):(0,l.toLogin)()},methods:{userDetail:function(e){this.wsEnd(),t.redirectTo({url:"/pages/chat/customer_info/index?uid=".concat(e,"&mer_id=").concat(this.mer_id)})},hasService:function(){var t=this;(0,c.hasServiceApi)(this.mer_id).then((function(e){t.height(),0==t.userId?t.getHistory():t.getMerHistory()})).catch((function(e){return t.$util.Tips({title:e},{tab:3,url:1})}))},goCustomer:function(){t.makePhoneCall({phoneNumber:this.storeInfo.service_phone,success:function(t){},fail:function(t){}})},getStoreDetail:function(){var t=this;(0,d.getStoreDetail)(this.mer_id).then((function(e){t.storeInfo=e.data}))},wsStart:function(){this.socket=new r.default,this.height()},wsEnd:function(){0==this.userId?this.socket.send({data:{mer_id:this.mer_id},type:"chat_end"}):this.socket.send({data:{uid:this.userId,mer_id:this.mer_id},type:"service_chat_end"}),this.isBack=!0,this.socket&&this.socket.onClose()},deleteMsg:function(t){this.history.forEach((function(e,i){e.children.forEach((function(i,n){100==t.msn_type&&t.msn==i.service_log_id&&e.children.splice(n,1)}))}))},getRefundDetail:function(){var t=this;this.refund_order_id&&(0,h.refundDetail)(this.refund_order_id).then((function(e){t.refundDetail=e.data}))},uploadImg:function(){var t=this;t.$util.uploadImageOne("upload/image",(function(e){200==e.status&&t.sendMsg(e.data.path,3)}))},longTime:function(t,e,i,n){i.longpress=!0,this.history[this.index]["children"][this.j]["longpress"]=!1,this.press=!0,this.index=e,this.j=n,this.history[this.index]["children"][this.j]["longpress"]=!0},stoppress:function(){this.press=!1},reverstMsg:function(t){this.sendMsg(t.service_log_id,100),setTimeout((function(){t.longpress=!1}),300)},getOrderInfo:function(){var t=this;this.orderId&&(0,h.getOrderDetail)(this.orderId).then((function(e){t.orderInfo=e.data,t.orderInfo.orderProduct.length&&(t.cartInfo=t.orderInfo.orderProduct[0])}))},getproductInfo:function(){var t=this;(t.productId||t.presellId||t.combinationId)&&(t.presellId||t.combinationId?t.presellId?(0,d.getPresellProductDetail)(t.presellId).then((function(e){t.productInfo=e.data})):t.combinationId&&(0,a.getCombinationDetail)(t.combinationId).then((function(e){t.productInfo=e.data.product})):(0,d.getProductDetail)(t.productId).then((function(e){t.productInfo=e.data})))},scroll:function(){window.scrollY<300&&!this.loaded&&!this.loading&&this.getHistory()},imageuploaded:function(t){if(200!==t.status)return this.$util.Tips({title:t.msg||"上传图片失败"});this.sendMsg(t.data.url,3)},getHistory:function(){var t=this;this.loading||this.loaded||(this.loading=!0,(0,c.getChatRecord)(this.mer_id,{page:this.page,limit:this.limit}).then((function(e){var i=e.data,n=t.getChatTime(i.list),s=[];for(var o in n){var r=o,c={};c.time=r,n[o].forEach((function(t,e){t.longpress=!1})),c.children=n[o],s.push(c)}t.history=s.concat(t.history),1===t.page&&t.$nextTick((function(){this.height()})),t.page++,t.loading=!1,t.loaded=i.length<t.limit})).catch((function(e){t.$util.Tips({title:e.message||"加载失败"})})))},getChatTime:function(t){for(var e={},i="",n=0;n<t.length;n++)if(0==n){var s=t[n]["create_time"];e[s]=[t[n]],i=s}else if(t[n]["send_time"]-t[n-1]["send_time"]<=300)e[i].push(t[n]);else{var o=t[n]["create_time"];i=o,e[o]?e[i].push(t[n]):e[o]=[t[n]]}return e},getMerHistory:function(){var t=this;if(!this.loading&&!this.loaded){this.loading=!0;var e=this.history.length?this.history[0].service_log_id:"";(0,c.getMerHistory)(this.userId,this.mer_id,{page:this.page,limit:this.limit,last_id:e}).then((function(e){var i=e.data,n=t.getChatTime(i.list),s=[];for(var o in n){var r=o,c={};c.time=r,n[o].forEach((function(t,e){t.longpress=!1})),c.children=n[o],s.push(c)}t.history=s.concat(t.history),1===t.page&&t.$nextTick((function(){this.height()})),t.page++,t.loading=!1,t.loaded=i.length<t.limit})).catch((function(e){t.$util.Tips({title:e.msg||"加载失败"})}))}},focus:function(){this.active=!1},keyup:function(){this.$refs.input.value.length>0?this.sendColor=!0:this.sendColor=!1},addEmoji:function(t){this.sendMsg(t,2)},replace_em:function(t){return t=t.replace(/\[em-([\s\S]*)\]/g,"<span class='em em-$1' style='background-image:url("+this.httpUrl+")'></span>"),t},clickImg:function(t){n.previewImage({urls:[t],current:"",success:function(t){},fail:function(t){},complate:function(t){}})},sendMsg:function(t,e){0==this.userId?(this.height(),this.socket.send({data:{msn:t,msn_type:e,mer_id:this.mer_id},type:"send_chat"})):(this.height(),this.socket.send({data:{msn:t,msn_type:e,uid:this.userId,mer_id:this.mer_id},type:"service_chat"}))},sendTest:function(){this.sendMsg(this.textCon,1),this.textCon="",this.height()},sendProduct:function(){this.presellId||this.combinationId?this.presellId?(this.sendMsg(this.presellId,7),this.presellId=0):this.combinationId&&(this.sendMsg(this.combinationId,8),this.combinationId=0):(this.sendMsg(this.productId,4),this.productId=0),this.productInfo={}},sendOrder:function(){this.sendMsg(this.orderId,5),this.orderId=0,this.orderInfo={}},sendRefundOrder:function(){this.sendMsg(this.refund_order_id,6),this.refund_order_id=0,this.refundDetail={}},bindInput:function(t){t.detail.value?this.sendColor=!0:this.sendColor=!1,this.height()},start:function(){var t=this;this.longClick=0,this.timeOutEvent=setTimeout((function(){t.longClick=1}),500),t.speak="松开 结束",t.recording=!0},move:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent=0},end:function(){return clearTimeout(this.timeOutEvent),0!==this.timeOutEvent&&this.longClick,this.speak="按住 说话",this.recording=!1,!1},voiceBnt:function(){this.active=!1,!0===this.voice?(this.voice=!1,this.$nextTick((function(){this.$refs.input.focus()}))):this.voice=!0,this.percent=0,this.footerConH=0,this.footerH=0,this.$nextTick((function(){this.height()}))},emoticon:function(){this.voice=!1,!0===this.active?(this.active=!1,this.isBQ=!1):(this.active=!0,this.isBQ=!0),this.height()},height:function(){var e=this,i=this,n=0,s=t.createSelectorQuery().select(".chat");setTimeout((function(t){!e.isBack&&s.boundingClientRect((function(t){n=t.height,i.active?i.scrollTop=parseInt(n)+500:i.scrollTop=parseInt(n)+100})).exec()}),1e3)},bindScroll:function(){0==this.userId?(this.getHistory(),this.getproductInfo(),this.getOrderInfo(),this.getRefundDetail(),this.getStoreDetail()):this.getMerHistory()},copyText:function(e){t.setClipboardData({data:e})}}});e.default=m}).call(this,i("543d")["default"],i("bc2e")["default"])},a263:function(t,e,i){},a812:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t.__map(t.history,(function(e,i){var n=t.__get_orig(e),s=0!=t.userId?t.__map(e.children,(function(e,i){var n=t.__get_orig(e),s=0!=e.send_type?e.longpress&&t.press&&(1===e.msn_type||(new Date).getTime()/1e3-e.send_time<=120):null,o=0!=e.send_type&&s?(new Date).getTime():null;return{$orig:n,g0:s,g1:o}})):null;return{$orig:n,l0:s}}))),n=t.__map(t.history,(function(e,i){var n=t.__get_orig(e),s=0==t.userId?t.__map(e.children,(function(e,i){var n=t.__get_orig(e),s=1!=e.send_type?e.longpress&&t.press&&(1===e.msn_type||(new Date).getTime()/1e3-e.send_time<=120):null,o=1!=e.send_type&&s?(new Date).getTime():null;return{$orig:n,g2:s,g3:o}})):null;return{$orig:n,l2:s}})),s=t.emojiGroup.length;t._isMounted||(t.e0=function(e){e.stopPropagation(),t.productId=""},t.e1=function(e){e.stopPropagation(),t.orderId=""},t.e2=function(e){e.stopPropagation(),t.refund_order_id=""}),t.$mp.data=Object.assign({},{$root:{l1:i,l3:n,g4:s}})},s=[]},c366:function(t,e,i){"use strict";(function(t,e){var n=i("4ea4");i("4c7d");n(i("66fd"));var s=n(i("c9d9"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(s.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},c9d9:function(t,e,i){"use strict";i.r(e);var n=i("a812"),s=i("cc36");for(var o in s)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("22ee");var r=i("f0c5"),c=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"141c1853",null,!1,n["a"],void 0);e["default"]=c.exports},cc36:function(t,e,i){"use strict";i.r(e);var n=i("4462"),s=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a}},[["c366","common/runtime","common/vendor"]]]);