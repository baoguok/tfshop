(window.webpackJsonp=window.webpackJsonp||[]).push([[55,53],{732:function(e,t,r){var content=r(816);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("2d58b930",content,!0,{sourceMap:!1})},790:function(e,t,r){"use strict";r.r(t);r(46),r(38),r(45),r(72),r(18),r(73);var o=r(34),n=r(7),c=(r(13),r(91),r(25),r(50),r(36),r(188)),l=r(8),d=r(19),v=r.n(d);var f=r(189),m=r(87);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.default={layout:"login",head:function(){return{title:"登录-DSSHOP商城-跨终端商城解决方案"}},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=!1,t.next=4,Object(f.a)("sweepLogin").then((function(e){r=e.sweepLogin}));case 4:return t.abrupt("return",{isSweepLogin:r});case 7:t.prev=7,t.t0=t.catch(0),e.$errorHandler(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},data:function(){return{isSweepLogin:!1,method:1,codeLoading:!1,codeImg:"",codeTimer:null,codeState:0,codeTime:0,codeUuid:0,ruleForm:{cellphone:"",password:"",remember:!1},loading:!1,rules:{cellphone:[{validator:function(e,t,r){if(""===t)r(new Error("请输入手机号"));else{/^1[3456789]\d{9}$/.test(t)||r(new Error("手机号格式有误")),r()}},trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,message:"密码长度必须大于5位",trigger:"blur"}]}}},beforeDestroy:function(){clearInterval(this.codeTimer)},methods:x(x({},Object(m.b)(["login"])),{},{setMethod:function(e){this.method=e,2===e&&this.getCode()},getCode:function(){var e=this;this.codeLoading=!0,this.codeState=0,this.codeTimer&&clearInterval(this.codeTimer),Object(l.a)({url:"sweepLogin",method:"GET"}).then((function(t){e.codeImg=t.code,e.codeTime=t.expires_in,e.codeUuid=t.uuid,e.codeTimer=setInterval(e.getRefreshCode,2e3)})).finally((function(){e.codeLoading=!1}))},getRefreshCode:function(){var data,e=this;this.codeTime=this.codeTime-1,0===this.codeTime?(clearInterval(this.codeTimer),this.codeState=4):(data={uuid:this.codeUuid},data=v.a.parse(data),Object(l.a)({url:"sweepLogin/verify",method:"POST",data:data})).then((function(t){e.codeState=t.state,0!==e.codeState&&1!==e.codeState&&clearInterval(e.codeTimer),2===e.codeState&&function(data){return data=v.a.parse(data),Object(l.a)({url:"sweepLogin",method:"POST",data:data})}({uuid:e.codeUuid}).then((function(t){e.login(t),e.$message({message:"登录成功",type:"success"}),e.loading=!1;var r=e.store.get("route");r?(e.store.remove("route"),e.$router.replace({path:r.path,query:r.query})):$nuxt.$router.replace("/user/portal")})).catch((function(){e.loading=!1}))}))},toLogin:function(){var e=this;this.$refs.ruleForm.validate((function(t){t&&(e.loading=!0,Object(c.f)(e.ruleForm).then((function(t){t.remember=e.ruleForm.remember,e.login(t),e.$message({message:"登录成功",type:"success"}),e.loading=!1;var r=e.store.get("route");r?(e.store.remove("route"),e.$router.replace({path:r.path,query:r.query})):$nuxt.$router.replace("/user/portal")})).catch((function(){e.loading=!1})))}))}})}},815:function(e,t,r){"use strict";r(732)},816:function(e,t,r){var o=r(11)(!1);o.push([e.i,".banner-panel[data-v-21179ad1]{width:100%;height:588px;background-repeat:no-repeat;background-position:top;position:relative}.banner-panel .qr-code[data-v-21179ad1]{text-align:center;margin-top:30px}.banner-panel .qr-code .qr[data-v-21179ad1]{position:relative;margin:0 auto;border:1px solid #f4f4f4;padding:8px;width:155px;height:155px}.banner-panel .qr-code .qr .lose-efficacy[data-v-21179ad1]{position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.7)}.banner-panel .qr-code .qr .lose-efficacy .name[data-v-21179ad1]{margin-top:50px;color:#fff;font-size:16px}.banner-panel .qr-code .qr .lose-efficacy .flush[data-v-21179ad1]{margin-top:10px}.banner-panel .qr-code .explain[data-v-21179ad1]{font-size:12px;margin:20px 0}.banner-panel .qr-code .explain span[data-v-21179ad1]{color:#fa524c;margin:0 5px}.banner-panel .qr-code .advantage[data-v-21179ad1]{display:flex;color:#999;justify-content:center}.banner-panel .qr-code .advantage div[data-v-21179ad1]{margin:0 10px}.banner-panel .qr-code .advantage div i[data-v-21179ad1]{padding-right:3px;color:#e2e1e5}.banner-panel .link[data-v-21179ad1]{position:absolute;left:0;top:0;display:block;height:588px;width:800px}.banner-panel .form[data-v-21179ad1]{margin:40px 0;height:508px}.banner-panel .form .login-method[data-v-21179ad1]{text-align:center;font-size:26px;padding:30px 0}.banner-panel .form .login-method span[data-v-21179ad1]{cursor:pointer}.banner-panel .form .login-method .on[data-v-21179ad1],.banner-panel .form .login-method span[data-v-21179ad1]:hover{color:#fa524c}.banner-panel .form .button[data-v-21179ad1]{width:100%}.banner-panel .form .other[data-v-21179ad1]{margin-top:50px;text-align:center}.banner-panel .form .other a[data-v-21179ad1]{color:#999}.banner-panel .form .other a[data-v-21179ad1]:hover{color:#fa524c}",""]),e.exports=o},903:function(e,t,r){"use strict";r.r(t);var o=r(790).default,n=(r(815),r(6)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("div",{staticClass:"banner-panel",staticStyle:{"background-image":"url('//cdn.cnbj1.fds.api.mi-img.com/mi-mall/72644d9b8031286de3cc74e151aefd90.jpg')"}},[r("div",{staticClass:"container"},[r("el-row",{attrs:{gutter:24}},[r("el-col",{attrs:{span:8,offset:16}},[r("NuxtLink",{staticClass:"link",attrs:{to:"/pass/login"}}),e._v(" "),r("el-card",{staticClass:"form",attrs:{shadow:"hover"}},[r("div",{staticClass:"login-method"},[r("span",{class:{on:1===e.method},on:{click:function(t){return e.setMethod(1)}}},[e._v("账号登录")]),e._v(" "),e.isSweepLogin?[r("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),r("span",{class:{on:2===e.method},on:{click:function(t){return e.setMethod(2)}}},[e._v("扫码登录")])]:e._e()],2),e._v(" "),1===e.method?r("div",[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[r("el-form-item",{attrs:{prop:"cellphone"}},[r("el-input",{attrs:{maxlength:"11",placeholder:"请输入手机号码",clearable:""},model:{value:e.ruleForm.cellphone,callback:function(t){e.$set(e.ruleForm,"cellphone",t)},expression:"ruleForm.cellphone"}},[r("i",{staticClass:"iconfont dsshop-ziyuan",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{placeholder:"请输入密码","show-password":"",clearable:""},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}},[r("i",{staticClass:"iconfont dsshop-mima",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),r("el-form-item",[r("el-checkbox",{model:{value:e.ruleForm.remember,callback:function(t){e.$set(e.ruleForm,"remember",t)},expression:"ruleForm.remember"}},[e._v("记住密码")])],1),e._v(" "),r("el-button",{staticClass:"button",attrs:{type:"danger",loading:e.loading},on:{click:e.toLogin}},[e._v("登录")])],1),e._v(" "),r("div",{staticClass:"other"},[r("NuxtLink",{attrs:{to:"/pass/register"}},[e._v("立即注册")]),e._v(" "),r("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),r("NuxtLink",{attrs:{to:"/pass/findPassword"}},[e._v("忘记密码？")])],1)],1):r("div",[r("div",{staticClass:"qr-code"},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.codeLoading,expression:"codeLoading"}],staticClass:"qr"},[r("el-image",{staticClass:"image",attrs:{src:e.codeImg,fit:"scale-down"}}),e._v(" "),1===e.codeState?r("div",{staticClass:"lose-efficacy"},[r("div",{staticClass:"name"},[e._v("扫码成功")]),e._v(" "),r("el-button",{staticClass:"flush",attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.getCode()}}},[e._v("重新扫码")])],1):3===e.codeState?r("div",{staticClass:"lose-efficacy"},[r("div",{staticClass:"name"},[e._v("扫码失败")]),e._v(" "),r("el-button",{staticClass:"flush",attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.getCode()}}},[e._v("重新扫码")])],1):4===e.codeState?r("div",{staticClass:"lose-efficacy"},[r("div",{staticClass:"name"},[e._v("二维码已失效")]),e._v(" "),r("el-button",{staticClass:"flush",attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.getCode()}}},[e._v("刷新")])],1):e._e()],1),e._v(" "),1===e.codeState?r("div",{staticClass:"explain"},[e._v("请在手机完成授权登录")]):3===e.codeState?r("div",{staticClass:"explain"},[e._v("您拒绝授权，尝试重新扫码")]):r("div",{staticClass:"explain"},[e._v("使用"),r("span",[e._v("微信")]),e._v("扫描二维码")]),e._v(" "),r("div",{staticClass:"advantage"},[r("div",[r("i",{staticClass:"iconfont dsshop-kuai"}),e._v("更快")]),e._v(" "),r("div",[r("i",{staticClass:"iconfont dsshop-anquanzhuye"}),e._v("更安全")]),e._v(" "),r("div",[r("i",{staticClass:"iconfont dsshop-shurukuang"}),e._v("免输入")])])])])])],1)],1)],1)])])}),[],!1,null,"21179ad1",null);t.default=component.exports}}]);