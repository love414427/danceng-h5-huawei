(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_grade/index"],{"2b2c":function(e,t,n){"use strict";n.r(t);var o=n("f019"),r=n("da16");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("bba5");var a=n("f0c5"),c=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,"0099e0eb",null,!1,o["a"],void 0);t["default"]=c.exports},ada9:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("6859"),r=(n("4d59"),n("736f")),i=n("26cb"),a=n("3255"),c=n("ddb3"),u={components:{recommend:function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("1857"))}.bind(null,n)).catch(n.oe)},"jyf-parser":function(){Promise.all([n.e("common/vendor"),n.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(n("3192"))}.bind(null,n)).catch(n.oe)}},data:function(){return{loading:!1,loadend:!1,loadTitle:"加载更多",userInfo:{},protocol:"",showProtocol:!1,tagStyle:{img:"width:100%;display:block;",video:"width:100%;"},gradeList:[],hostProduct:[],hotScroll:!1,hotPage:1,hotLimit:10,isShowbox:!1,curLevel:{},next_level:{},growthValue:"",brokerage_bg:"",member_value:"",curPercent:"",valueList:{},upgradeInfo:{}}},computed:(0,a.configMap)({hide_mer_status:1,recommend_switch:0,svip_switch_status:0},(0,i.mapGetters)(["isLogin"])),onLoad:function(){this.isLogin?(this.getInstructions(),this.getUserInfo(),this.getHostProduct(),this.getMemberInfo(),this.upgradeRemind()):(0,c.toLogin)()},methods:{getUserInfo:function(){var e=this;(0,o.getUserInfo)().then((function(t){e.userInfo=t.data}))},shareIntegral:function(){e.setStorageSync("isIntegral",!0),e.switchTab({url:"/pages/index/index"})},getHostProduct:function(){var e=this;(0,r.getProductHot)(1,10).then((function(t){e.hostProduct=t.data.list}))},upgradeRemind:function(){var e=this;(0,o.brokerageNotice)({type:1}).then((function(t){e.isShowbox=!0,e.upgradeInfo=t.data.level})).catch((function(t){e.isShowbox=!1}))},getInstructions:function(){var e=this;(0,o.getInstructions)("sys_member").then((function(t){200==t.status&&(e.protocol=t.data.sys_member)}))},getMemberInfo:function(){var t=this;(0,o.memberInfo)().then((function(e){var n=e.data,o=n.next_level&&n.next_level.brokerage_rule||null;t.curLevel=n.member,t.gradeList=n.interests,t.next_level=n.next_level?n.next_level:null,t.growthValue=n.today,t.brokerage_bg=o&&o.image||"",t.member_value=n.member_value,t.curPercent=o&&0!=o.value?(n.member_value/o.value*100).toFixed(2):100,t.valueList=n.config})).catch((function(n){t.$util.Tips({title:n}),setTimeout((function(){e.switchTab({url:"/pages/user/index"})}),1e3)}))},close:function(){this.isShowbox=!1}},onPageScroll:function(){e.$emit("scroll")}};t.default=u}).call(this,n("543d")["default"])},bba5:function(e,t,n){"use strict";var o=n("e010"),r=n.n(o);r.a},da16:function(e,t,n){"use strict";n.r(t);var o=n("ada9"),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},e010:function(e,t,n){},f019:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={jyfParser:function(){return Promise.all([n.e("common/vendor"),n.e("components/jyf-parser/jyf-parser")]).then(n.bind(null,"3192"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.gradeList.length);e._isMounted||(e.e0=function(t){e.showProtocol=!0},e.e1=function(t){e.showProtocol=!1}),e.$mp.data=Object.assign({},{$root:{g0:n}})},i=[]},f084:function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("4c7d");o(n("66fd"));var r=o(n("2b2c"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["f084","common/runtime","common/vendor"]]]);