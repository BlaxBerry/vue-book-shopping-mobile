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
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
