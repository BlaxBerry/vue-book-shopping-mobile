<template>
  <div id="home">
    <!-- 首页 -->

    <!-- 头部标题栏 -->
    <HeaderBar>
      <!-- <span slot="left_search" class="left_search"><i class="iconfont icon-search"></i></span> -->
      <span slot="right_login" 
            class="right_login" 
            @click="$router.push('/login')">
          <!-- <i class="iconfont icon-login"></i> -->
          登陆 | 注册
      </span>
    </HeaderBar>

    <!-- 轮播图 -->
    <Swiper :swiperList="bannerSwiperList"></Swiper>

    <!-- 推荐商品 -->
    <Recommend :recommendList="recommendList"></Recommend>

    <!-- 商品列表 -->
    <ProductList></ProductList>
    
    <!-- 回到顶部小图标 -->
    <BackToTop></BackToTop>
  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"
// 导入 轮播图组件
import Swiper from "@/views/Home/Swiper.vue"
// 导入 推荐商品栏
import Recommend from "@/views/Home/Recommend.vue"
// 导入 商家列表
import ProductList from "@/components/ProductList/ProductList.vue"
// 导入 回到顶部小图标
import BackToTop from "@/components/BackToTop/BackToTop.vue"

// 导入 api接口
import {GetHomeAllData} from "@/network/api.js"

export default {
  data(){
    return {
      // swiper轮播图
      bannerSwiperList:[],
      // 推荐商品栏
      recommendList:[]
    }
  },
  components:{
    HeaderBar,
    Swiper,
    Recommend,
    ProductList,
    BackToTop
  },
  created(){
    console.log("\n\n项目说明：Vue + VantUI 手机Book图书商城项目(SPA)\n\n技术运用：Vue-cli4、vuex、vue-router、axios、LocalStorage、Less、UIframework-VantUI\n\n");
    // 加载提醒
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
    });
    // 获取首页banner轮播图
    GetHomeAllData().then(res=>{
      // console.log("Home首页所有数据",res);
      // banner Swiper轮播图
      this.bannerSwiperList = res.slides
      // 推荐商品栏
      this.recommendList = res.goods.data


    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style lang="less" scoped>
#home {
  position: relative;
  // overflow: hidden;


  .right_login {
    color: #fff;
    font-size: 13px;
    // i {
    //   font-size: 18px;
    // }
  }
}
</style>