(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{489:function(t,e,r){t.exports=r.p+"img/refund.0933e35.png"},490:function(t,e,r){var content=r(605);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(3).default)("968f5574",content,!0,{sourceMap:!1})},604:function(t,e,r){"use strict";var o=r(490);r.n(o).a},605:function(t,e,r){(e=r(2)(!1)).push([t.i,".header[data-v-02f8970a]{height:60px;line-height:60px;color:#999}.header .home[data-v-02f8970a]{color:#282828}.refund[data-v-02f8970a]{padding:40px 20px 46px;background:#fff}.refund .el-icon-plus[data-v-02f8970a]{margin-top:20px}.refund .table[data-v-02f8970a]{width:100%;border:1px solid #efefef;border-collapse:collapse}.refund .table thead[data-v-02f8970a]{background:#efefef}.refund .table thead td[data-v-02f8970a]{height:40px;font-size:14px;text-align:center;color:#282828}.refund .table tbody .td[data-v-02f8970a]{width:219px;border:1px solid #efefef;font-size:14px;text-align:center;color:#282828}.refund .table tbody .td[data-v-02f8970a]:first-child{width:auto;padding:20px 50px;text-align:left}.refund .table tbody .td:first-child span[data-v-02f8970a]{margin-left:10px;font-size:12px;color:#b1b1b1}.refund .table img[data-v-02f8970a]{float:left;width:70px;height:70px}.refund .table img+div[data-v-02f8970a]{margin-left:90px}.refund .table .name[data-v-02f8970a]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;margin-bottom:13px;overflow:hidden}.refund .el-form[data-v-02f8970a]{margin-top:20px}.refund .el-form .cont[data-v-02f8970a]{border:1px solid #efefef;padding:25px 20px}.refund .el-form .item-price[data-v-02f8970a] input{padding-right:0}.refund .el-form .item-desc[data-v-02f8970a]{color:#b5b5b5}.refund .el-form .item-border[data-v-02f8970a]{padding-bottom:25px;border-bottom:1px dashed #efefef}.refund .el-form>.el-form-item[data-v-02f8970a]{margin-top:25px;margin-bottom:0;text-align:right}.refund .el-form .el-textarea[data-v-02f8970a]{width:820px}.refund .el-form[data-v-02f8970a] .el-form-item__label{color:#282828}.refund .el-form[data-v-02f8970a] .el-textarea__inner{border:none;background:#f7f7f7}.refund .el-form[data-v-02f8970a] .el-upload--picture-card{width:70px;height:70px;border-style:solid;line-height:68px}.refund .el-form[data-v-02f8970a] .el-upload-list--picture-card .el-upload-list__item{width:70px;height:70px}.refund-box[data-v-02f8970a]{display:flex;flex-direction:column;align-items:center}.refund-box .title[data-v-02f8970a]{color:#e93323;font-size:20px;margin-top:20px}.refund-box span[data-v-02f8970a]{margin:10px 0 40px;color:#939393;font-size:14px}.refund-box button[data-v-02f8970a]{width:150px}.img-box-wrapper[data-v-02f8970a]{display:flex;flex-wrap:wrap}.img-box-wrapper .img-item[data-v-02f8970a]{position:relative;width:70px;height:70px;margin-right:20px;margin-bottom:12px;border:1px solid #c0ccda;border-radius:6px}.img-box-wrapper .img-item img[data-v-02f8970a]{width:100%;height:100%;border-radius:6px}.img-box-wrapper .img-item .icon[data-v-02f8970a]{position:absolute;right:-10px;top:-8px;font-size:20px;cursor:pointer;color:#e93323}",""]),t.exports=e},724:function(t,e,r){"use strict";r.r(e);r(39),r(231),r(5);var o=r(111),n=r.n(o),d=(r(62),r(22),r(4)),c={auth:"guest",data:function(){return{form:{region:"",desc:"",num:1},upLoadUrl:"/api/upload/image/file",pics:[],refundArray:["收货地址填错了","与描述不符","信息填错了，重新拍","收到商品损坏了","未按预定时间发货","其它原因"],orderData:{},myHeaders:{},isDialog:!1,id:"",ids:"",type:1,numArray:[],rerundPrice:"",refund_price:"",postage_price:"",maxRefundPrice:"",status:"",order_status:!1,refund_type:"",unitPostage:0}},computed:{cash:function(){return parseFloat(this.orderData.total_refund_price)+parseFloat(this.orderData.postage_price)}},asyncData:function(t){return Object(d.a)(regeneratorRuntime.mark((function e(){var r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,o=t.query,data=[],e.prev=2,e.next=5,r.$axios.get("/api/common/refund_message");case 5:data=e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:return console.log(data),e.abrupt("return",{id:o.orderId,ids:o.ids,type:o.type,refund_type:o.refund_type,refundArray:data.data,unitPrice:""});case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))()},fetch:function(t){var e=t.store;e.commit("isBanner",!1),e.commit("isHeader",!0),e.commit("isFooter",!0)},head:function(){return{title:"申请退款-"+this.$store.state.titleCon}},beforeMount:function(){var t=this.$cookies.get("auth.strategy");this.myHeaders={Authorization:this.$cookies.get("auth._token.".concat(t))},this.getOrderInfo()},methods:{getOrderInfo:function(){var t=this,e=this;e.$axios.get("/api/refund/product/"+e.id,{params:{ids:e.ids,type:e.type}}).then((function(r){if(e.orderData=r.data,e.refund_price=r.data.total_refund_price,e.postage_price=r.data.postage_price,e.maxRefundPrice=r.data.postage_price+Number(r.data.total_refund_price),e.rerundPrice=e.maxRefundPrice.toFixed(2),e.status=r.data.status,e.order_status=r.data.activity_type,e.unitPostage=e.postage_price>0?e.comsys.Div(e.postage_price,r.data.product[0].refund_num).toFixed(2):0,1==e.type){e.unitPrice=e.comsys.Div(r.data.total_refund_price,r.data.product[0].refund_num);for(var i=1;i<=r.data.product[0].refund_num;i++)e.numArray.unshift(i);e.form.num=e.numArray.length,e.refund_price=t.comsys.Mul(e.unitPrice,e.numArray[0])}})).catch((function(t){return n.a.error(t)}))},changeNum:function(t){this.refund_price=this.comsys.Mul(this.unitPrice,t),this.maxRefundPrice=this.refund_price+this.postage_price,this.maxRefundPrice=this.refund_price+(this.postage_price>0?t===this.orderData.product[0].refund_num?this.postage_price:this.comsys.Mul(t,this.unitPostage):0),this.rerundPrice=this.maxRefundPrice.toFixed(2)},subBtn:function(){return this.isDialog=!1,this.$router.replace({path:"/user/refund_list",query:{type:2}})},onSubmit:function(){var t=this;if(""===this.form.region)return n.a.error("请选择退款原因");this.$axios.post("/api/refund/apply/"+this.id,{type:this.type,refund_type:this.refund_type,num:this.form.num,ids:this.ids,refund_message:this.form.region||"",mark:this.form.desc,refund_price:this.rerundPrice}).then((function(e){t.isDialog=!0})).catch((function(t){return n.a.error(t)}))}}},f=(r(604),r(6)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"header wrapper_1200"},[o("span",{staticClass:"home"},[o("nuxt-link",{staticClass:"home",attrs:{to:"/"}},[t._v("首页  ")]),t._v(" > 个人中心 > 我的订单 >")],1),t._v("申请退款\n  ")]),t._v(" "),o("div",{staticClass:"refund wrapper_1200"},[o("table",{staticClass:"table"},[t._m(0),t._v(" "),o("tbody",t._l(t.orderData.product,(function(e,r){return o("tr",{key:r},[o("td",{staticClass:"td"},[o("table",{attrs:{border:"0"}},[o("tr",[o("td",[o("img",{attrs:{src:e.cart_info.productAttr.image||e.cart_info.product.image}}),t._v(" "),o("div",[o("div",{staticClass:"name"},[t._v("\n                      "+t._s(e.cart_info.product.store_name)),e.cart_info.productAttr?[t._v("\n                        "+t._s(e.cart_info.productAttr.sku))]:t._e()],2),t._v(" "),e.cart_info.productAttr?o("div",[t._v("\n                      ￥"+t._s(e.cart_info.productAttr.price)),o("span",[t._v("x"+t._s(e.refund_num))])]):t._e()])])])])]),t._v(" "),o("td",{staticClass:"td"},[t._v(t._s(e.refund_num))]),t._v(" "),e.cart_info.productAttr?o("td",{staticClass:"td"},[t._v("¥"+t._s(e.cart_info.productAttr.price*e.refund_num))]):t._e()])})),0)]),t._v(" "),o("client-only",[o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"110px"}},[o("div",{staticClass:"cont"},[1==t.type?o("el-form-item",{attrs:{label:"退款件数"}},[o("el-select",{attrs:{placeholder:"请选择退款件数"},on:{change:t.changeNum},model:{value:t.form.num,callback:function(e){t.$set(t.form,"num",e)},expression:"form.num"}},t._l(t.numArray,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1),t._v(" "),o("span",{staticClass:"item-desc"},[t._v("您最多可提交数量为"+t._s(t.numArray.length)+"件")])],1):t._e(),t._v(" "),o("el-form-item",{attrs:{label:0==t.status?"退款金(含运费)":"退款金(不含运费)"}},[o("el-input-number",{staticStyle:{width:"228px"},attrs:{precision:2,min:0,max:t.cash,"controls-position":"right"},model:{value:t.rerundPrice,callback:function(e){t.rerundPrice=e},expression:"rerundPrice"}}),t._v(" "),o("span",{staticClass:"item-desc"},[t._v("您最多可退款 ¥"+t._s(parseFloat(t.orderData.total_refund_price)+parseFloat(t.orderData.postage_price)))])],1),t._v(" "),o("el-form-item",{staticClass:"item-border",attrs:{label:"退款原因"}},[o("el-select",{attrs:{placeholder:"请选择退款原因"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},t._l(t.refundArray,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"备注说明"}},[o("el-input",{attrs:{type:"textarea",placeholder:"填写备注信息，100字以内",autosize:{minRows:4},maxlength:"100"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("申请退款")])],1)],1)],1)],1),t._v(" "),o("client-only",[o("el-dialog",{attrs:{modal:!0,visible:t.isDialog,width:"370px","show-close":!1},on:{"update:visible":function(e){t.isDialog=e}}},[o("div",{staticClass:"refund-box"},[o("img",{attrs:{src:r(489),alt:""}}),t._v(" "),o("p",{staticClass:"title"},[t._v("退款申请提交成功")]),t._v(" "),o("span",[t._v("我们会继续为您提供更优质的商品及服务")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.subBtn}},[t._v("确认")])],1)])],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("td",[this._v("商品信息")]),this._v(" "),e("td",[this._v("退货件数")]),this._v(" "),e("td",[this._v("退款金额")])])])}],!1,null,"02f8970a",null);e.default=component.exports}}]);