(window.webpackJsonp=window.webpackJsonp||[]).push([[24,28],{673:function(t,e,o){var content=o(708);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("45fb4ff3",content,!0,{sourceMap:!1})},684:function(t,e,o){"use strict";o.r(e),e.default={name:"DefaultColumnDetail",props:{data:{type:Object,default:{}},loading:{type:Boolean,default:!1},listQuery:{type:Object,default:{}}},data:function(){return{}},watch:{},mounted:function(){},methods:{getList:function(){this.$emit("getList")}}}},707:function(t,e,o){"use strict";o(673)},708:function(t,e,o){var n=o(11)(!1);n.push([t.i,".breadcrumb[data-v-153e5119]{margin-top:20px;margin-bottom:20px}.box[data-v-153e5119]{display:flex;align-items:flex-start;margin-bottom:30px;min-height:600px}.box .left[data-v-153e5119]{width:200px;background-color:#fff;margin-right:20px;padding:30px 10px 30px 30px}.box .left .dt[data-v-153e5119]{font-size:16px;font-weight:400;line-height:52px;color:#212121}.box .left .dd[data-v-153e5119]{font-size:14px;color:#757575;display:block;line-height:35px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.box .left .dd.on[data-v-153e5119],.box .left .dd[data-v-153e5119]:hover{color:#fa524c}.box .right[data-v-153e5119]{flex:1;background-color:#fff;padding:40px}.box .right .title[data-v-153e5119]{font-weight:700;font-size:22px;line-height:25px;padding-bottom:30px;padding-top:10px}.box .right .content[data-v-153e5119]{font-size:16px;line-height:20px}.box .right .time[data-v-153e5119]{font-size:16px;padding-top:20px;text-align:right;color:#757575}",""]),t.exports=n},788:function(t,e,o){"use strict";o.r(e);var n=o(684).default,l=(o(707),o(6)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-breadcrumb",{staticClass:"container breadcrumb",attrs:{separator:"/"}},[o("el-breadcrumb-item",[o("NuxtLink",{attrs:{to:{path:"/"}}},[t._v("\n        首页\n      ")])],1),t._v(" "),t._l(t.data.breadcrumb,(function(e,n){return t.data.breadcrumb.length>0?o("el-breadcrumb-item",{key:n},[o("NuxtLink",{attrs:{to:{path:"/article/list/"+e.id}}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1):t._e()}))],2),t._v(" "),o("div",{staticClass:"box container"},[o("div",{staticClass:"right"},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"list-box"},[o("div",{staticClass:"title"},[t._v(t._s(t.data.column.name))]),t._v(" "),o("div",{staticClass:"content",domProps:{innerHTML:t._s(t.data.column.column_property.details)}}),t._v(" "),o("div",{staticClass:"time"},[t._v(t._s(t.data.column.created_at.split(" ")[0]))])])])])],1)}),[],!1,null,"153e5119",null);e.default=component.exports}}]);