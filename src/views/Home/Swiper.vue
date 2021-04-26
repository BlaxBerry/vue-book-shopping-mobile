<template>
    <!-- swiper 轮播图 -->
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->

            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>
    
</template>

<script>
// 导入 Swiper
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

export default {
  mounted(){
    // 创建Swiper对象来实现轮播
    new Swiper(".swiper-container",{
        loop:true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
    },
    })
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
    height: 300px;
    width: 100%;
    background-color: teal;
    margin-top: 50px;
    button {
        outline: none;
        border: none;
    }
}
</style>