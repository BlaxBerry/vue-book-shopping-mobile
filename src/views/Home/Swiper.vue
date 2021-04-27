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
    margin-top: 50px;
    img {
        width: 100%;
    }
    // .van-swipe {
    //     position: relative;
    //     width: 100%;
    // }

    // .van-swipe-item {
    //     float: left;
    // }
    // /deep/.van-swipe__indicators {
    //     position: absolute;
    //     bottom: 10px;
    //     height: 20px;
    //     width: 100%;
    //     text-align: center;
    //     i {
    //         display: inline-block;
    //         height: 10px;
    //         width: 10px;
    //         background-color:#fff;
    //         border-radius: 50%;
    //         margin: 0 10px;
    //     }
    // }
}
</style>