<template>
  <div class="ProductCard">

    <van-card
        v-for="item in list" :key="item.id"
        num="2"
        :tag="item.collects_count>5?'HOT':''"
        :price="item.price.toFixed(2)"
        :desc="'收藏数: '+item.collects_count"
        :title="item.title"
        :thumb="item.cover_url"
        :lazy-load="true"
        :origin-price="item.price*1.5"
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