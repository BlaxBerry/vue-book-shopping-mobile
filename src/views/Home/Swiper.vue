<template>
    <!-- swiper 轮播图 -->    
    <div class="swiper">

        <van-swipe :autoplay="3000" indicator-color="#42b983">
          <van-swipe-item v-for="item in swiperList" :key="item.id">
              <img :src="item.img_url" alt="">
          </van-swipe-item>
        </van-swipe>

    </div>
</template>

<script>

export default {
    props:{
        // 首页banner轮播图
      swiperList:{
          type:Array,
          default(){
              return []
          }
      }
    } 
}
</script>

<style lang="less" scoped>
.swiper{
    padding-top: 45px;
    overflow: hidden;
    img {
        width: 100%;
        height: 200px;
    }
}
</style>