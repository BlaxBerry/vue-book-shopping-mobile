<template>
  <div id="order">
    <!-- Order订单 -->
    <!-- Detail 详情页 -->
    <HeaderBar></HeaderBar>

    <!-- 发货地址 -->
    <!-- 没有地址时的新增地址 -->
    <van-contact-card
      type="add"
      @click="$router.push('/address')"
      v-if="!hasAddress"
    />
    <!-- 有地址时的显示 -->
    <van-contact-card
      type="edit"
      :name="this.address.name"
      :tel="this.address.phone"
      @click="$router.push('/address')"
      v-if="hasAddress"
    />

    <!-- 商品卡片 -->
    <van-card
      v-for="item in list"
      :key="item.id"
      :num="item.num"
      :price="item.goods.price"
      :title="item.goods.title"
      :thumb="item.goods.cover_url"
      :lazy-load="true"
    />

    <!-- 提交订单 -->
    <van-submit-bar
      :price="getTotalPrice * 100"
      button-text="确定提交"
      @submit="onSubmit"
    />

    <!-- 支付弹出层 -->
    <!-- 图标位置 -->
    <van-popup
      v-model="showProp"
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '30%' }"
    >
      <div class="btns">
        <van-button type="primary" block color="#42b983" @click="goOrderDetail"
          >微信支付</van-button
        >
        <van-button type="primary" block color="#dc143c" @click="goOrderDetail"
          >PayPay支付</van-button
        >
      </div>
    </van-popup>
  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue";

// 导入api接口
import {
  // 获取订单预览（列表）
  GetAllOrderPreview,
  // 创建生成订单
  CreateOrder,
  // 支付
  PayOrder,
  // 查询支付状态
  GetPayStatus,
} from "@/network/api.js";

export default {
  data() {
    return {
      // 购物车列表
      list: [],
      // address地址
      address: [],
      //是否有地址Address
      hasAddress: false,
      // 弹出层显示隐藏
      showProp: false,
      // 订单号
      orderID: "",
    };
  },

  components: {
    HeaderBar,
  },

  methods: {
    // 提交订单
    onSubmit() {
      // 判断添加地址Address
      if (this.address.length == 0) {
        // 提示信息 没添加
        this.$toast.fail("请先添加收货地址");
      } else {
        // 判断列表是否为空
        if (this.list.length == 0) {
          // 列表为空
          // 提示信息
          this.$toast.fail("不能提交一个空订单");
        } else {
          // 列表不为空
          // 创建提交订单
          CreateOrder({
            address_id: this.address.id,
          }).then((res) => {
            // 支付弹出层显示
            setTimeout(() => {
              this.showProp = true;
            }, 1000);
            // 订单ID
            this.orderID = res.id;
            // 支付
            // PayOrder(this.orderID, { type: "wechat" }).then((res) => {
            //   console.log(res);
            // });
          });
        }
      }
    },

    // 点击支付方式按钮
    goOrderDetail() {
      // 跳转到订单详情页面，并传入提交的订单ID
      this.$router.push({
        path: "/orderdetail",
        query: { orderID: this.orderID },
      });
    },

    //初始化
    init() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
      });

      // 请求获取订单预览
      // 获得 发货地址Address 和 购物车Cart内容
      GetAllOrderPreview().then((res) => {
        // console.log(res);
        // 购物车数据
        this.list = res.carts;
        // 发货地址
        // 过滤，获取默认地址
        res.address.filter((item) => {
          if (item.is_default == 1) {
            // 显示默认（选中）的地址
            this.address = item;
            this.hasAddress = true;
            // console.log(this.address);
          } else {
            this.hasAddress = false;
          }
        });

        // 如果用户还没有设置 发货地址
        if (this.address.length == 0) {
          // console.log('还没添加地址');
          // 提示信息 没添加
          this.$toast.fail("请先添加收货地址");
        }
      });
    },
  },

  computed: {
    // 计算总价
    getTotalPrice() {
      let sum = 0;
      // 过滤筛选出 获取的list中被选中的商品
      this.list.forEach((item) => {
        sum += item.num * item.goods.price;
      });
      return sum;
    },
  },

  mounted() {
    // 调用初始化
    this.init();
  },
};
</script>

<style lang="less" scoped>
#order {
  padding: 50px 0 100px;

  .van-submit-bar {
    padding-bottom: 50px;
  }

  .van-popup {
    .btns {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      .van-button {
        height: 50px;

        &:nth-child(1) {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
