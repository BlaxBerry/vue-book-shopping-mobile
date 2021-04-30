<template>
  <div class="GoodItem" @click="goDetail(goodID)">
      <img v-lazy="goodImg" alt="">
      <div class="good_info">
        <span class="title">{{goodTitle}}</span>
        <span class="price">¥ {{goodPrice}}</span>
        <span class="collect"><i class="iconfont icon-collected"></i>{{collectNumber}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props:[
    // 商品img
    "goodImg",
    // 商品 title
    "goodTitle",
    // 商品 price
    "goodPrice",
    // 商品 收藏数 collects_count
    "collectNumber",
    // 商品id，打开详情页
    "goodID"
  ],
  methods:{
    goDetail(id){
        this.$router.push({
            path:'/detail',
            query:{
                id:id
            }
        })
        // 从商品详情页推荐的相关产品点击跳转到详情页
        // 因为只是路由后面的请求参数id的变化，会导致页面只是刷新而不跳转，所以用this.$router.go(0)
        setTimeout(() => {
            this.$router.go(0)
        }, 500);
        
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/ProductList/GoodItem.less";
</style>