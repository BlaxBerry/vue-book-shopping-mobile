<template>
  <div id="login">

        <div class="login_heder">
            <div class="go_back">
                <a href="javascript:;" @click="$router.go(-1)">
                    <i class="iconfont icon-back">返回</i>
                </a>
            </div>
            <h1 class="login_logo">IT 图书商城</h1>
        </div>

        <div class="login_content">
            <div class="tab_nav">
                <span :class="showNavContent==1?'underline':''"  @click="showNavContent=1">密码登陆</span>
                <span :class="showNavContent==2?'underline':''"  @click="showNavContent=2">手机登陆</span>
            </div>
            <div class="tab_content" v-show="showNavContent==1">
                <input type="text" placeholder="用户名">
                <input type="text" placeholder="密码">
            </div>
            <div class="tab_content" v-show="showNavContent==2"> 
                <input type="text" placeholder="手机号">
                <input type="text" placeholder="验证码">
            </div>
        </div>

        <div class="login_footer">
            <span>温馨提示：<br> 未注册的账号登陆时将被自动注册，且代表已经同意<a href="javascript:;" class="attention">《用户服务协议》</a></span>
            <button>登陆</button>
            <a href="https://github.com/BlaxBerry/vue-delivery-web-app">关于我们</a>
        </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            // tab栏内容显示隐藏
            showNavContent:1
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/Login/Login.less";
</style>