<template>
  <div class="ProductCard">

    <van-card
        v-for="item in list" :key="item.id"
        :tag="(item.collects_count)?(item.collects_count>5?'HOT':''):''"
        :price="((item.price)?item.price:item.goods.price).toFixed(2)"
        :desc="(item.updated_at)?'上架时间: '+item.updated_at.slice(0,10):'库存：'+item.goods.stock"
        :title="(item.title)?item.title:item.goods.title"
        :thumb="(item.cover_url)?item.cover_url:item.goods.cover_url"
        :lazy-load="true"
        :origin-price="((item.price)?item.price:item.goods.price) * 1.5"
        @click="goDetail(item.id)"
    />
     
  </div>
</template>

<script>
export default {
  props:["list"],
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
</style>