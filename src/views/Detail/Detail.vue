<template>
  <div class="detail">
        <!-- Detail 详情页 -->
        <HeaderBar></HeaderBar>


        <!-- 图片 -->
        <van-image
          width="100%"
          lazy-load
          :src="book.detail.cover_url"
        />

        <!-- 商品卡片 -->
        <van-card
          :price="Number(book.detail.price).toFixed(2)"
          :desc="book.detail.description"
          :title="book.detail.title"
        >
          <template #tags>
            <van-tag plain type="danger">打折</van-tag>
          </template>
          <template #footer>
            <van-button type="warning">加入购物车</van-button>
            <van-button type="danger">立即购买</van-button>
          </template>
        </van-card>

        <!-- 选项标题 -->
        <TabControl
            :tabControlItems="tabControlItemTitle"
            @clickTabControlItem="clickTabControlItem"
        ></TabControl>

        <!-- 选项对应的内容 -->
        <div class="detail_info" v-html="book.detail.details"></div>
  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"
// 引入 Tab-control
import TabControl from "@/components/ProductList/childComps/TabControl.vue"

// 导入 api接口
import {GetDetailData} from "@/network/api.js"

export default {
    data(){
        return {
            // 该图书的数据模型
            book:{
                detail:{},
                // 推荐相似内容
                like_goods:[],
                // 评论
                comments:[]
            },
            // tab-control选项卡 选项标题
            tabControlItemTitle:['销量','价格','评价'],
            // 被点击的 tab-control-item 的index
            tabControlItemNumber:0,
        }
    },
    components:{
        HeaderBar,
        TabControl 
    },
    created(){
        // 接受的 商品 id
        console.log(this.$route.query.id);
        // console.log(this.book);

        // 获取详情页数据
        GetDetailData(this.$route.query.id).then(res=>{
            console.log("Detail详情全部页数据",res);
            this.book.detail = res.goods
            this.book.like_goods = res.like_goods
        })
    },
    methods:{
        // 获得被点击的tab-control-item的index
        clickTabControlItem(index){
          this.tabControlItemNumber = index;
          console.log(this.tabControlItemNumber);
        },
    }

}
</script>

<style lang="less" scoped>
.detail {
    margin-top: 50px;
    img  {
        max-width: 100%;
    }

    /deep/.detail_info {
        padding-bottom: 50px;
        img {
            width: 100%;
        }
    }
}
</style>