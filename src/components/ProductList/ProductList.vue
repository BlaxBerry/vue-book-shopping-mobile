<template>
  <div class="product-list">
      <!-- 商家列表 -->
      <!-- <div class="shop_header">商品列表</div> -->
      <div class="shop_container">
          <!-- 三列表 -->
          <!-- tabcontrol -->
          <TabControl 
            :tabControlItems="['畅销','精选','新书']"
            @clickTabControlItem="clickTabControlItem"
          >
          </TabControl>

          <ul class="shop_list">
            <li class="shop_li">
                  <a href="" @click="goDetail(id)"></a>
            </li>
            <li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
            <li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
            <li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
            <li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
            <li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
            <li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
            <li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
            <li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
            <li>222222</li>
            <li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li>
            
          </ul>
      </div>
  </div>
</template>

<script>
// 引入 Tab-control
import TabControl from "./childComps/TabControl.vue"

export default {
  components:{
    TabControl
  },
  methods:{
    // 跳转到详情页
    goDetail(id){
      this.$router.push({
        ath:'/detail',
          query:{
            id:id
          }
      })
    },

    // 获得被点击的tab-control-item的index
    clickTabControlItem(index){
      console.log(index);
    }

  }
}
</script>

<style lang="less" scoped>
</style>