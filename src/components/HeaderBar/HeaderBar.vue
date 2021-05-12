<template>
  <div class="HeaderBar">
      <van-nav-bar 
        :title="$route.meta.title" 
        left-text="返回" left-arrow
        @click-left="onClickLeft">
          <!-- 插槽 -->
          <template #right>
             <slot name="right_login"></slot> 
          </template>

      </van-nav-bar>

  </div>
</template>

<script>
export default {
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/HeaderBar/HeaderBar.less";
</style>