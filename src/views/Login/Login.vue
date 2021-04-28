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
            <h1 class="login_logo">IT 图书商城</h1>
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
                        提交
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
            if(this.password == this.checkPassword){
                console.log(this.username,
                        this.email,
                        this.password,
                        this.checkPassword==this.password
                );
            }else{
                console.log("密码不一致");
            }
            
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/Login/Login.less";
</style>