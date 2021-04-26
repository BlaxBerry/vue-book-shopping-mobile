<template>
  <div>
    <!-- 个人页 -->

    <!-- 头部标题栏 -->
    <HeaderBar></HeaderBar>    


    <div class="main">
      <!-- 切换显示 登陆 / 未登陆 -->
      <div>
          <img src="" alt="">
          <div>
            <span>登陆｜注册</span>
            <span>绑定手机号</span>
          </div>
          <span>
            <!-- 跳转 -->
            <router-link to="/login">></router-link>
          </span>
      </div>

      <div>

      </div>

      <div>
        <span>我的订单</span>
        <span>积分Point</span>
        <span>会员卡</span>
        <span>客服</span>
      </div>

    </div>




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
.main {
  margin-top: 50px;
  position: absolute;
  z-index: 1000;
  width: 100%;
}
</style>