(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-870f69b0"],{"45e6":function(t,e,n){},"64a7":function(t,e,n){"use strict";n("f1cd")},"6f82":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"HeaderBar"},[n("van-nav-bar",{attrs:{title:t.$route.meta.title,"left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"right",fn:function(){return[t._t("right_login")]},proxy:!0}],null,!0)})],1)},o=[],i={methods:{onClickLeft:function(){this.$router.go(-1)}}},r=i,l=(n("64a7"),n("2877")),s=Object(l["a"])(r,a,o,!1,null,"5fb6b65e",null);e["a"]=s.exports},"8f06":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"profile"}},[n("HeaderBar"),n("van-card",{attrs:{title:t.userName,desc:t.email,thumb:t.defaultImgSrc},scopedSlots:t._u([{key:"footer",fn:function(){},proxy:!0}])}),n("div",{staticClass:"profile_list"},[n("van-cell",{attrs:{title:"我的地址",size:"large","is-link":"",to:"address"}}),n("van-cell",{attrs:{title:"我的订单",size:"large","is-link":"",to:"order"}}),n("van-cell",{attrs:{title:"我的收藏",size:"large","is-link":"",to:"index"}}),n("van-cell",{attrs:{title:"账号管理",label:"开发中",size:"large",to:"setting"}}),n("van-cell",{attrs:{title:"关于项目",size:"large","is-link":"",value:"Chen GitHub",label:"Vue-Book-Shop-App-BlaxBerry","s-link":"",url:"https://github.com/BlaxBerry/vue-book-shop-App"}})],1),n("div",{staticClass:"logout"},[n("van-button",{attrs:{color:"#42b983",size:"large"},on:{click:t.toLogout}},[t._v(" 退出登录 ")])],1)],1)},o=[],i=(n("b0c0"),n("6f82")),r=n("8137"),l={data:function(){return{userName:"",email:"",defaultImgSrc:"",phone:0}},components:{HeaderBar:i["a"]},methods:{toLogout:function(){var t=this;Object(r["v"])().then((function(e){console.log("退出登陆请求",e),t.$toast.success("退出登陆"),window.localStorage.setItem("token",""),setTimeout((function(){t.$router.push("/register")}),1e3)}))}},created:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0}),Object(r["t"])().then((function(e){console.log(e),t.userName=e.name,t.email=e.email,t.defaultImgSrc=e.avatar_url,t.phone=e.phone}))}},s=l,c=(n("d0da"),n("2877")),u=Object(c["a"])(s,a,o,!1,null,"87caf686",null);e["default"]=u.exports},b0c0:function(t,e,n){var a=n("83ab"),o=n("9bf2").f,i=Function.prototype,r=i.toString,l=/^\s*function ([^ (]*)/,s="name";a&&!(s in i)&&o(i,s,{configurable:!0,get:function(){try{return r.call(this).match(l)[1]}catch(t){return""}}})},d0da:function(t,e,n){"use strict";n("45e6")},f1cd:function(t,e,n){}}]);
//# sourceMappingURL=chunk-870f69b0.bfb65f16.js.map