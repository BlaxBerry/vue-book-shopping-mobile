<template>
  <div id="orderDetail">
    <!-- Order订单 -->
    <!-- Detail 详情页 -->
    <HeaderBar></HeaderBar>

    <!-- 订单详情 -->
    <van-cell-group>
      <van-cell title="订单编号" :value="mainOrderId" size="large" />
      <van-cell title="订单状态" :value="status" size="large" />
      <van-cell title="下单时间" :value="createdTime" size="large" />
      <van-cell title="订单总价" :value="orderAmount + '元'" size="large" />
      <van-cell title="配送方式" value="普通快递" size="large" />
    </van-cell-group>

    <!-- 订单状态步骤 -->
    <van-steps :active="active" class="rowStep">
      <van-step>买家下单</van-step>
      <van-step>支付订单</van-step>
      <van-step>店家发货</van-step>
      <van-step>收到商品</van-step>
    </van-steps>

    <!-- 跳转至该页面的订单的步骤状态 -->
    <van-steps direction="vertical" :active="2" class="columnStep">
      <van-step>
        <h3>等待发货（别等了，我不会发货...）</h3>
      </van-step>
      <van-step>
        <h3>等待付款（别害怕，不会真叫你付款...）</h3>
      </van-step>
      <van-step>
        <h3>创建订单</h3>
        <p>{{ createdTime }}</p>
      </van-step>
    </van-steps>

    <!-- 确认收货按钮 -->
    <van-button type="primary" block color="#008080" @click="confirmDelivery">
      确认收货
    </van-button>
    <div class="info">反正你也不付款我也不发货，点击看效果吧...</div>
  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue";

// 导入api接口
import {
  // 查询支付状态
  GetPayStatus,
  // 订单详情
  GetOrderDetail,
  // 物流信息
  GetExpressData,
  // 确认收货
  ConifrmOrder,
} from "@/network/api.js";

export default {
  data() {
    return {
      // 接收传入的订单ID
      orderID: this.$route.query.orderID,

      // 跳转至该页面的订单的编号
      mainOrderId: "",
      // 跳转至该页面的订单的总价
      orderAmount: "",
      // 订单状态
      status: "",
      // 下单时间
      createdTime: "",

      // 步骤控制
      active: 0,
    };
  },
  components: {
    HeaderBar,
  },
  methods: {
    // 确认收货按钮
    confirmDelivery() {
      // 确认收货
      // ConifrmOrder(this.orderID).then((res) => {
      // 后台没写这功能
      // 因为这就是个架空的网站，不会真的发货
      // });
      //  提示请求成功
      this.$toast.success("确认收货");
      this.active >= 3 ? (this.active = 3) : this.active++;
    },
  },
  mounted() {
    // 加载提示
    this.$toast.loading({
      message: "加载中...",
      forbidClick: true,
    });

    // 接收传入的订单ID
    GetOrderDetail(this.orderID).then((res) => {
      console.log("订单详情", res);
      // 跳转至该页面的订单的编号
      this.mainOrderId = res.order_no;
      // 跳转至该页面的订单的下单时间
      this.createdTime = res.created_at;
      // 跳转至该页面的订单的总价
      this.orderAmount = res.amount;
    });

    // 查询支付状态
    GetPayStatus(this.orderID).then((res) => {
      console.log("订单状态", res);
      switch (res) {
        case 1:
          this.status = "尚未付款";
          break;
        case 2:
          this.status = "支付完成";
          break;
        case 3:
          this.status = "已经发货";
          break;
        case 4:
          this.status = "已经收货";
          break;
        case 5:
          this.status = "已经过期";
          break;
        default:
          document.write("暂时不明");
      }
    });

    // 物流信息
    // GetExpressData(this.orderID).then(res=>{
    //   console.log('物流',res);
    // })
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/Order/OrderDetail.less";
</style>
