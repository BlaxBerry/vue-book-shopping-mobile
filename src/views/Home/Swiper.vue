<template>
    <!-- swiper 轮播图 -->
    <div class="swiper" >
        <img src="https://oss.shop.eduwork.cn/ad/2020-0820-5f3dfe9530bfd.png" alt="">
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
.swiper {
    margin-top: 50px;
    img {
        height: auto;
        width: 100%;
    }
}
</style>