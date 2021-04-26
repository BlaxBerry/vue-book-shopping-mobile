<template>
  <div class="footer_guide">

    <!-- 底部导航组件 -->
   <router-link to="/home" class="guide_item" :class="$route.path==='/home'?'active':''">
     <span><i class="iconfont icon-home"></i></span>
     <span>首页</span>
   </router-link>

   <router-link to="/search" class="guide_item" :class="$route.path==='/search'?'active':''">
     <span><i class="iconfont icon-search"></i></span>
     <span>搜索</span>
   </router-link>

   <router-link to="/order" class="guide_item" :class="$route.path==='/order'?'active':''">
     <span><i class="iconfont icon-order"></i></span>
     <span>订单</span>
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