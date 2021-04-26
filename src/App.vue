<template>
  <div id="app">

    <!-- 路由占位符 -->
    <router-view/>

    <!-- 底部导航栏 -->
    <FooterGuide></FooterGuide>

  </div>
</template>


<script>
// 引入底部导航组件
import FooterGuide from "@/components/FooterGuide/FooterGuide.vue"

export default {
  components:{
    FooterGuide
  }
}
</script>


<style lang="less">

@import "./assets/css/reset.css";

@import "./assets/iconfont/iconfont.css";

// App.css
@import "./assets/css/App/App.css";

</style>
