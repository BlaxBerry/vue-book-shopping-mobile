<template>
  <div id="login">
        <div>
            <a href="javascript:;" class="go_back" @click="$router.go(-1)"><i class="iconfont"></i> back</a>
        </div>

        <div class="login_heder">
            <h1 class="login_logo">外卖</h1>
        </div>

        <div class="login_content">
            <div>
                <a href="javascript;;">密码登陆</a>
                <a href="javascript;;">手机登陆</a>
            </div>
            <div>
                <input type="text">
                <input type="text">
            </div>
            <div>
                <input type="text">
                <input type="text">
            </div>
            <span>温馨提示：未注册的账号登陆时将被自动注册，且代表已经同意<a href="javascript:;">《用户服务协议》</a></span>
            <button>登陆</button>
            <a href="">关于我们</a>
        </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#login {
    width: 100%;
    height: 100vh;
    background-color: #fff;
}
</style>