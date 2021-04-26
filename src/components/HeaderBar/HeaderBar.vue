<template>
  <div class="header_bar">

      <slot name="left_search"></slot>

      <div class="header_title">{{$route.meta.title}}</div>

      <slot name="right_login"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "../../assets/css/HeaderBar/HeaderBar.css";

</style>