(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acf884fc"],{"090f":function(t,e,n){"use strict";n("bec1")},"365a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divBox"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"container"},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{staticClass:"mr10",staticStyle:{width:"100%"},attrs:{label:"时间选择："}},[n("el-radio-group",{staticClass:"mr20",attrs:{type:"button",size:"small"},on:{change:function(e){return t.selectChange(t.tableFrom.date)}},model:{value:t.tableFrom.date,callback:function(e){t.$set(t.tableFrom,"date",e)},expression:"tableFrom.date"}},t._l(t.fromList.fromTxt,(function(e,a){return n("el-radio-button",{key:a,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),t._v(" "),n("el-date-picker",{staticStyle:{width:"260px"},attrs:{"value-format":"yyyy/MM/dd",format:"yyyy/MM/dd",size:"small",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),t._v(" "),n("el-form-item",{staticClass:"mr10",attrs:{label:"用户名称："}},[n("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入用户名称",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.username,callback:function(e){t.$set(t.tableFrom,"username",e)},expression:"tableFrom.username"}},[n("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),n("el-form-item",{staticClass:"mr10",attrs:{label:"关键字搜索："}},[n("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入评论内容",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(1)}},model:{value:t.tableFrom.keyword,callback:function(e){t.$set(t.tableFrom,"keyword",e)},expression:"tableFrom.keyword"}},[n("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1)],1)],1)]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini"}},[n("el-table-column",{attrs:{prop:"reply_id",label:"ID","min-width":"50"}}),t._v(" "),n("el-table-column",{attrs:{prop:"author.nickname",label:"用户名/ID","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("span",[t._v(t._s(a.author.nickname+" / "+a.author.uid))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"community.title",label:"文章标题","min-width":"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"content",label:"评论内容","min-width":"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"count_reply",label:"评论条数","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"count_start",label:"评论点赞数","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{label:"评论时间","min-width":"150",prop:"create_time"}}),t._v(" "),n("el-table-column",{attrs:{label:"审核状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("communityStatus")(e.row.status)))]),t._v(" "),-1==e.row.status?n("span",{staticStyle:{display:"block","font-size":"12px",color:"red"}},[t._v("原因 "+t._s(e.row.refusal))]):t._e()]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作","min-width":"150",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!==e.row.hasReply?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.getAllReply(e.row.reply_id)}}},[t._v("查看回复")]):t._e(),t._v(" "),0==e.row.status?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.handleReview(e.row.reply_id)}}},[t._v("审核")]):t._e(),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.handleDelete(e.row.reply_id,e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),t.dialogVisible?n("el-dialog",{attrs:{title:"所有评论",visible:t.dialogVisible,width:"800px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.replyLoading,expression:"replyLoading"}],staticStyle:{width:"100%"},attrs:{data:t.replyData.data,size:"mini"}},[n("el-table-column",{attrs:{prop:"reply_id",label:"ID","min-width":"50"}}),t._v(" "),n("el-table-column",{attrs:{prop:"community.title",label:"文章标题","min-width":"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"content",label:"评论内容","min-width":"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"count_reply",label:"评论条数","min-width":"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"count_start",label:"评论点赞数","min-width":"150"}}),t._v(" "),n("el-table-column",{attrs:{label:"评论时间","min-width":"150",prop:"create_time"}})],1),t._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-sizes":[10,20],"page-size":t.replyForm.limit,"current-page":t.replyForm.page,layout:"total, sizes, prev, pager, next, jumper",total:t.replyData.total},on:{"size-change":t.replySizeChange,"current-change":t.replyPageChange}})],1)],1):t._e()],1)},i=[],l=n("7998"),o=n("e572"),r={name:"communityComment",data:function(){return{fromList:o["a"],tableData:{data:[],total:0},replyData:{data:[],total:0},listLoading:!0,replyLoading:!0,tableFrom:{page:1,limit:20,community_id:this.$route.query.community_id?this.$route.query.community_id:"",date:"",username:"",keyword:""},replyForm:{page:1,limit:10,pid:""},timeVal:[],props:{},tabClickIndex:"",dialogVisible:!1,reply_id:""}},mounted:function(){this.getList(1)},methods:{selectChange:function(t){this.tableFrom.date=t,this.timeVal=[],this.tableFrom.page=1,this.getList(1)},onchangeTime:function(t){this.timeVal=t,this.tableFrom.date=this.timeVal?this.timeVal.join("-"):"",this.tableFrom.page=1,this.getList(1)},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(l["m"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList("")},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList("")},handleDelete:function(t,e){var n=this;this.$modalSure("删除该评论").then((function(){Object(l["l"])(t).then((function(t){var a=t.message;n.$message.success(a),n.tableData.data.splice(e,1)})).catch((function(t){var e=t.message;n.$message.error(e)}))}))},handleReview:function(t){var e=this;this.$modalForm(Object(l["n"])(t)).then((function(){return e.getList("")}))},replyPageChange:function(t){this.replyForm.page=t,this.getReplyList()},replySizeChange:function(t){this.replyForm.limit=t,this.getReplyList()},getAllReply:function(t){this.dialogVisible=!0,this.replyForm.pid=t,this.getReplyList()},getReplyList:function(){var t=this;this.replyLoading=!0,Object(l["m"])(this.replyForm).then((function(e){t.replyData.data=e.data.list,t.replyData.total=e.data.count,t.replyLoading=!1})).catch((function(e){t.replyLoading=!1,t.$message.error(e.message)}))},handleClose:function(){this.dialogVisible=!1}}},s=r,c=(n("090f"),n("2877")),u=Object(c["a"])(s,a,i,!1,null,"c0529950",null);e["default"]=u.exports},7998:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return l})),n.d(e,"g",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"f",(function(){return s})),n.d(e,"t",(function(){return c})),n.d(e,"q",(function(){return u})),n.d(e,"w",(function(){return m})),n.d(e,"r",(function(){return d})),n.d(e,"v",(function(){return p})),n.d(e,"s",(function(){return f})),n.d(e,"j",(function(){return y})),n.d(e,"i",(function(){return g})),n.d(e,"a",(function(){return h})),n.d(e,"x",(function(){return b})),n.d(e,"o",(function(){return v})),n.d(e,"h",(function(){return _})),n.d(e,"k",(function(){return w})),n.d(e,"b",(function(){return x})),n.d(e,"u",(function(){return k})),n.d(e,"m",(function(){return C})),n.d(e,"l",(function(){return F})),n.d(e,"n",(function(){return L})),n.d(e,"p",(function(){return z}));var a=n("0c6d");function i(t){return a["a"].get("community/category/lst",t)}function l(){return a["a"].get("community/category/create/form")}function o(t){return a["a"].get("community/category/update/".concat(t,"/form"))}function r(t){return a["a"].delete("community/category/delete/".concat(t))}function s(t,e){return a["a"].post("community/category/status/".concat(t),{status:e})}function c(t){return a["a"].get("community/topic/lst",t)}function u(){return a["a"].get("community/topic/create/form")}function m(t){return a["a"].get("community/topic/update/".concat(t,"/form"))}function d(t){return a["a"].delete("community/topic/delete/".concat(t))}function p(t,e){return a["a"].post("community/topic/status/".concat(t),{status:e})}function f(t,e){return a["a"].post("community/topic/hot/".concat(t),{status:e})}function y(t){return a["a"].get("community/lst",t)}function g(t){return a["a"].get("community/detail/".concat(t))}function h(t,e){return a["a"].post("community/status/".concat(t),e)}function b(t){return a["a"].get("community/update/".concat(t,"/form"))}function v(t,e){return a["a"].post("community/show/".concat(t),{status:e})}function _(t){return a["a"].delete("community/delete/".concat(t))}function w(t){return a["a"].get("community/status/".concat(t,"/form"))}function x(){return a["a"].get("community/category/option")}function k(){return a["a"].get("community/topic/option")}function C(t){return a["a"].get("community/reply/lst",t)}function F(t){return a["a"].delete("community/reply/delete/".concat(t))}function L(t){return a["a"].get("community/reply/status/".concat(t,"/form"))}function z(){return a["a"].get("community/title")}},bec1:function(t,e,n){},e572:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return l}));var a=[{label:"开启",value:1},{label:"关闭",value:0}],i={title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},l={title:"状态",custom:!0,fromTxt:[{text:"全部",val:""},{text:"待审核",val:"0"},{text:"审核已通过",val:"1"},{text:"审核未通过",val:"2"}]}}}]);