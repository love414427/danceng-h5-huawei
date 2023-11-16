(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-578f005f"],{"111b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-tabs",{on:{"tab-click":function(t){return e.getList(1)}},model:{value:e.user_type,callback:function(t){e.user_type=t},expression:"user_type"}},[a("el-tab-pane",{attrs:{label:"全部用户",name:""}}),e._v(" "),a("el-tab-pane",{attrs:{label:"微信用户",name:"wechat"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"小程序用户",name:"routine"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"H5用户",name:"h5"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"APP用户",name:"app"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"PC用户",name:"pc"}})],1),e._v(" "),a("div",{staticClass:"container"},[a("el-form",{attrs:{size:"small","label-width":"100px",inline:!0}},[a("el-form-item",{staticStyle:{display:"block"},attrs:{label:"搜索时间："}},[a("el-radio-group",{staticClass:"mr20",attrs:{type:"button",size:"small"},on:{change:function(t){return e.selectChange(e.userFrom.date)}},model:{value:e.userFrom.date,callback:function(t){e.$set(e.userFrom,"date",t)},expression:"userFrom.date"}},e._l(e.fromList.fromTxt,(function(t,s){return a("el-radio-button",{key:s,attrs:{label:t.val}},[e._v(e._s(t.text))])})),1),e._v(" "),a("el-date-picker",{staticStyle:{width:"250px"},attrs:{"value-format":"yyyy/MM/dd",format:"yyyy/MM/dd",size:"small",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{change:e.onchangeTime},model:{value:e.timeVal,callback:function(t){e.timeVal=t},expression:"timeVal"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"搜索词："}},[a("el-input",{attrs:{placeholder:"请输入搜索词",clearable:""},model:{value:e.userFrom.keyword,callback:function(t){e.$set(e.userFrom,"keyword",t)},expression:"userFrom.keyword"}},[a("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(t){return e.getList(1)}},slot:"append"})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"用户昵称："}},[a("el-input",{attrs:{placeholder:"请输入昵称",clearable:""},model:{value:e.userFrom.nickname,callback:function(t){e.$set(e.userFrom,"nickname",t)},expression:"userFrom.nickname"}},[a("el-button",{staticClass:"el-button-solt",attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(t){return e.getList(1)}},slot:"append"})],1)],1)],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData.data,size:"small"}},[a("el-table-column",{attrs:{prop:"uid",label:"用户ID","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(0!=t.row.uid?t.row.uid:"未知"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"头像","min-width":"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.user?t.row.user.avatar:e.moren,"preview-src-list":[t.row.user&&t.row.user.avatar||e.moren]}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"昵称","min-width":"90"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("div",{staticClass:"acea-row"},[a("div",[e._v(e._s(s.user&&s.user.nickname?s.user.nickname:"未知"))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户类型","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[s.user?a("span",[e._v(e._s("wechat"==s.user.user_type?"公众号":"routine"==s.user.user_type?"小程序":s.user.user_type))]):a("span",[e._v("未知")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"搜索词",prop:"content","min-width":"120"}}),e._v(" "),a("el-table-column",{attrs:{label:"搜索时间",prop:"create_time","min-width":"120"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":e.userFrom.limit,"current-page":e.userFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:e.tableData.total},on:{"size-change":e.handleSizeChange,"current-change":e.pageChange}})],1)],1)],1)},l=[],r=a("c24f"),i={name:"UserList",components:{},data:function(){return{moren:a("cdfe"),fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},timeVal:[],maxCols:3,isShowSend:!0,visible:!1,user_type:"",tableData:{data:[],total:0},listLoading:!0,row:"",userFrom:{date:"",nickname:"",keyword:"",page:1,limit:20},grid:{xl:8,lg:12,md:12,sm:24,xs:24},grid2:{xl:18,lg:16,md:12,sm:24,xs:24},grid3:{xl:8,lg:12,md:12,sm:24,xs:24}}},mounted:function(){this.getList("")},methods:{selectChange:function(e){this.timeVal=[],this.userFrom.page=1,this.userFrom.date=e,this.getList("")},onchangeTime:function(e){this.timeVal=e,this.userFrom.page=1,this.userFrom.date=e?this.timeVal.join("-"):"",this.getList("")},getList:function(e){var t=this;this.listLoading=!0,this.userFrom.page=e||this.userFrom.page,this.userFrom.user_type=this.user_type,"0"===this.userFrom.user_type&&(this.userFrom.user_type=""),Object(r["z"])(this.userFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},pageChange:function(e){this.userFrom.page=e,this.getList("")},handleSizeChange:function(e){this.userFrom.limit=e,this.getList("")},handleClick:function(){this.getList("")}}},n=i,o=(a("917b"),a("2877")),u=Object(o["a"])(n,s,l,!1,null,"3d699cc5",null);t["default"]=u.exports},"917b":function(e,t,a){"use strict";a("b76f")},b76f:function(e,t,a){},cdfe:function(e,t,a){e.exports=a.p+"mer/img/f.5aa43cd3.png"}}]);