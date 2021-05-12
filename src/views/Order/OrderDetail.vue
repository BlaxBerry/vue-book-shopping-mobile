<template>
  <div id="orderDetail">
    <!-- Order订单 -->
    <!-- Detail 详情页 -->
    <HeaderBar></HeaderBar>


    
  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue";

// 导入api接口
import {
  // 查询支付状态
  GetPayStatus,
} from "@/network/api.js";

export default {
  data(){
    return {}
  },
  components:{
    HeaderBar
  }
};
</script>

<style lang="less" scoped></style>
