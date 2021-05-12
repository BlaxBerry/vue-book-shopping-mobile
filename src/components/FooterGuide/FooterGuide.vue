<template>
  <div class="footer_guide">
    <!-- 底部导航组件 -->
    <router-link
      to="/home"
      class="guide_item"
      :class="$route.path === '/home' ? 'active' : ''"
    >
      <span><i class="iconfont icon-home"></i></span>
      <span>首页</span>
    </router-link>

    <router-link
      to="/category"
      class="guide_item"
      :class="$route.path === '/category' ? 'active' : ''"
    >
      <span><i class="iconfont icon-kinds"></i></span>
      <span>图书分类</span>
    </router-link>

    <router-link
      to="/cart"
      class="guide_item"
      :class="$route.path === '/cart' ? 'active' : ''"
    >
      <span>
        <van-badge :content="cartSum" max="9">
          <i class="iconfont icon-cart_brief"></i>
        </van-badge>
      </span>
      <span>购物车</span>
    </router-link>

    <router-link
      to="/profile"
      class="guide_item"
      :class="$route.path === '/profile' ? 'active' : ''"
    >
      <span><i class="iconfont icon-geren"></i></span>
      <span>首页</span>
    </router-link>
  </div>
</template>

<script>
// 导入 api接口
import { GetCart } from "@/network/api.js";

export default {
  data() {
    return {
      cartSum: 0
    };
  },
  mounted() {
    // 计算购物车商品总数
    GetCart().then((res) => {
      // console.log(res.data);
      let sum = 0;
      res.data.forEach((item) => {
        // 商品总数
        sum += item.num;
      });
      this.cartSum = sum
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/FooterGuide/FooterGuide.css";
</style>
