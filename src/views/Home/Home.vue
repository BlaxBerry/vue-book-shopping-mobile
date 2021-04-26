<template>
  <div id="home">
    <!-- 首页 -->

    <!-- 头部标题栏 -->
    <HeaderBar>
      <span slot="left_search" class="left_search"><i class="iconfont icon-search"></i></span>
      <span slot="right_login" class="right_login">登陆｜注册</span>
    </HeaderBar>

    <!-- 附近商家 -->

    <!-- 商品列表 -->

  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"

export default {
  components:{
    HeaderBar
  }
}
</script>

<style lang="less" scoped>

</style>