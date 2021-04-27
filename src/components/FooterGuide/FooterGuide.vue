<template>
  <div class="footer_guide">

    <!-- 底部导航组件 -->
   <router-link to="/home" class="guide_item" :class="$route.path==='/home'?'active':''">
     <span><i class="iconfont icon-home"></i></span>
     <span>首页</span>
   </router-link>

   <router-link to="/category" class="guide_item" :class="$route.path==='/category'?'active':''">
     <span><i class="iconfont icon-kinds"></i></span>
     <span>图书分类</span>
   </router-link>

   <router-link to="/cart" class="guide_item" :class="$route.path==='/cart'?'active':''">
     <span>
      <van-badge :content="20" max="9">
         <i class="iconfont icon-cart_brief"></i>
      </van-badge>
     </span>
     <span>购物车</span>
   </router-link>

   <router-link to="/profile" class="guide_item" :class="$route.path==='/profile'?'active':''">
     <span><i class="iconfont icon-geren"></i></span>
     <span>首页</span>
   </router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../../assets/css/FooterGuide/FooterGuide.css";
</style>