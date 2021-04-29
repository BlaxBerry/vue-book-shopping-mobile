<template>
  <div id="cart">
      <!-- 头部标题 -->
      <HeaderBar></HeaderBar>

      <!-- 商品卡片 -->
      <ProductCard
            :list="list"
      ></ProductCard>

  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"
// 引入 GoodList商品列表
import ProductCard from "@/components/ProductCard/ProductCard.vue"

// 导入 api接口
import {
  // 获取购物车列表
  GetCart
} from "@/network/api.js"

export default {
    data(){
        return {
            // 购物车商品列表
            list:[]
        }
    },
    components:{
        HeaderBar,
        ProductCard
    },
    mounted(){
        GetCart('include=goods').then(res=>{
            console.log(res.data);
            this.list = res.data
        })
    }
    
}
</script>

<style lang="less" scoped>
@import "../../assets/css//Cart/Cart.less";
</style>