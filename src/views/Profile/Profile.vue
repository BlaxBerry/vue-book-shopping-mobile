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
            <router-link to="/register">
              <i class="iconfont icon-login"></i>
            </router-link>
          </span>
      </div>

      <div>

      </div>

      <div class="profile_list"> 

        <van-cell title="我的地址" size="large" icon="location-o" label="描述信息" />

        <van-cell title="单元格" size="large" icon="vip-card-o" />

        <van-cell title="单元格" size="large" icon="bar-chart-o" />

        <van-cell title="关于项目" size="large" icon="share-o"  s-link url="https://github.com/BlaxBerry/vue-book-shop-App"/>

        <van-cell title="退出登陆" size="large" icon="delete-o" @click="toLogout"/>

      </div>

    </div>




  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"

// 导入 api接口
import {Logout} from "@/network/api.js"

export default {
  data(){
    return {
      imgSrc:require('../../assets/images/user-img.png')
    }
  },
  components:{
    HeaderBar
  },
  methods:{
    toLogout(){
      // 退出登陆
      Logout().then(res=>{
        console.log("退出登陆请求",res)
        // if(res.status=='204'){
          // 退出成功
          this.$toast.success('退出登陆')
          // 清除 存在本地的 token
          window.localStorage.setItem('token','')
          // 跳转页面
          setTimeout(()=>{
            this.$router.push('/register')
          },1000)
        // }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/Profile/Profile.less";
</style>