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
            <h1 class="login_logo">账户注册</h1>
        </div>


        <div class="login_content">
            <!-- 表单 -->
            <van-form validate-first @submit="onSubmit">
                <!-- 通过 pattern 进行正则校验 -->
                <!-- 用户名 -->
                <van-field
                    v-model="username"
                    name="用户名"
                    placeholder="用户名"
                    :rules="[
                        { required: true, message: '请填写用户名' },
                        // 正则验证
                        { pattern, message: '正则匹配规则' }
                    ]"
                />
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
                 <!-- 密码确认 -->
                <van-field
                    type="password"
                    v-model="checkPassword"
                    name="确认密码"
                    placeholder="确认密码"
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
                        注册账号
                    </van-button>
                </div>
                <!-- 已有账号，立即登陆 -->
                <div style="margin: 16px;">
                    <van-button block type="info" color="#008080"
                        to="/login">
                        已有账号，立即登陆
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
import {Register} from "@/network/api.js"

export default {
    data(){
        return {
            // 表单 
            username: '',
            email:'',
            password: '',
            checkPassword: '',
            // 表单正则验证
            pattern: /\S{3,}/,
        }
    },
    components:{
        HeaderBar
    },
    methods:{
        // 提交表单
        onSubmit(){
            if(this.password != this.checkPassword){
                // console.log(this.username,this.email,this.password,this.checkPassword==this.password);
                // name:
                // email:
                // password:
                // password_confirmation

                //轻提示 密码不一致
                this.$toast.fail('密码不一致\n请重新确认');

            }else{
                // 发送注册请求,根据响应结果判断是否可以注册
                Register({
                    name:this.username,
                    email:this.email,
                    password:this.password,
                    password_confirmation:this.checkPassword
                }).then(res=>{
                    console.log("Register注册请求的响应数据",res);
                    // 根据响应结果判断是否可以注册
                    // 响应422: 参数有错误，通过network的Preview验证
                    // 在响应拦截中处理 status状态码

                    // 若可以注册时：
                    this.$toast.success('登陆成功');
                    // 跳转到登陆界面
                    setTimeout(()=>{
                        this.$router.push('/login')
                    },1000);
 
                    this.password = '',
                    this.checkPassword = ''


                })
            }
            
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/Login/Login.less";
</style>