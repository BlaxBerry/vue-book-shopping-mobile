<template>
  <div id="cart">
    <!-- 订单页 -->
    
    <!-- 头部标题栏 -->
    <HeaderBar></HeaderBar>

    共{{list.length}}种

    <!-- 购物车商品卡片 -->
    <CartCard 
        :list="list"
    ></CartCard>

    <!-- 空白状态 -->
    <van-empty v-if="!list.length" 
        description="还没有商品哦" 
        image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
    >
        <van-button 
            rtype="primary" round block 
            style="width:200px" class="bottom-button" 
            color="#008080" 
            to="/home">
            前往购物
        </van-button>
    </van-empty>

    <!-- 提交栏 -->
    <van-submit-bar
        :price="3050" button-text="提交订单" 
        @submit="onSubmit">
        <!-- 复选框 -->
        <van-checkbox v-model="checkedAll">全选</van-checkbox>
        <!-- 修改 -->
        <template #tip>
          你的收货地址不支持同城送, 
          <!-- <span @click="onClickEditAddress">修改地址</span> -->
        </template>
    </van-submit-bar>
  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"
// 导入 购物车商品卡片
import CartCard from "./CartCard.vue"

// 导入 api接口
import {
  // 获取购物车列表
  GetCart
} from "@/network/api.js"

export default {
  data(){
    return {
      // 购物车列表
      list:[],
      // 商品卡片 步进器
      // stepperValue:1
      // 复选框
      checkedAll:true
    }
  },
  components:{
    HeaderBar,
    CartCard
  },
  methods:{
    // 提交订单
    onSubmit(){
      this.$toast.success("提交成功")
    },
   
  },
  mounted(){
    // 加载提醒  
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
    });
    // 获取购物车列表
    GetCart('include=goods').then(res=>{
      console.log("获取购物车列表",res);
      this.list = res.data
    })
  }
}
</script>

<style lang="less" scoped>
#cart {
  padding: 50px 0 100px;

  .van-submit-bar {
    bottom: 50px;
  }
}

</style>