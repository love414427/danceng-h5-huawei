(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-wechat_login-index"],{2052:function(t,a,e){var i=e("43d0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("150bc418",i,!0,{sourceMap:!1,shadowMode:!1})},"2a46":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.product-window.on[data-v-c2aae8aa]{-webkit-transform:translateZ(0);transform:translateZ(0)}.maskPoup[data-v-c2aae8aa]{z-index:999}.product-window[data-v-c2aae8aa]{position:fixed;bottom:0;width:100%;left:0;background-color:#fff;z-index:1000;border-radius:%?40?% %?40?% 0 0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9);padding:%?64?% %?40?%;padding-bottom:%?38?%;padding-bottom:calc(38rpx+ constant(safe-area-inset-bottom));padding-bottom:calc(%?38?% + env(safe-area-inset-bottom));box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06)}.product-window .icon-guanbi[data-v-c2aae8aa]{position:absolute;top:%?40?%;right:%?40?%;font-size:%?24?%;font-weight:700;color:#999}.product-window .mp-data[data-v-c2aae8aa]{display:flex;align-items:center;justify-content:center;margin-bottom:%?40?%}.product-window .mp-data .mp-name[data-v-c2aae8aa]{font-size:%?34?%;font-weight:500;color:#333;line-height:%?48?%}.product-window .trip-msg[data-v-c2aae8aa]{padding-bottom:%?32?%}.product-window .trip-msg .title[data-v-c2aae8aa]{font-size:%?30?%;font-weight:700;color:#000;margin-bottom:%?6?%}.product-window .trip-msg .trip[data-v-c2aae8aa]{color:#333;font-size:%?28?%;font-family:PingFang SC-Regular,PingFang SC;font-weight:400}.product-window .trip-title[data-v-c2aae8aa]{font-size:%?28?%;font-weight:500;color:#333;margin-bottom:%?8?%}.product-window .main-color[data-v-c2aae8aa]{font-size:%?28?%;font-weight:400;color:var(--view-theme);margin-bottom:%?40?%}.product-window .bottom[data-v-c2aae8aa]{display:flex;align-items:center;justify-content:center;flex-direction:column}.product-window .bottom .save[data-v-c2aae8aa],\n.product-window .bottom .reject[data-v-c2aae8aa]{display:flex;align-items:center;justify-content:center;width:%?670?%;height:%?80?%;border-radius:%?80?%;background-color:#f5f5f5;color:#333;font-size:%?30?%;font-weight:500}.product-window .bottom .save[data-v-c2aae8aa]{background-color:var(--view-theme);color:#fff;margin-bottom:%?24?%}',""]),t.exports=a},"3f15":function(t,a,e){"use strict";var i=e("2052"),n=e.n(i);n.a},"43d0":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".pl-sty[data-v-c2aae8aa]{color:#999;font-size:%?30?%}",""]),t.exports=a},"4f7f":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAYFBMVEUAAAD19fX19fX09PT09PT19fXj4+P09PTz8/P////09PSysrKzs7O9vb3x8fHHx8fr6+ve3t7U1NTh4eHY2Ni6urrm5ubc3NzBwcG3t7e1tbXl5eXJycnt7e3Q0NDMzMzKPmceAAAACnRSTlMAWuH7ruUJkZEJ7qI+3wAAAWZJREFUWMPt2QlOwzAQhWFnbevxln3pdv9bghAkJY6o23kSReQ/wCdns5Sx+CiP0jiRjJI4jXIxFWUSUBx9eXsJaj95UDGSwCIh8gwJZvm0QNgSUyyYihgLxiLBgomQ4DZwA/8vWJ0aIn1tQaDr6TN7RoDHkaaGlgPO3tzouKBp6FvaMMErLSp5oFNLcDQs8EJeNQtsfLDngI78lGGAFa3UMsB6DSwYYLkGdq+0wgJ9D43yvYH1HvY+eGWBhQ86Fuh/KifJA7uFpxwTlNrbvZhgq249LTmgv4OpIwA0g/dEeKA8zWABAe0MVgiwUDNoDRc0pabbhvLMAd1lpGXKVs+CR6totaY8PwF2mn7IFuYxsG7oTkP5CGgpIBsO1hRUHQzqMFAHgxQYHPy9S+7CwC4YlFWv7mmqr17ox2cDN/DPgehhGnzcBx9I4kemB+xQ9wAfO7+3w3k7IaDiDnu4kEVi6oA7/ngDU8P9py9tSZwAAAAASUVORK5CYII="},5799:function(t,a,e){"use strict";var i=e("cb6f"),n=e.n(i);n.a},"5dea":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{style:t.viewColor},[e("v-uni-view",{staticClass:"product-window",class:{on:t.isShow}},[e("v-uni-view",{staticClass:"iconfont icon-guanbi",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.closeAttr.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"mp-data"},[e("v-uni-image",{attrs:{src:t.routine_logo,mode:""}}),e("v-uni-text",{staticClass:"mp-name"},[t._v(t._s(t.site_name)+" 申请")])],1),e("v-uni-view",{staticClass:"trip-msg"},[e("v-uni-view",{staticClass:"title"},[t._v("获取您的昵称、头像")]),e("v-uni-view",{staticClass:"trip"},[t._v("提供具有辨识度的用户中心界面")])],1),e("v-uni-form",{on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.formSubmit.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"edit"},[e("v-uni-view",{staticClass:"avatar edit-box"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"head"},[t._v("头像")]),t.mp_is_new?e("v-uni-button",{staticClass:"avatar-box",attrs:{"open-type":"chooseAvatar"},on:{chooseavatar:function(a){arguments[0]=a=t.$handleEvent(a),t.onChooseAvatar.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:t.userInfo.avatar||t.defHead}})],1):e("v-uni-view",{staticClass:"avatar-box",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.uploadpic.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:t.userInfo.avatar||t.defHead}})],1)],1)],1),e("v-uni-view",{staticClass:"nickname edit-box"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"head"},[t._v("昵称")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-input",{attrs:{type:"nickname","placeholder-class":"pl-sty",placeholder:"请输入昵称",name:"nickname",maxlength:16,value:t.userInfo.nickname}})],1)],1)],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-button",{staticClass:"save",class:{open:t.userInfo.avatar},attrs:{formType:"submit"}},[t._v("保存")])],1)],1)],1),t.canvasStatus?e("v-uni-canvas",{style:{width:t.canvasWidth+"px",height:t.canvasHeight+"px",position:"absolute",left:"-100000px",top:"-100000px"},attrs:{"canvas-id":"canvas"}}):t._e(),t.isShow?e("v-uni-view",{staticClass:"mask",on:{touchmove:function(a){a.preventDefault(),arguments[0]=a=t.$handleEvent(a)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.closeAttr.apply(void 0,arguments)}}}):t._e()],1)},n=[]},"617a":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.product-window.on[data-v-6bb6c87a]{-webkit-transform:translateZ(0);transform:translateZ(0);display:block}.mask[data-v-6bb6c87a]{z-index:99}.product-window[data-v-6bb6c87a]{position:fixed;bottom:0;width:100%;left:0;background-color:#fff;z-index:1000;border-radius:%?20?% %?20?% 0 0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9);padding:%?38?% %?40?%;display:none}.product-window .icon-guanbi[data-v-6bb6c87a]{position:absolute;top:%?40?%;right:%?40?%;font-size:%?24?%;font-weight:700;color:#999}.product-window .mp-data[data-v-6bb6c87a]{display:flex;align-items:center;margin-bottom:%?30?%}.product-window .mp-data .mp-name[data-v-6bb6c87a]{font-size:%?28?%;font-weight:700;color:#000}.product-window .mp-data uni-image[data-v-6bb6c87a]{width:%?48?%;height:%?48?%;border-radius:50%;margin-right:%?16?%}.product-window .trip-msg[data-v-6bb6c87a]{padding-bottom:%?32?%;border-bottom:1px solid #f5f5f5}.product-window .trip-msg .title[data-v-6bb6c87a]{font-size:%?30?%;font-weight:700;color:#000;margin-bottom:%?6?%}.product-window .trip-msg .trip[data-v-6bb6c87a]{font-size:%?26?%;color:#777}.product-window .edit[data-v-6bb6c87a]{border-bottom:1px solid #f5f5f5}.product-window .edit .avatar[data-v-6bb6c87a]{border-bottom:1px solid #f5f5f5}.product-window .edit .nickname .input[data-v-6bb6c87a]{width:100%}.product-window .edit .nickname uni-input[data-v-6bb6c87a]{height:%?80?%}.product-window .edit .edit-box[data-v-6bb6c87a]{display:flex;justify-content:space-between;align-items:center;font-size:%?30?%;padding:%?22?% 0}.product-window .edit .edit-box .left[data-v-6bb6c87a]{display:flex;align-items:center;flex:1}.product-window .edit .edit-box .left .head[data-v-6bb6c87a]{color:rgba(0,0,0,.9);white-space:nowrap;margin-right:%?60?%}.product-window .edit .edit-box .left uni-button[data-v-6bb6c87a]{flex:1;display:flex;align-items:center}.product-window .edit .edit-box uni-image[data-v-6bb6c87a]{width:%?80?%;height:%?80?%;border-radius:%?6?%}.product-window .edit .icon-xiangyou[data-v-6bb6c87a]{color:#cfcfcf}.product-window .bottom[data-v-6bb6c87a]{display:flex;align-items:center;justify-content:center}.product-window .bottom .save[data-v-6bb6c87a]{border:1px solid #f5f5f5;display:flex;align-items:center;justify-content:center;width:%?368?%;height:%?80?%;border-radius:%?12?%;margin-top:%?52?%;background-color:#f5f5f5;color:#ccc;font-size:%?30?%;font-weight:700}.product-window .bottom .save.open[data-v-6bb6c87a]{border:1px solid #fff;background-color:#07c160;color:#fff}',""]),t.exports=a},"69fb":function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e("26cb"),o=e("3255"),s=(i(e("a50e")),e("6859")),c={props:{isShow:{type:Boolean,value:!1}},data:function(){return{defHead:e("4f7f"),mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1,userInfo:{avatar:"",nickname:""},canvasStatus:!1}},computed:(0,o.configMap)({routine_logo:"",site_name:""},(0,n.mapGetters)(["viewColor","keyColor"])),mounted:function(){},methods:{uploadpic:function(){var t=this,a=this;this.canvasStatus=!0,a.$util.uploadImageChange("upload/image",(function(e){var i=a.userInfo;void 0!==i&&(a.userInfo.avatar=e.data.url),t.canvasStatus=!1}),(function(a){t.canvasStatus=!1}),(function(a){t.canvasWidth=a.w,t.canvasHeight=a.h}))},onChooseAvatar:function(t){var a=this,e=t.detail.avatarUrl;this.$util.uploadImgs("upload/image",e,(function(t){a.userInfo.avatar=t.data.path}),(function(t){}))},closeAttr:function(){this.$emit("closeEdit")},formSubmit:function(t){var a=this,e=this;return this.userInfo.avatar?t.detail.value.nickname?(this.userInfo.nickname=t.detail.value.nickname,void(0,s.editAvatar)(this.userInfo).then((function(t){return a.$emit("editSuccess"),e.$util.Tips({title:t.message,icon:"success"},{tab:3})})).catch((function(t){return e.$util.Tips({title:t||"保存失败"},{tab:3,url:1})}))):e.$util.Tips({title:"请输入昵称"}):e.$util.Tips({title:"请上传头像"})}}};a.default=c},"6f82":function(t,a,e){"use strict";var i=e("bfa2"),n=e.n(i);n.a},"72c6":function(t,a,e){var i=e("87d6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("ee959b4a",i,!0,{sourceMap:!1,shadowMode:!1})},"76a3":function(t,a,e){var i=e("81f2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("5d44e8c6",i,!0,{sourceMap:!1,shadowMode:!1})},"770e":function(t,a,e){"use strict";e.r(a);var i=e("e9ff"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"7a9b":function(t,a,e){"use strict";e.r(a);var i=e("ff19"),n=e("c2fa");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("3f15"),e("5799");var s=e("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"c2aae8aa",null,!1,i["a"],void 0);a["default"]=c.exports},8070:function(t,a,e){"use strict";e.r(a);var i=e("69fb"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"81f2":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-554cabae]{background:#fff}body.?%PAGE?%[data-v-554cabae]{background:#fff}[data-v-554cabae] uni-checkbox .uni-checkbox-input,[data-v-554cabae] uni-checkbox .wx-checkbox-input{border-radius:100%;width:%?28?%;height:%?28?%}[data-v-554cabae] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked,[data-v-554cabae] uni-checkbox .wx-checkbox-input.wx-checkbox-input-checked{border:1px solid var(--view-theme)!important;background-color:var(--view-theme)!important}.wrapper[data-v-554cabae]{position:relative;height:100vh}.wrapper .bag[data-v-554cabae]{position:absolute;top:0;left:0;width:100%;opacity:.8;z-index:-1;z-index:0}.wrapper .bag img[data-v-554cabae]{width:100%;height:%?838?%}.wrapper .merchant-msg[data-v-554cabae]{padding-top:%?252?%;display:flex;justify-content:center;align-items:center;flex-direction:column;z-index:2;position:relative}.wrapper .merchant-msg img[data-v-554cabae]{width:%?152?%;height:%?152?%;border-radius:50%}.wrapper .merchant-msg .name[data-v-554cabae]{font-size:%?40?%;font-weight:500;color:#333;line-height:%?56?%;margin-top:%?32?%}.wechat_login[data-v-554cabae]{margin-top:%?96?%}.wechat_login .img uni-image[data-v-554cabae]{width:100%}.wechat_login .btn-wrapper[data-v-554cabae]{padding:0 %?66?%}.wechat_login .btn-wrapper uni-button[data-v-554cabae]{width:100%;height:%?86?%;line-height:%?86?%;margin-bottom:%?40?%;border-radius:%?120?%;font-size:%?30?%}.wechat_login .btn-wrapper uni-button.btn1[data-v-554cabae]{color:#fff;background:var(--view-theme)}.wechat_login .btn-wrapper uni-button.btn2[data-v-554cabae]{color:#666;border:1px solid #ddd}.title-bar[data-v-554cabae]{position:relative;display:flex;align-items:center;justify-content:center;font-size:%?34?%;font-weight:500;color:#333;line-height:%?48?%}.icon[data-v-554cabae]{position:absolute;left:%?30?%;top:0;display:flex;align-items:center;justify-content:center;width:%?80?%;height:%?80?%}.icon uni-image[data-v-554cabae]{width:%?50?%;height:%?50?%}.protocol[data-v-554cabae]{position:fixed;bottom:%?52?%;left:0;width:100%;margin:0 auto;color:#999;font-size:%?24?%;line-height:%?22?%;text-align:center;bottom:calc(52rpx+ constant(safe-area-inset-bottom));bottom:calc(%?52?% + env(safe-area-inset-bottom))}.protocol .main-color[data-v-554cabae]{color:var(--view-theme)}.protocol .trembling[data-v-554cabae]{-webkit-animation:shake .6s;animation:shake .6s}',""]),t.exports=a},"87d6":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".pl-sty[data-v-6bb6c87a]{color:#999;font-size:%?30?%}",""]),t.exports=a},bea0:function(t,a,e){"use strict";var i=e("72c6"),n=e.n(i);n.a},bfa2:function(t,a,e){var i=e("617a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("72c17a69",i,!0,{sourceMap:!1,shadowMode:!1})},c193:function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("5530")),o=e("26cb"),s=e("3255"),c=(i(e("823f")),getApp(),{data:function(){return{isShow:!1,agreementName:"",mpData:uni.getStorageSync("copyRight")}},computed:(0,n.default)({},(0,s.configMap)({site_name:""},(0,o.mapGetters)(["viewColor"]))),mounted:function(){var t=this;wx.getPrivacySetting({success:function(a){a.needAuthorization?(t.isShow=!0,t.agreementName=a.privacyContractName):t.$emit("onAgree")},fail:function(){},complete:function(){}})},methods:{handleAgree:function(){this.isShow=!1,this.$emit("onclose")},rejectAgreement:function(){this.isShow=!1,this.$emit("onReject")},privacy:function(t){uni.navigateTo({url:"/pages/users/privacy/index?type="+t})}}});a.default=c},c2fa:function(t,a,e){"use strict";e.r(a);var i=e("c193"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},cb6f:function(t,a,e){var i=e("2a46");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("646c38b0",i,!0,{sourceMap:!1,shadowMode:!1})},df35:function(t,a,e){"use strict";var i=e("76a3"),n=e.n(i);n.a},e85b:function(t,a,e){"use strict";e.r(a);var i=e("5dea"),n=e("8070");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("bea0"),e("6f82");var s=e("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"6bb6c87a",null,!1,i["a"],void 0);a["default"]=c.exports},e9ff:function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("c975");var n=i(e("5530")),o=i(e("e85b")),s=i(e("7a9b")),c=e("cd6d"),r=e("937f"),u=e("6859"),d=i(e("823f")),l=(i(e("42cb")),i(e("42cb"))),f=e("f26a"),p=e("3255"),v=i(e("a50e")),h=(e("ddb3"),e("26cb")),b=getApp(),g=uni.getSystemInfoSync().statusBarHeight+"px",m={data:function(){return{domain:f.HTTP_REQUEST_URL,isUp:!1,canClose:!0,phone:"",statusBarHeight:g,isHome:!1,isPhoneBox:!1,protocol:!1,isShow:!1,logoUrl:"",code:"",codeVal:"",authKey:"",options:"",userInfo:{},codeNum:0,canUseGetUserProfile:!1,canGetPrivacySetting:!1,inAnimation:!1,colorStatus:uni.getStorageSync("color_status"),mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1,configData:v.default.get("BASIC_CONFIG"),bindPhone:!1,wechat_phone_switch:0}},computed:(0,n.default)({},(0,p.configMap)({login_logo:"",site_name:"",first_avatar_switch:""},(0,h.mapGetters)(["isLogin","viewColor"]))),components:{editUserModal:o.default,privacyAgreementPopup:s.default},watch:{},onLoad:function(t){uni.getUserProfile&&(this.canUseGetUserProfile=!0);var a=getCurrentPages(),e=a[a.length-2];e&&"pages/order_addcart/order_addcart"==e.route?this.isHome=!0:this.isHome=!1},onReady:function(){this.getCode()},created:function(){},methods:{getCode:function(){this.code=1},getAuthLogin:function(){var t=this,a=this;if(!a.protocol&&!a.canUseGetUserProfile)return a.$util.Tips({title:"请勾选用户协议与隐私政策"});uni.showLoading({title:"正在登录中"}),a.canUseGetUserProfile=!1,d.default.getUserProfile().then((function(e){var i=e.userInfo;i.code=a.code,i.spread=b.globalData.spid,i.spread_code=b.globalData.code,(0,c.commonAuth)({auth:{type:"routine",auth:i}}).then((function(e){if(200!=e.data.status)return uni.setStorageSync("auth_token",e.data.result.key),uni.navigateTo({url:"/pages/users/login/index"});var i=e.data.result.expires_time-v.default.time();a.$store.commit("UPDATE_USERINFO",e.data.result.user),a.$store.commit("LOGIN",{token:e.data.result.token,time:i}),a.$store.commit("SETUID",e.data.result.user.uid),v.default.set(r.EXPIRES_TIME,e.data.result.expires_time,i),v.default.set(r.USER_INFO,e.data.result.user,i),e.data.result.user.isNew&&a.mp_is_new&&1==a.first_avatar_switch?(uni.hideLoading(),a.isShow=!0):t.$util.Tips({title:"授权成功",icon:"success"},{tab:3})})).catch((function(t){uni.hideLoading(),uni.showToast({title:t,icon:"none",duration:2e3})}))})).catch((function(t){uni.hideLoading()}))},onAgree:function(){this.protocol=!0},ChangeIsDefault:function(t){this.$set(this,"protocol",!this.protocol)},editSuccess:function(){this.isShow=!1},closeEdit:function(){this.isShow=!1,this.$util.Tips({title:"登录成功",icon:"success"},{tab:3})},onReject:function(){uni.switchTab({url:"/pages/index/index"})},back:function(){uni.navigateBack({delta:1})},home:function(){uni.switchTab({url:"/pages/index/index"})},maskClose:function(t){this.isUp=!1},bindPhoneClose:function(t){this.isPhoneBox=!1,t.isStatus&&this.$util.Tips({title:"登录成功",icon:"success"},{tab:3})},getPath:function(t){return-1!=t.indexOf("?")&&(t=t.split("?")[0]),t},getUserInfo:function(t,a){var e=this,i=this;(0,u.getUserInfo)().then((function(n){uni.hideLoading(),i.userInfo=n.data,i.$store.commit("SETUID",n.data.uid),i.$store.commit("UPDATE_USERINFO",n.data),t?e.isShow=!0:i.$util.Tips({title:"登录成功",icon:"success"},{tab:4,url:a||"/pages/user/index"})})).catch((function(t){uni.hideLoading(),uni.showToast({title:t.msg,icon:"none",duration:2e3})}))},privacy:function(t){uni.navigateTo({url:"/pages/users/privacy/index?type="+t})},wechatLogin:function(){if(!this.protocol)return this.$util.Tips({title:"请勾选用户协议与隐私政策"});l.default.oAuth()}}};a.default=m},f356:function(t,a,e){"use strict";e.r(a);var i=e("f71e"),n=e("770e");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("df35");var s=e("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"554cabae",null,!1,i["a"],void 0);a["default"]=c.exports},f71e:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"wrapper",style:t.viewColor},[e("v-uni-view",{staticClass:"bag"},[e("img",{attrs:{src:t.domain+"/static/images/logo_bgh.png",alt:"",srcset:""}})]),e("v-uni-view",{staticClass:"system-height",style:{height:t.statusBarHeight}}),e("v-uni-view",{staticClass:"merchant-msg"},[e("img",{attrs:{src:t.login_logo}}),e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.site_name))])],1),e("v-uni-view",{staticClass:"wechat_login"},[e("v-uni-view",{staticClass:"btn-wrapper"},[e("v-uni-button",{staticClass:"bg-theme btn1",attrs:{"hover-class":"none"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.wechatLogin.apply(void 0,arguments)}}},[t._v("微信登录")])],1)],1),t.canGetPrivacySetting?t._e():e("v-uni-view",{staticClass:"protocol"},[e("v-uni-checkbox-group",{on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.ChangeIsDefault.apply(void 0,arguments)}}},[e("v-uni-checkbox",{class:t.inAnimation?"trembling":"",attrs:{checked:!!t.protocol},on:{animationend:function(a){arguments[0]=a=t.$handleEvent(a),t.inAnimation=!1}}}),e("v-uni-text",{on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.ChangeIsDefault.apply(void 0,arguments)}}},[t._v("已阅读并同意")]),e("v-uni-text",{staticClass:"main-color",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.privacy(4)}}},[t._v("《用户协议》")]),t._v("与"),e("v-uni-text",{staticClass:"main-color",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.privacy(3)}}},[t._v("《隐私协议》")])],1)],1),[e("editUserModal",{attrs:{isShow:t.isShow},on:{closeEdit:function(a){arguments[0]=a=t.$handleEvent(a),t.closeEdit.apply(void 0,arguments)},editSuccess:function(a){arguments[0]=a=t.$handleEvent(a),t.editSuccess.apply(void 0,arguments)}}})]],2)},n=[]},ff19:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{style:t.viewColor},[e("v-uni-view",{staticClass:"mask maskPoup",attrs:{hidden:0==t.isShow},on:{touchmove:function(a){a.preventDefault(),arguments[0]=a=t.$handleEvent(a)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.rejectAgreement.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"product-window",class:{on:t.isShow}},[e("v-uni-view",{staticClass:"mp-data"},[e("v-uni-text",{staticClass:"mp-name"},[t._v(t._s(t.site_name)+"服务与隐私协议")])],1),e("v-uni-view",{staticClass:"trip-msg"},[e("v-uni-view",{staticClass:"trip"},[t._v("欢迎您使用"+t._s(t.site_name)+"！请仔细阅读以下内容，并作出适当的选择：")])],1),e("v-uni-view",{staticClass:"trip-title"},[t._v("隐私政策概要")]),e("v-uni-view",{staticClass:"trip-msg"},[e("v-uni-view",{staticClass:"trip"},[t._v("当您点击同意并开始时用产品服务时，即表示您已理解并同息该条款内容，该条款将对您产生法律约束力。如您拒绝，将无法继续下一步操作。")])],1),e("v-uni-view",{staticClass:"main-color",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.privacy(3)}}},[t._v("点击阅读"+t._s(t.agreementName))]),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-button",{staticClass:"save open",attrs:{type:"default",id:"agree-btn","open-type":"agreePrivacyAuthorization"},on:{agreeprivacyauthorization:function(a){arguments[0]=a=t.$handleEvent(a),t.handleAgree.apply(void 0,arguments)}}},[t._v("同意并继续")]),e("v-uni-button",{staticClass:"reject",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rejectAgreement.apply(void 0,arguments)}}},[t._v("取消")])],1)],1)],1)},n=[]}}]);