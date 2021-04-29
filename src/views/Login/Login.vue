<template>
  <div id="login">

        <!-- 头部标题 -->
        <div class="login_heder">
            <HeaderBar>
                <span slot="left_search" class="go_back" @click="$router.go(-1)">
                    <i class="iconfont icon-back"></i>返回
                </span>
            </HeaderBar>
            <!-- logo  -->
            <h1 class="login_logo">账户登陆</h1>
        </div>


        <div class="login_content">
            <!-- 表单 -->
            <van-form validate-first @submit="onSubmit">
                <!-- 通过 pattern 进行正则校验 -->
                 <!-- 电子邮箱 -->
                <van-field
                    v-model="email"
                    name="电子邮箱"
                    placeholder="电子邮箱"
                    :rules="[
                        { required: true, message: '请填写邮箱地址' },
                        // 正则验证
                        { pattern, message: '正则匹配规则' }
                    ]"
                />
                <!-- 密码 -->
                <van-field
                    type="password"
                    v-model="password"
                    name="密码"
                    placeholder="密码"
                    :rules="[
                        { required: true, message: '请填写密码' },
                        // 正则验证
                        { pattern, message: '正则匹配规则' }
                    ]"
                />
                <!-- 提交按钮 -->
                <div style="margin: 16px;">
                    <van-button block type="info" 
                        native-type="submit" color="#42b983">
                        登陆
                    </van-button>
                </div>
                <!-- 已有账号，立即登陆 -->
                <div style="margin: 16px;">
                    <van-button block type="info" color="#008080"
                        to="/register">
                        没有账号？立即注册
                    </van-button>
                </div>

            </van-form>

            <!-- 底部 -->
            <div class="login_footer">
                <span>温馨提示：未注册的账号登陆时将被自动注册，<br>
                    且代表已经同意<a href="javascript:;" class="attention">《用户服务协议》</a>
                </span>
                <a href="https://github.com/BlaxBerry/vue-delivery-web-app" class="about">关于我们</a>
            </div>
        </div>

  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"

// 导入 api接口
import {Login} from "@/network/api.js"

export default {
    data(){
        return {
            // 表单 
            email: '',
            password: '',
            // 表单正则验证
            pattern: /\S{3,}/,
        }
    },
    components:{
        HeaderBar
    },
    methods:{
       onSubmit(){
        //  console.log(this.email,this.password);
        // email: eduwork@monkey.com
        // password: edu123
         Login({
           email:this.email,
           password:this.password
         }).then(res=>{
           console.log("请求成功后返回的数据",res);
           // 服务器返回一个 token, 保存到本地
           window.localStorage.setItem('token',res.access_token)

           this.$toast.success('登陆成功');
           this.email=''
           this.password=''

          // 跳转到个人页
           setTimeout(()=>{
             this.$router.push('/profile')
           },1000)

         })
       }
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/Login/Login.less";
</style>