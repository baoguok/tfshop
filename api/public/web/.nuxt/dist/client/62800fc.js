(window.webpackJsonp=window.webpackJsonp||[]).push([[36,34],{510:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"a",(function(){return f}));var n=r(8),o=r(19),l=r.n(o);function c(e){return Object(n.a)({url:"comment/detail/"+e,method:"GET"})}function d(e){return Object(n.a)({url:"comment/good",method:"GET",params:e})}function f(e,data){return data=l.a.parse(data),Object(n.a)({url:"comment/"+e,method:"POST",data:data})}},581:function(e,t,r){"use strict";r.r(t);r(46),r(38),r(45),r(72),r(73);var n=r(34),o=r(17),l=r(7),c=(r(36),r(13),r(24),r(30),r(18),r(62),r(510)),d=r(9);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.default={layout:"user",head:function(){return{title:"订单评价-订单详情-个人中心"}},data:function(){return{loading:!0,buttonLoading:!1,total:0,indent:{list:[]},url:"http://dsshop.test/api/v1/app/uploadPictures",imgHeaders:{"apply-secret":"base64:szoJ3mSx/5U7zOsJfU7s4pSahiwdh01x6badmz5FtCM=",Authorization:"Bearer "+Object(d.a)("token")},imgData:{type:1,size:2097152,specification:[80,150]}}},created:function(){console.log("111"),this.getDetail()},methods:{getDetail:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return $nuxt.$route.query.id,t.next=3,Promise.all([Object(c.b)($nuxt.$route.query.id)]).then((function(t){Object(o.a)(t,1)[0].forEach((function(t,r){e.indent.list.push(m(m({},t),{},{score:null,details:null,resources:[],anonymity:0,id:t.id}))})),e.loading=!1})).catch((function(t){e.loading=!1}));case 3:case"end":return t.stop()}}),t)})))()},handleAvatarSuccessList:function(e,t,r,n){this.indent.list[n].resources=r,this.imgProgress=!1,this.imgProgressPercent=0},handleRemove:function(e,t,r){this.indent.list[r].resources=t},beforeAvatarUploadList:function(e){var t=e.size/1024/1024<2;return-1===["image/jpeg","image/gif","image/png","image/bmp"].indexOf(e.type)?(this.$message.error("请上传正确的图片格式"),!1):(t||this.$message.error("上传头像图片大小不能超过 2MB!"),t)},goBack:function(){$nuxt.$router.go(-1)},addComment:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;e.buttonLoading=!0;for(var r=JSON.parse(JSON.stringify(e.indent.list)),i=0;i<r.length;i++){if(0===r[i].score)return e.$message.error("您还有未选择的星级评分"),e.buttonLoading=!1,!1;r[i].resources=r[i].resources.map((function(e){return e.response}))}Object(c.a)($nuxt.$route.query.id,r).then((function(e){$nuxt.$router.go(-1)})).catch((function(){e.buttonLoading=!1}))}))}}}},582:function(e,t,r){var content=r(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("60f168ea",content,!0,{sourceMap:!1})},660:function(e,t,r){"use strict";r(582)},661:function(e,t,r){var n=r(11)(!1);n.push([e.i,".specification[data-v-2e8c1ea5]{color:#999}.top[data-v-2e8c1ea5]{display:flex;flex-direction:row;justify-content:space-between;margin-top:20px}.ruleForm .table[data-v-2e8c1ea5]{margin-bottom:20px}.ruleForm .rate[data-v-2e8c1ea5]{margin-top:10px}.right[data-v-2e8c1ea5]{text-align:right}",""]),e.exports=n},752:function(e,t,r){"use strict";r.r(t);var n=r(581).default,o=(r(660),r(6)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("el-page-header",{attrs:{content:"订单评价"},on:{back:e.goBack}}),e._v(" "),r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[r("div",{staticClass:"top"},[r("div",{staticClass:"order-number"},[e._v("订单号："+e._s(e.indent.identification))])]),e._v(" "),r("el-divider"),e._v(" "),r("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{model:e.indent,"label-width":"120px"}},e._l(e.indent.list,(function(t,n){return r("div",{key:n},[r("el-table",{ref:"table",refInFor:!0,staticClass:"table",attrs:{data:[t]}},[r("el-table-column",{attrs:{align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("NuxtLink",{attrs:{to:{path:"/product/detail",query:{id:t.row.good_id}}}},[r("el-image",{staticClass:"image",attrs:{src:e._f("smallImage")(t.row.img,80),fit:"cover"}})],1)]}}],null,!0)}),e._v(" "),r("el-table-column",{attrs:{label:"商品名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("NuxtLink",{attrs:{to:{path:"/product/detail",query:{id:t.row.good_id}}}},[r("p",[e._v(e._s(t.row.name))])])]}}],null,!0)}),e._v(" "),r("el-table-column",{attrs:{label:"单价",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(e._f("thousands")(t.row.price))+"\n            ")]}}],null,!0)}),e._v(" "),r("el-table-column",{attrs:{label:"数量",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.number)+"\n            ")]}}],null,!0)}),e._v(" "),r("el-table-column",{attrs:{label:"小计",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(e._f("thousands")(t.row.price*t.row.number))+"\n            ")]}}],null,!0)})],1),e._v(" "),r("el-form-item",{attrs:{label:"综合评分：",prop:"list["+n+"].score",rules:{required:!0,message:"您还有未选择的星级评分",trigger:"change"}}},[r("el-rate",{staticClass:"rate",attrs:{"show-text":""},model:{value:t.score,callback:function(r){e.$set(t,"score",r)},expression:"item.score"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"上传图片：",prop:"resources"}},[r("el-upload",{attrs:{limit:4,action:e.url,headers:e.imgHeaders,"on-success":function(t,r,o){return e.handleAvatarSuccessList(t,r,o,n)},"on-remove":function(t,r){return e.handleRemove(t,r,n)},"before-upload":e.beforeAvatarUploadList,data:e.imgData,"file-list":t.resources,multiple:"","list-type":"picture-card"}},[r("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),e._v(" "),r("div",{staticClass:"el-upload__tip"},[e._v("最多可上传4张，每张不能大于2M")])],1),e._v(" "),r("el-form-item",{attrs:{label:"匿名评价",prop:"list["+n+"].anonymity",rules:{required:!0,message:"是否匿名评价",trigger:"change"}}},[r("el-switch",{model:{value:t.anonymity,callback:function(r){e.$set(t,"anonymity",r)},expression:"item.anonymity"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"评价内容：",prop:"list["+n+"].details",rules:{required:!0,message:"您还有未填写的评价内容",trigger:"blur"}}},[r("el-input",{attrs:{type:"textarea",placeholder:"亲,您对这个商品满意吗？您的评价会帮助我们提供更好的服务哦~",maxlength:"500",autosize:{minRows:4},"show-word-limit":""},model:{value:t.details,callback:function(r){e.$set(t,"details",r)},expression:"item.details"}})],1),e._v(" "),r("el-divider")],1)})),0),e._v(" "),r("div",{staticClass:"right"},[r("el-button",{attrs:{loading:e.buttonLoading,type:"primary"},on:{click:function(t){return e.addComment()}}},[e._v("提交评价")])],1)],1)],1)}),[],!1,null,"2e8c1ea5",null);t.default=component.exports}}]);