<template>
  <div id="cart">
    <!-- 头部标题 -->
    <HeaderBar></HeaderBar>

    <!-- 购物车内容 -->
    <!-- 复选框组 -->
    <van-checkbox-group
      v-model="result"
      @change="checkedChange"
      :disabled="flag"
    >
      <!-- 商品复选框 -->
      <van-checkbox
        v-for="item in list"
        :key="item.id"
        :name="item.id"
        @click="flag = false"
      >
        <!-- 滑动单元格 -->
        <van-swipe-cell>
          <!-- 插入自定义内容 -->
          <!-- 商品卡片 -->
          <van-card
            :num="item.num"
            :price="item.goods.price.toFixed(2)"
            :desc="'库存剩余: ' + item.goods.stock + ' 本'"
            :title="item.goods.title"
            class="goods-card"
            :thumb="item.goods.cover_url"
            :lazy-load="true"
          />

          <!-- 步进器 -->
          <van-stepper
            v-model="item.num"
            min="0"
            :max="item.goods.stock"
            @change="changeNum(item.id, item.num)"
            @focus="flag = true"
            @blur="flag = false"
          />

          <template #right>
            <!-- 商品删除按钮 -->
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="delGood(item.id)"
            />
          </template>
        </van-swipe-cell>
      </van-checkbox>
    </van-checkbox-group>

    <!-- 提交订单 -->
    <van-submit-bar
      :price="getTotalPrice * 100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <!-- 全选框 -->
      <van-checkbox v-model="isCheckAll" @click="clickCheckAll" :disabled="flag"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue";
// 引入 GoodList商品列表
import ProductCard from "@/components/ProductCard/ProductCard.vue";

// 导入 api接口
import {
  // 获取购物车列表
  GetCart,
  // 修改商品选中状态
  CheckedCart,
  // 删除商品
  DeleteCart,
  // 修改商品数量
  EditCartNum,
} from "@/network/api.js";

export default {
  data() {
    return {
      // 购物车商品列表
      list: [],

      // 复选框全部选择 商品id的数组
      result: [],

      // 全选按钮状态
      isCheckAll: false,

      // 禁用复选框
      flag: false,

      // 购物车数量
      cartSum: 0,
    };
  },

  components: {
    HeaderBar,
    ProductCard,
  },

  created() {
    // 提示信息
    this.$toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    // 获得购物车商品，并渲染页面
    GetCart("include=goods").then((res) => {
      this.list = res.data;
      //   console.log(res.data);
      // 过滤筛选出 获取的list中被选中的商品的id，放入 result数组
      this.result = res.data
        .filter((item) => item.is_checked == 1)
        .map((item) => item.id);
      // console.log(this.result);
      // 商品总数
      let sum = 0;
      res.data.forEach((item) => {
        // 商品总数
        sum += item.num;
      });
      this.cartSum = sum;
    //   console.log(sum);
      console.log(this.$route.meta);
      this.$route.meta.cartNum = sum
      console.log(this.$route.meta.cartNum);
    });
  },

  methods: {
    // 商品复选框状态变化
    checkedChange(result) {
      // VantUI默认变化时自动修改选中商品id数组
      // 页面第一次渲染时也改变了,也会调用该方法，并传一个空数组

      // 发送修改后台商品的选中状态请求
      CheckedCart({ cart_ids: result });

      // 只要一个复选状态变化，就判断，
      // 选中的商品id 的个数（result数组长度）=？所有商品的个数
      if (result.length == this.list.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
    },

    // 全选 ==> 所有复选
    clickCheckAll() {
      if (this.isCheckAll) {
        // 如果全选 true
        // console.log("true",this.isCheckAll);
        // 把获得的list商品列表中的所有商品id 都加入result
        this.result = this.list.map((item) => item.id);
      } else {
        // 如果反选 false
        // console.log("false",this.isCheckAll);
        // 就将 控制选中商品id的result 改为空
        this.result = [];
      }
    },

    // 删除商品
    delGood(id) {
      // 发送删除请求，删除后台数据
      DeleteCart(id).then((res) => {
        console.log("商品删除成功");
        // 提示删除信息
        this.$toast.loading({
          message: "删除中...",
          forbidClick: true,
        });
        // 重新获取后台数据，渲染页面
        GetCart("include=goods").then((res) => {
          this.list = res.data;
        });
      });
    },

    // 提交按钮
    onSubmit() {
      if (this.result.length == 0) {
        this.$toast("请先选择商品～");
      } else {
        this.$toast.loading({
          message: "提交中...",
          forbidClick: true,
        });
        setTimeout(() => {
          // 跳转到 创建订单页面
          this.$router.push("/order");
        }, 1000);
      }
    },

    // 修该商品数量
    changeNum(id, num) {
      // 修改步进器时禁用checkbox，状态不会变化
      this.flag = true;
      // 商品id， 数量
      console.log(id, num);
      EditCartNum(id, { num: num });
    },
  },

  computed: {
    // 计算总价
    getTotalPrice() {
      let sum = 0;
      // 过滤筛选出 获取的list中被选中的商品
      this.list
        .filter((item) => this.result.includes(item.id))
        .forEach((item) => {
          sum += item.num * item.goods.price;
        });
      return Number(sum);
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css//Cart/Cart.less";
</style>
