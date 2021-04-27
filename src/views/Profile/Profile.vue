<template>
  <div>
    <!-- 个人页 -->

    <!-- 头部标题栏 -->
    <HeaderBar></HeaderBar>    


    <div class="main">
      <!-- 切换显示 登陆 / 未登陆 -->
      <div class="user_info">
          <div class="user_img"><img :src="imgSrc" alt=""></div>
          <div class="user_message">
            <span>登陆｜注册</span>
            <span>绑定手机号</span>
          </div>
          <span class="go_login">
            <!-- 跳转 -->
            <router-link to="/login">
              <i class="iconfont icon-login"></i>
            </router-link>
          </span>
      </div>

      <div>

      </div>

      <div class="profile_list"> 
        <span class="profile_list_item"><i class="iconfont icon-dizhi"></i>我的地址</span>
        <span class="profile_list_item"><i class="iconfont icon-jifen-xuanzhong"></i>积分Point</span>
        <span class="profile_list_item"><i class="iconfont icon-huiyuan"></i>会员卡</span>
        <span class="profile_list_item"><i class="iconfont icon-kefu"></i>客服</span>
      </div>

    </div>




  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"

export default {
  data(){
    return {
      imgSrc:require('../../assets/images/user-img.png')
    }
  },
  components:{
    HeaderBar
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/Profile/Profile.less";
</style>