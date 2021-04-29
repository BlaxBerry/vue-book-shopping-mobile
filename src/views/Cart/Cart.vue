<template>
  <div id="cart">
       <!-- 头部标题 -->
       <HeaderBar></HeaderBar>

        <!-- 购物车内容 -->
        <!-- 复选框组 -->
        <van-checkbox-group v-model="result">
            <!-- 商品复选框 -->
            <van-checkbox 
                    v-for="item in list" :key="item.id"
                    :name="item.id">

                <!-- 滑动单元格 -->
                <van-swipe-cell>
                    <!-- 插入自定义内容 -->
                    <!-- 商品卡片 -->
                    <van-card
                        :num="item.num"
                        :price="item.goods.price.toFixed(2)"
                        :desc="'库存剩余: ' + item.goods.stock +' 本'" 
                        :title="item.goods.title"
                        class="goods-card"
                        :thumb="item.goods.cover_url"
                        :lazy-load="true"
                    />

                    <!-- 步进器 -->
                    <van-stepper v-model="item.num" 
                            min="0" :max="item.goods.stock" />

                    <template #right>
                      <!-- 商品删除按钮 -->
                      <van-button square text="删除" type="danger" class="delete-button" />

                    </template>

                </van-swipe-cell>

            </van-checkbox>
            
        </van-checkbox-group>


        <!-- 提交订单 -->
        <van-submit-bar 
            :price="0" 
            button-text="提交订单" 
            @submit="onSubmit">

            <!-- 全选框 -->
            <van-checkbox 
                v-model="checkedAll" 
                :disabled="isShowStepper">全选</van-checkbox>

            <template #tip>
                共计<span class="totalNum">0</span>件商品，编辑商品数量
                <!-- 编辑按钮 -->
                <van-button 
                    size="small" 
                    :type="isShowStepper?'danger':'primary'"
                    @click="clickToEdit"
                >
                    {{isShowStepper?"完成":"编辑"}}
                </van-button> 
            </template>
        </van-submit-bar>




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
            list:[],

            // 复选框全部选择 商品id的数组
            result:[],
            // 全选按钮状态
            checkedAll:true,


            // 步进器组件显示隐藏
            isShowStepper:false

            
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
    },

    methods:{
        // 提交订单
        onSubmit(){},

        // 点击编辑
        clickToEdit(){}



    }
    
}
</script>

<style lang="less" scoped>
@import "../../assets/css//Cart/Cart.less";
</style>