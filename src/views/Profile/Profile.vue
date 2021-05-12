<template>
  <div id="profile">
    <!-- 个人页 -->
    <HeaderBar></HeaderBar>


    <!-- 切换显示 登陆 / 未登陆 -->
    <van-card
        :title="userName"
        :desc="email"
        :thumb="defaultImgSrc">
      <!-- 插槽 -->
      <template #footer>
           <!-- <van-button size="mini">退出</van-button> -->
      </template>

    </van-card>


    <!-- 选项内容 -->
    <div class="profile_list"> 

        <van-cell title="我的地址" size="large" is-link 
            to="address"/>

        <van-cell title="我的订单" size="large" is-link 
            to="order"/>

        <van-cell title="我的收藏" size="large" is-link 
            to="index"/>

        <van-cell title="账号管理" label="开发中" size="large" 
            to="setting"/>

        <van-cell 
            title="关于项目" 
            size="large" 
            is-link value="Chen GitHub"
            label="Vue-Book-Shop-App-BlaxBerry"
            s-link url="https://github.com/BlaxBerry/vue-book-shop-App"
        />
    </div>



    <!-- 退出按钮 -->
    <div class="logout">
          <van-button 
              color="#42b983"
              size="large" 
              @click="toLogout">
              退出登录
          </van-button>
    </div>


  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"

// 导入 api接口
import {
  // 退出登陆
  Logout,
  // 获得用户信息
  GetUserData
} from "@/network/api.js"

export default {
  data(){
    return {
      userName:'',
      email:'',
      defaultImgSrc:'',
      phone:0
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
  },
  created(){
    // 加载提示
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
    });
    // 获得用户信息
    GetUserData().then(res=>{
      console.log(res);
      this.userName = res.name;
      this.email = res.email;
      this.defaultImgSrc = res.avatar_url;
      this.phone = res.phone
    })
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/Profile/Profile.less";
</style>