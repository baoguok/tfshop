(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e500"],{"6g3Z":function(t,e,n){"use strict";n.r(e);var a=n("M3qR"),i=n.n(a);for(var l in a)"default"!==l&&function(t){n.d(e,t,function(){return a[t]})}(l);e.default=i.a},D052:function(t,e,n){},JG9a:function(t,e,n){"use strict";n.r(e);var a=n("UJad"),i=n.n(a);for(var l in a)"default"!==l&&function(t){n.d(e,t,function(){return a[t]})}(l);e.default=i.a},Lcw6:function(t,e,n){"use strict";var a=n("qULk");n.n(a).a},M3qR:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Y5bG");e.default={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&(0,a.scrollTo)(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&(0,a.scrollTo)(0,800)}}}},Mz3J:function(t,e,n){"use strict";n.r(e);var a=n("cJ0Q"),i=n("6g3Z");for(var l in i)"default"!==l&&function(t){n.d(e,t,function(){return i[t]})}(l);n("Lcw6");var r=n("KHd+"),o=Object(r.a)(i.default,a.a,a.b,!1,null,"331ed7d4",null);o.options.__file="index.vue",e.default=o.exports},UJad:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("tN7b"),i=function(t){return t&&t.__esModule?t:{default:t}}(n("Mz3J")),l=n("lEg2");e.default={name:"IndentList",components:{Pagination:i.default},data:function(){return{dialogVisible:!1,ruleForm:[],checkAll:!1,tableKey:0,list:null,total:0,imgProgressPercent:0,loading:!1,listLoading:!1,imgProgress:!1,dialogStatus:"",dialogFormVisible:!1,listQuery:{page:1,limit:10,sort:"-id",activeIndex:"0",type:0},temp:{},verifyPlugin:{groupPurchase:!1,seckill:!1}}},created:function(){this.getList(),this.getVerifyPlugin()},methods:{getVerifyPlugin:function(){var t=this;(0,l.verifyPlugin)(["seckill","groupPurchase"]).then(function(e){t.verifyPlugin=e.data})},getList:function(){var t=this;this.listLoading=!0,(0,a.getList)(this.listQuery).then(function(e){t.list=e.data.data,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},sortChange:function(t){var e=t.prop,n=t.order;this.listQuery.sort="ascending"===n?"+"+e:"-"+e,this.handleFilter()},handleSelect:function(t,e){this.listQuery.activeIndex=t,this.handleFilter()},resetTemp:function(){this.temp={state:0,sort:"5",img:""}}}}},Y5bG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.scrollTo=function(t,e,n){var i=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,l=t-i,r=0;e=void 0===e?500:e,function t(){r+=20;var o=Math.easeInOutQuad(r,i,l,e);!function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(o),r<e?a(t):n&&"function"==typeof n&&n()}()},Math.easeInOutQuad=function(t,e,n,a){return(t/=a/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e};var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},YHAO:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.listQuery.activeIndex,mode:"horizontal",clearable:""},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"0"}},[t._v("全部订单")]),t._v(" "),n("el-menu-item",{attrs:{index:"1"}},[t._v("待付款")]),t._v(" "),t.verifyPlugin.groupPurchase?n("el-menu-item",{attrs:{index:"12"}},[t._v("待成团")]):t._e(),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[t._v("待发货")]),t._v(" "),n("el-menu-item",{attrs:{index:"3"}},[t._v("待收货")]),t._v(" "),n("el-menu-item",{attrs:{index:"5"}},[t._v("已完成")]),t._v(" "),n("el-menu-item",{attrs:{index:"6"}},[t._v("已取消")]),t._v(" "),n("el-menu-item",{attrs:{index:"7"}},[t._v("已退款")])],1),t._v(" "),n("br"),t._v(" "),n("el-radio-group",{staticStyle:{"margin-bottom":"10px"},attrs:{size:"small"},on:{change:t.handleFilter},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},[n("el-radio-button",{attrs:{label:0}},[t._v("普通订单")]),t._v(" "),t.verifyPlugin.seckill?n("el-radio-button",{attrs:{label:1}},[t._v("秒杀订单")]):t._e(),t._v(" "),t.verifyPlugin.groupPurchase?n("el-radio-button",{attrs:{label:2}},[t._v("拼团订单")]):t._e()],1),t._v(" "),n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.listQuery}},[n("el-form-item",{attrs:{label:"订单信息"}},[n("el-input",{attrs:{placeholder:"订单号、收货人等",clearable:""},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.handleFilter}},[t._v("搜索")])],1)],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-table",{ref:"orderGoodsTable",staticStyle:{width:"100%"},attrs:{data:e.row.goods_list}},[n("el-table-column",{attrs:{label:"商品",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"good-box"},[n("el-image",{staticStyle:{width:"45px",height:"45px"},attrs:{src:e.row.img,"preview-src-list":[e.row.img]}}),t._v(" "),n("div",{staticClass:"right"},[n("div",[n("router-link",{attrs:{to:{path:"/commodityManagement/good/goodDetail",query:{id:e.row.good_id}},target:"_blank"}},[t._v(" "+t._s(e.row.name))])],1)])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"类型",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.row.good.type))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"单价（元）",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.row.price))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"数量",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.row.number)+"件")])]}}])})],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"编号",width:"80",sortable:"custom",prop:"id"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"200",label:"订单编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.identification))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"120",label:"订单类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.type))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"120",label:"订单状态",sortable:"custom",prop:"state"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.state_show))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"80",label:"订单总额"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("1000")(e.row.total?e.row.total:0)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"80",label:"运费"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.carriage?n("span",[t._v(t._s(t._f("1000")(e.row.carriage)))]):n("span",[t._v("免运费")])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"80",label:"收货人"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.good_location?e.row.good_location.name:""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"180",label:"手机号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.good_location?e.row.good_location.cellphone:""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"200",label:"地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.good_location?e.row.good_location.location:""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"80",label:"快递公司"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.dhl?e.row.dhl.name:""))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"180",label:"运单号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.odd))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"100",label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.remark))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"180",label:"订单时间",sortable:"custom",prop:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.created_at))])]}}])}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作","class-name":"small-padding fixed-width",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.IndentDetail,expression:"$store.jurisdiction.IndentDetail"}],attrs:{to:{path:"indentDetail",query:{id:e.row.id}}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"订单详情",placement:"top-start"}},[n("el-button",{attrs:{type:"warning",icon:"el-icon-tickets",circle:""}})],1)],1),t._v(" "),2===e.row.state?n("router-link",{attrs:{to:{path:"indentDetail",query:{id:e.row.id}}}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"发货",placement:"top-start"}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-truck",circle:""}})],1)],1):t._e()]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-operation"},[n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticClass:"pagination",attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},cJ0Q:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},fM8W:function(t,e,n){"use strict";var a=n("D052");n.n(a).a},jzvE:function(t,e,n){"use strict";n.r(e);var a=n("YHAO"),i=n("JG9a");for(var l in i)"default"!==l&&function(t){n.d(e,t,function(){return i[t]})}(l);n("fM8W");var r=n("KHd+"),o=Object(r.a)(i.default,a.a,a.b,!1,null,"5480be80",null);o.options.__file="list.vue",e.default=o.exports},lEg2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getList=function(t){return(0,a.default)({url:"plugin",method:"GET",params:t})},e.install=function(t){return(0,a.default)({url:"plugin/install/"+t,method:"GET"})},e.create=function(t){return t=i.default.parse(t),(0,a.default)({url:"plugin",method:"POST",data:t})},e.edit=function(t){return t=i.default.parse(t),(0,a.default)({url:"plugin/"+t.abbreviation,method:"POST",data:t})},e.publish=function(t){return(0,a.default)({url:"plugin/publish/"+t,method:"POST"})},e.updatePack=function(t,e){return e=i.default.parse(e),(0,a.default)({url:"plugin/updatePack/"+t,method:"POST",data:e})},e.details=function(t){return(0,a.default)({url:"plugin/"+t,method:"GET"})},e.destroy=function(t){return(0,a.default)({url:"plugin/destroy/"+t,method:"POST"})},e.uninstall=function(t){return(0,a.default)({url:"plugin/uninstall/"+t,method:"POST"})},e.routes=function(){return(0,a.default)({url:"plugin/routes/no_get",method:"GET"})},e.models=function(){return(0,a.default)({url:"plugin/models/all",method:"GET"})},e.template=function(t){return(0,a.default)({url:"plugin/template/"+t,method:"GET"})},e.jurisdiction=function(t){return(0,a.default)({url:"plugin/jurisdiction/all",method:"POST",data:t})},e.diff=function(t){return(0,a.default)({url:"plugin/diff/"+t,method:"GET"})},e.conflictResolution=function(t,e){return(0,a.default)({url:"plugin/conflictResolution/"+t,method:"POST",data:e})},e.installList=function(){return(0,a.default)({url:"plugin/installList/all",method:"GET"})},e.verifyPlugin=function(t){return(0,a.default)({url:"verifyPlugin/"+t,method:"POST"})};var a=l(n("t3Un")),i=l(n("Qyje"));function l(t){return t&&t.__esModule?t:{default:t}}},qULk:function(t,e,n){},tN7b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getList=function(t){return(0,a.default)({url:"indent",method:"GET",params:t})},e.detail=function(t){return(0,a.default)({url:"indent/"+t,method:"GET"})},e.shipment=function(t){return t=i.default.parse(t),(0,a.default)({url:"indent/shipment",method:"POST",data:t})},e.dhl=function(t){return t=i.default.parse(t),(0,a.default)({url:"indent/dhl",method:"POST",data:t})},e.query=function(t){return(0,a.default)({url:"indent/query/"+t,method:"GET"})},e.refund=function(t,e){return e=i.default.parse(e),(0,a.default)({url:"indent/refund/"+t,method:"POST",data:e})},e.receiving=function(t){return t=i.default.parse(t),(0,a.default)({url:"indent/receiving",method:"POST",data:t})};var a=l(n("t3Un")),i=l(n("Qyje"));function l(t){return t&&t.__esModule?t:{default:t}}}}]);