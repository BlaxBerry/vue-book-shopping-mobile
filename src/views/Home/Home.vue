<template>
  <div id="home">
    <!-- 首页 -->

    <!-- 头部标题栏 -->
    <HeaderBar>
      <span slot="left_search" class="left_search"><i class="iconfont icon-search"></i></span>
      <span slot="right_login" class="right_login" @click="$router.push('/login')">登陆｜注册</span>
    </HeaderBar>

    <!-- 轮播小图标 nav -->
    <Swiper></Swiper>

    <!-- 附近商家 -->
    <ShopList></ShopList>
    
  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"
// 导入 轮播图组件
import Swiper from "@/views/Home/Swiper.vue"
// 导入 商家列表
import ShopList from "@/components/ShopList/ShopList.vue"

export default {
  components:{
    HeaderBar,
    Swiper,
    ShopList
  }
}
</script>

<style lang="less" scoped>

</style>