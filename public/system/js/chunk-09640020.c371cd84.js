(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09640020"],{"078b":function(t,n,r){"use strict";r.r(n);var o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("el-main",[r("el-container",[r("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"180px"}},[r("el-form-item",{attrs:{label:"虚拟成团启用：",required:""}},[r("el-radio-group",{model:{value:t.ruleForm.ficti_status,callback:function(n){t.$set(t.ruleForm,"ficti_status",n)},expression:"ruleForm.ficti_status"}},[r("el-radio",{attrs:{label:1}},[t._v("启用")]),t._v(" "),r("el-radio",{attrs:{label:0}},[t._v("关闭")])],1)],1),t._v(" "),1==t.ruleForm.ficti_status?r("el-form-item",{attrs:{label:"真实成团最小比例：",prop:"group_buying_rate"}},[r("span",{staticStyle:{color:"#606266"}},[r("el-input-number",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入排序序号",min:1,max:100},model:{value:t.ruleForm.group_buying_rate,callback:function(n){t.$set(t.ruleForm,"group_buying_rate",n)},expression:"ruleForm.group_buying_rate"}}),t._v(" %\n                ")],1)]):t._e(),t._v(" "),1==t.ruleForm.ficti_status?r("el-form-item",{attrs:{label:"虚拟成团补齐最大比例："}},[r("span",{staticStyle:{color:"#606266"}},[t._v(" "+t._s(100-Number(t.ruleForm.group_buying_rate))+"%")])]):t._e(),t._v(" "),r("el-form-item",{staticStyle:{"margin-top":"30px"}},[r("el-button",{staticClass:"submission",attrs:{loading:t.loading,type:"primary",size:"small"},on:{click:function(n){return t.handleSubmit("ruleForm")}}},[t._v("确认")])],1)],1)],1)],1)},e=[],u=(r("7f7f"),r("c5f6"),r("b7be")),c={name:"combinationSet",data:function(){return{loading:!1,ruleForm:{ficti_status:0,group_buying_rate:""},rules:{group_buying_rate:[{required:!0,message:"请输入真实成团最小比例",trigger:"blur"}]}}},mounted:function(){this.getCombinationData()},methods:{getCombinationData:function(){var t=this;Object(u["x"])().then((function(n){n.data&&n.data.ficti_status&&(n.data.ficti_status=Number(n.data.ficti_status)),t.ruleForm=n.data})).catch((function(n){t.$message.error(n.message)}))},handleSubmit:function(t){var n=this;this.$refs[t].validate((function(t){t?Object(u["F"])(n.ruleForm).then((function(t){n.$message.success(t.message)})).catch((function(t){n.$message.error(t.message)})):n.ruleForm.minRatio&&n.ruleForm.maxRatio||n.$message.warning("请填写完数据！")}))}}},i=c,a=r("2877"),s=Object(a["a"])(i,o,e,!1,null,"3641e5e9",null);n["default"]=s.exports},b7be:function(t,n,r){"use strict";r.d(n,"Fb",(function(){return e})),r.d(n,"Eb",(function(){return u})),r.d(n,"Ab",(function(){return c})),r.d(n,"zb",(function(){return i})),r.d(n,"yb",(function(){return a})),r.d(n,"Bb",(function(){return s})),r.d(n,"Cb",(function(){return f})),r.d(n,"Db",(function(){return d})),r.d(n,"N",(function(){return l})),r.d(n,"I",(function(){return p})),r.d(n,"J",(function(){return g})),r.d(n,"L",(function(){return b})),r.d(n,"K",(function(){return m})),r.d(n,"sb",(function(){return _})),r.d(n,"H",(function(){return y})),r.d(n,"o",(function(){return v})),r.d(n,"u",(function(){return h})),r.d(n,"m",(function(){return F})),r.d(n,"l",(function(){return k})),r.d(n,"n",(function(){return x})),r.d(n,"tb",(function(){return w})),r.d(n,"ub",(function(){return S})),r.d(n,"Pb",(function(){return $})),r.d(n,"r",(function(){return j})),r.d(n,"q",(function(){return C})),r.d(n,"v",(function(){return O})),r.d(n,"a",(function(){return q})),r.d(n,"Ob",(function(){return D})),r.d(n,"Lb",(function(){return J})),r.d(n,"Nb",(function(){return N})),r.d(n,"Kb",(function(){return z})),r.d(n,"Mb",(function(){return E})),r.d(n,"Hb",(function(){return K})),r.d(n,"Qb",(function(){return L})),r.d(n,"p",(function(){return P})),r.d(n,"t",(function(){return R})),r.d(n,"s",(function(){return A})),r.d(n,"F",(function(){return B})),r.d(n,"x",(function(){return H})),r.d(n,"A",(function(){return I})),r.d(n,"B",(function(){return M})),r.d(n,"z",(function(){return Q})),r.d(n,"C",(function(){return G})),r.d(n,"G",(function(){return T})),r.d(n,"E",(function(){return U})),r.d(n,"D",(function(){return V})),r.d(n,"w",(function(){return W})),r.d(n,"y",(function(){return X})),r.d(n,"M",(function(){return Y})),r.d(n,"eb",(function(){return Z})),r.d(n,"db",(function(){return tt})),r.d(n,"Jb",(function(){return nt})),r.d(n,"W",(function(){return rt})),r.d(n,"Sb",(function(){return ot})),r.d(n,"T",(function(){return et})),r.d(n,"R",(function(){return ut})),r.d(n,"S",(function(){return ct})),r.d(n,"Ib",(function(){return it})),r.d(n,"O",(function(){return at})),r.d(n,"f",(function(){return st})),r.d(n,"e",(function(){return ft})),r.d(n,"d",(function(){return dt})),r.d(n,"c",(function(){return lt})),r.d(n,"b",(function(){return pt})),r.d(n,"P",(function(){return gt})),r.d(n,"k",(function(){return bt})),r.d(n,"i",(function(){return mt})),r.d(n,"h",(function(){return _t})),r.d(n,"j",(function(){return yt})),r.d(n,"g",(function(){return vt})),r.d(n,"Z",(function(){return ht})),r.d(n,"X",(function(){return Ft})),r.d(n,"bb",(function(){return kt})),r.d(n,"Y",(function(){return xt})),r.d(n,"ab",(function(){return wt})),r.d(n,"Q",(function(){return St})),r.d(n,"qb",(function(){return $t})),r.d(n,"pb",(function(){return jt})),r.d(n,"nb",(function(){return Ct})),r.d(n,"rb",(function(){return Ot})),r.d(n,"V",(function(){return qt})),r.d(n,"mb",(function(){return Dt})),r.d(n,"ob",(function(){return Jt})),r.d(n,"lb",(function(){return Nt})),r.d(n,"hb",(function(){return zt})),r.d(n,"jb",(function(){return Et})),r.d(n,"ib",(function(){return Kt})),r.d(n,"cb",(function(){return Lt})),r.d(n,"U",(function(){return Pt})),r.d(n,"fb",(function(){return Rt})),r.d(n,"kb",(function(){return At})),r.d(n,"gb",(function(){return Bt}));var o=r("0c6d");function e(t){return o["a"].get("/store/coupon/platformLst",t)}function u(t){return o["a"].get("/store/coupon/update/".concat(t,"/form"))}function c(t){return o["a"].get("/store/coupon/show/".concat(t))}function i(t){return o["a"].delete("store/coupon/delete/".concat(t))}function a(t){return o["a"].get("/store/coupon/sys/clone/".concat(t,"/form"))}function s(t){return o["a"].get("store/coupon/sys/issue",t)}function f(t,n){return o["a"].get("store/coupon/show_lst/".concat(t),n)}function d(t){return o["a"].get("/store/coupon/send/lst",t)}function l(t){return o["a"].post("store/coupon/send",t)}function p(t){return o["a"].get("store/coupon/detail/".concat(t))}function g(t){return o["a"].get("store/coupon/lst",t)}function b(t,n){return o["a"].post("store/coupon/status/".concat(t),{status:n})}function m(){return o["a"].get("store/coupon/create/form")}function _(t){return o["a"].get("store/coupon/issue",t)}function y(t){return o["a"].delete("store/coupon/delete/".concat(t))}function v(t){return o["a"].get("broadcast/room/lst",t)}function h(t,n){return o["a"].post("broadcast/room/status/".concat(t),n)}function F(t){return o["a"].delete("broadcast/room/delete/".concat(t))}function k(t){return o["a"].get("broadcast/room/apply/form/".concat(t))}function x(t){return o["a"].get("broadcast/room/detail/".concat(t))}function w(t,n){return o["a"].post("broadcast/room/feedsPublic/".concat(t),{status:n})}function S(t,n){return o["a"].post("broadcast/room/comment/".concat(t),{status:n})}function $(t,n){return o["a"].post("broadcast/room/closeKf/".concat(t),{status:n})}function j(t){return o["a"].get("broadcast/goods/lst",t)}function C(t){return o["a"].get("broadcast/goods/detail/".concat(t))}function O(t,n){return o["a"].post("broadcast/goods/status/".concat(t),n)}function q(t){return o["a"].get("broadcast/goods/apply/form/".concat(t))}function D(){return o["a"].get("seckill/config/create/form")}function J(t){return o["a"].get("seckill/config/lst",t)}function N(t){return o["a"].get("seckill/config/update/".concat(t,"/form"))}function z(t){return o["a"].delete("seckill/config/delete/".concat(t))}function E(t,n){return o["a"].post("seckill/config/status/".concat(t),{status:n})}function K(t,n){return o["a"].get("seckill/product/detail/".concat(t),n)}function L(t,n){return o["a"].get("broadcast/room/goods/".concat(t),n)}function P(t){return o["a"].delete("broadcast/goods/delete/".concat(t))}function R(t,n){return o["a"].post("broadcast/room/sort/".concat(t),n)}function A(t,n){return o["a"].post("broadcast/goods/sort/".concat(t),n)}function B(t){return o["a"].post("config/others/group_buying",t)}function H(){return o["a"].get("config/others/group_buying")}function I(t){return o["a"].get("store/product/group/lst",t)}function M(t){return o["a"].get("store/product/group/get/".concat(t))}function Q(t){return o["a"].get("store/product/group/detail/".concat(t))}function G(t){return o["a"].post("store/product/group/status",t)}function T(t,n){return o["a"].post("store/product/group/is_show/".concat(t),{status:n})}function U(t){return o["a"].get("store/product/group/get/".concat(t))}function V(t,n){return o["a"].post("store/product/group/update/".concat(t),n)}function W(t){return o["a"].get("store/product/group/buying/lst",t)}function X(t,n){return o["a"].get("store/product/group/buying/detail/".concat(t),n)}function Y(t,n){return o["a"].get("store/coupon/product/".concat(t),n)}function Z(){return o["a"].get("user/integral/title")}function tt(t){return o["a"].get("user/integral/lst",t)}function nt(t){return o["a"].get("user/integral/excel",t)}function rt(){return o["a"].get("user/integral/config")}function ot(t){return o["a"].post("user/integral/config",t)}function et(t){return o["a"].get("discounts/lst",t)}function ut(t,n){return o["a"].post("discounts/status/".concat(t),{status:n})}function ct(t){return o["a"].get("discounts/detail/".concat(t))}function it(t){return o["a"].get("marketing/spu/lst",t)}function at(t){return o["a"].post("activity/atmosphere/create",t)}function st(t,n){return o["a"].post("activity/atmosphere/update/".concat(t),n)}function ft(t){return o["a"].get("activity/atmosphere/lst",t)}function dt(t){return o["a"].get("activity/atmosphere/detail/".concat(t))}function lt(t,n){return o["a"].post("activity/atmosphere/status/".concat(t),{status:n})}function pt(t){return o["a"].delete("activity/atmosphere/delete/".concat(t))}function gt(t){return o["a"].post("activity/border/create",t)}function bt(t,n){return o["a"].post("activity/border/update/".concat(t),n)}function mt(t){return o["a"].get("activity/border/lst",t)}function _t(t){return o["a"].get("activity/border/detail/".concat(t))}function yt(t,n){return o["a"].post("activity/border/status/".concat(t),{status:n})}function vt(t){return o["a"].delete("activity/border/delete/".concat(t))}function ht(){return o["a"].get("points/cate/lst")}function Ft(){return o["a"].get("points/cate/create/form")}function kt(t){return o["a"].get("points/cate/update/form/".concat(t))}function xt(t){return o["a"].delete("points/cate/delete/".concat(t))}function wt(t,n){return o["a"].post("points/cate/status/".concat(t),{status:n})}function St(t){return o["a"].post("points/product/create",t)}function $t(t,n){return o["a"].post("points/product/update/".concat(t),n)}function jt(t){return o["a"].get("points/product/lst",t)}function Ct(t){return o["a"].delete("points/product/delete/".concat(t))}function Ot(t,n){return o["a"].post("points/product/status/".concat(t),{status:n})}function qt(t,n){return o["a"].post("points/product/get_attr_value/".concat(t),n)}function Dt(){return o["a"].get("points/cate/select")}function Jt(t){return o["a"].get("points/product/detail/".concat(t))}function Nt(t){return o["a"].get("points/order/lst",t)}function zt(t){return o["a"].get("points/order/detail/".concat(t))}function Et(t){return o["a"].get("points/order/express/".concat(t))}function Kt(t){return o["a"].get("points/order/excel",t)}function Lt(t,n){return o["a"].post("points/order/delivery/".concat(t),n)}function Pt(t){return o["a"].get("store/express/options",t)}function Rt(t){return o["a"].get("points/order/mark/".concat(t,"/form"))}function At(t,n){return o["a"].get("points/order/status/".concat(t),n)}function Bt(t){return o["a"].delete("points/order/delete/".concat(t))}}}]);