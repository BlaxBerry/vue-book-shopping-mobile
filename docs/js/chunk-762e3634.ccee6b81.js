(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-762e3634"],{"251e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"orderDetail"}},[a("HeaderBar"),a("van-cell-group",[a("van-cell",{attrs:{title:"订单编号",value:t.mainOrderId,size:"large"}}),a("van-cell",{attrs:{title:"订单状态",value:t.status,size:"large"}}),a("van-cell",{attrs:{title:"下单时间",value:t.createdTime,size:"large"}}),a("van-cell",{attrs:{title:"订单总价",value:t.orderAmount+"元",size:"large"}}),a("van-cell",{attrs:{title:"配送方式",value:"普通快递",size:"large"}})],1),a("van-steps",{staticClass:"rowStep",attrs:{active:t.active}},[a("van-step",[t._v("买家下单")]),a("van-step",[t._v("支付订单")]),a("van-step",[t._v("店家发货")]),a("van-step",[t._v("收到商品")])],1),a("van-steps",{staticClass:"columnStep",attrs:{direction:"vertical",active:2}},[a("van-step",[a("h3",[t._v("等待发货（别等了，我不会发货...）")])]),a("van-step",[a("h3",[t._v("等待付款（别害怕，不会真叫你付款...）")])]),a("van-step",[a("h3",[t._v("创建订单")]),a("p",[t._v(t._s(t.createdTime))])])],1),a("van-button",{attrs:{type:"primary",block:"",color:"#008080"},on:{click:t.confirmDelivery}},[t._v(" 确认收货 ")]),a("div",{staticClass:"info"},[t._v("反正你也不付款我也不发货，点击看效果吧...")])],1)},s=[],n=a("6f82"),i=a("8137"),c={data:function(){return{orderID:this.$route.query.orderID,mainOrderId:"",orderAmount:"",status:"",createdTime:"",active:0}},components:{HeaderBar:n["a"]},methods:{confirmDelivery:function(){this.$toast.success("确认收货"),this.active>=3?this.active=3:this.active++}},mounted:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0}),Object(i["r"])(this.orderID).then((function(e){console.log("订单详情",e),t.mainOrderId=e.order_no,t.createdTime=e.created_at,t.orderAmount=e.amount})),Object(i["s"])(this.orderID).then((function(e){switch(console.log("订单状态",e),e){case 1:t.status="尚未付款";break;case 2:t.status="支付完成";break;case 3:t.status="已经发货";break;case 4:t.status="已经收货";break;case 5:t.status="已经过期";break;default:document.write("暂时不明")}}))}},o=c,l=(a("b51c"),a("2877")),u=Object(l["a"])(o,r,s,!1,null,"e8b33a24",null);e["default"]=u.exports},3949:function(t,e,a){},"64a7":function(t,e,a){"use strict";a("f1cd")},"6f82":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"HeaderBar"},[a("van-nav-bar",{attrs:{title:t.$route.meta.title,"left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"right",fn:function(){return[t._t("right_login")]},proxy:!0}],null,!0)})],1)},s=[],n={methods:{onClickLeft:function(){this.$router.go(-1)}}},i=n,c=(a("64a7"),a("2877")),o=Object(c["a"])(i,r,s,!1,null,"5fb6b65e",null);e["a"]=o.exports},b51c:function(t,e,a){"use strict";a("3949")},f1cd:function(t,e,a){}}]);
//# sourceMappingURL=chunk-762e3634.ccee6b81.js.map