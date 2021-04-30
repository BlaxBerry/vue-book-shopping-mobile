<template>
  <div id="addressList">
    <!-- 标题栏 -->
    <HeaderBar>
    </HeaderBar>


    <!-- 空白状态 -->
    <van-empty  v-if="!list.length"
        description="还没有地址，快去添加" >
        <van-button block class="bottom-button"
            to="address_edit/">添加地址</van-button>
    </van-empty>
        

    <!-- 列表 -->
    <van-address-list
          v-if="list.length"
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
    />


  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"

// 导入 api接口
import {
  // 获取地址列表
  GetAddressList

} from "@/network/api.js"

export default {
  data() {
    return {
      // 所有的地址列表
      list:[],

      chosenAddressId: '1',
      
      type:'add',
      addressId:''
    };
  },

  components:{
      HeaderBar
  },

  methods: {
    // 添加地址按钮
    onAdd() {
        // 跳转到 编辑地址页面，修改路由属性 type为 add新增
        this.$router.push({
          path:'/address_edit',
          query:{
            type:'add'
          }
        })  
    },

    // 编辑地址
    onEdit(item) {
        // 跳转到 编辑地址页面,修改路由属性 type为 edit编辑
        this.$router.push({
          path:'/address_edit',
          query:{
            type:'edit',
            addressId:item.id
          }
        })  
    },
  },

  mounted(){
      // 提示消息
        this.$toast.loading({
        message: '保存成功...',
        forbidClick: true,
      });

      // 请求 地址列表
      GetAddressList().then(res=>{
        console.log("获取的全部地址列表",res);

        if(res.length = 0){
          this.list = []
          return
        }else{
          res.data.map(item=>{
            this.list.push({
              id: item.id,
              name:item,name,
              tel:item.phone,
              address:item.province + item.city + item.county + item.address,
              //数字转为bollean
              isDefault:!!item.is_default
            })
          })
          console.log(this.list);
        }
      })
  }
};
</script>

<style lang="less" scoped>
#addressList {
    padding: 50px 0;

    .van-address-list {
        padding: 20px 0;
        
        .van-address-list__bottom {
            bottom: 50px
        }
    }
}
</style>