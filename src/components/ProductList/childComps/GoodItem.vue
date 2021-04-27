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
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/ProductList/GoodItem.less";
</style>