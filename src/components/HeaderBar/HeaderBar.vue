<template>
  <div class="HeaderBar">
      <van-nav-bar 
        :title="$route.meta.title + ($route.meta.cartNum?' ( '+$route.meta.cartNum+' )':'')" left-text="返回" left-arrow>
          <!-- 插槽 -->
          <template #right>
             <slot name="right_login"></slot> 
          </template>

      </van-nav-bar>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../../assets/css/HeaderBar/HeaderBar.less";

</style>