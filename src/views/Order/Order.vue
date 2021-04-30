<template>
  <div id=order>
    <!-- Order订单 -->
    <!-- Detail 详情页 -->
    <HeaderBar></HeaderBar>
      
    <!-- 发货地址 -->
    <van-contact-card
        type="edit"
        :name="this.address.name"
        :tel="this.address.phone"
        @click="$router.push('/address')"
    />


    <!-- 商品卡片 -->
    <van-card v-for="item in list" :key="item.id"
      :num="item.num"
      :price="item.goods.price"
      :title="item.goods.title"
      :thumb="item.goods.cover_url"
      :lazy-load="true"
    />

    
    <!-- 提交订单 -->
    <van-submit-bar 
       :price="getTotalPrice * 100" 
       button-text="创建订单" 
       @submit="onSubmit" />


  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"

// 导入api接口
import {
  // 获取订单预览
  GetAllOrderPreview,
  // 创建生成订单
  CreateOrder
} from "@/network/api.js"

export default {
  data(){
    return {
      // 购物车列表
      list:[],
      // address地址
      address:[],
    }
  },

  components:{
    HeaderBar
  },

  methods:{
    // 提交订单
    onSubmit(){
      // 创建提交订单
      CreateOrder({
        address_id : this.address.id
      }).then(res=>{
        console.log(res);

        this.$toast.success('创建订单成功')
      })
    },

    //初始化
    init(){
      this.$toast.loading({
          message: '加载中...',
          forbidClick: true,
      })

      // 请求获取订单预览
      // 获得 发货地址Address 和 购物车Cart内容
      GetAllOrderPreview().then(res=>{
        console.log(res);
        // 购物车数据
        this.list = res.carts
        // 发货地址
        // 过滤，获取默认地址
        let addressFormResponese = res.address.filter(item=>{
          if(item.is_default == 1){
            // console.log(item);
            this.address = item
            // console.log(this.address);
          }
        })

        // 如果用户还没有设置 发货地址
        if(this.address.length==0){
          console.log('还没添加地址');
        }
          
        // }else{
        //   this.address = addressFormResponese[0]
        // }
        console.log(this.list,this.address);

      })
    }

  },

  computed:{
    // 计算总价
    getTotalPrice(){
        let sum = 0;
        // 过滤筛选出 获取的list中被选中的商品
        this.list.forEach(item=>{
            sum += item.num * item.goods.price
        })
        return sum
    }
  },
  
  mounted(){
    // 调用初始化
    this.init()
  }
}
</script>

<style lang="less" scoped>
#order {
  padding: 50px 0 100px;

    .van-submit-bar {
        padding-bottom: 50px;
    }
}
</style>