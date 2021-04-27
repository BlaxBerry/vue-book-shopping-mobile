<template>
  <div class="detail">
      <HeaderBar></HeaderBar>
      Detail 详情页
  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"

export default {
    components:{
        HeaderBar
    },
    created(){
        // 接受的 商品 id
        console.log(this.$route.query.id);
    }

}
</script>

<style lang="less" scoped>
.detail {
    margin-top: 50px;
}
</style>