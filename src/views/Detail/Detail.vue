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
          :origin-price="(book.detail.price*1.5).toFixed(2)"
        >
          <template #tags>
            <van-tag plain type="danger">打折</van-tag>
          </template>
          <template #footer>
            <van-button type="warning" 
                @click="addCart()"
                :disabled="!book.detail.stock">
                {{(book.detail.stock)?"加入购物车":"暂无库存"}}
            </van-button>
            <van-button type="danger" 
                @click="addAndGoToCart"
                :disabled="!book.detail.stock">
                {{(book.detail.stock)?"立即购买":"暂无库存"}}
            </van-button>
          </template>
        </van-card>

        <!-- 选项标题 -->
        <TabControl
            :tabControlItems="tabControlItemTitle"
            @clickTabControlItem="clickTabControlItem"
        ></TabControl>

        <!-- 选项对应的内容 -->
        <!-- 详细内容 -->
        <div class="detail_info" v-html="book.detail.details"
            v-show="tabControlItemNumber==0"
        ></div>
        <!-- 评论 -->
        <div class="comments"
            v-show="tabControlItemNumber==1">
          <van-cell center :title="(book.detail.comments)?'暂无评论(0)':'该功能开发中'" />
        </div>
        <!-- 相关内容 -->
        <div class="likes"
            v-show="tabControlItemNumber==2">
            <GoodItem 
                v-for="(item) in book.like_goods" :key="item.id"
                :goodImg="item.cover_url"
                :goodTitle="item.title"
                :goodPrice="item.price"
                :collectNumber="item.collects_count"
                :goodID="item.id">
            </GoodItem>
        </div>
  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"
// 引入 Tab-control
import TabControl from "@/components/ProductList/childComps/TabControl.vue"
// 引入 GoodList商品列表
import GoodItem from "@/components/ProductList/childComps/GoodItem.vue"

// 导入 api接口
import {
  // 获取详商品情数据
  GetDetailData,
  // 添加到购物车
  AddCart
} from "@/network/api.js"

export default {
    data(){
        return {
            // 该图书的数据模型
            book:{
                // 价格、名称、库存 等信息
                detail:{},
                // 推荐相似内容
                like_goods:[],
                // 评论
                comments:[],
                // 库存
                flag:true
            },
            // tab-control选项卡 选项标题
            tabControlItemTitle:['商品概述','热门评论','相关推荐'],
            // 被点击的 tab-control-item 的index
            tabControlItemNumber:0,
        }
    },
    components:{
        HeaderBar,
        TabControl,
        GoodItem 
    },
    mounted(){
        // 加载提醒
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true,
        });

        // 获取详情页数据
        // 接受的 商品 id
        // console.log(this.$route.query.id);
        // console.log(this.book);
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
          // console.log(this.tabControlItemNumber);
        },

        // 立即购买
        addAndGoToCart(){
          // 调用加入购物车
          this.addCart()
          // 前往购物车
          setTimeout(()=>{this.$router.push('/cart')},1000)
        },

        // 加入购物车
        addCart(){
          AddCart({
            goods_id:this.book.detail.id,
            num:1
          }).then(res=>{
            console.log("添加购物车成功后",res);
            if(res.status == '204'||res.status == '201'){
              this.$toast.success('成功添加至购物车')
            }
          })
        }
    }

}
</script>

<style lang="less" scoped>
@import "../../assets/css/Detail/Detail.less";
</style>