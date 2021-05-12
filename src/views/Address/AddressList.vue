<template>
  <div id="addressList">
    <!-- 标题栏 -->
    <HeaderBar>
    </HeaderBar>


    <!-- 空白状态 -->
    <van-empty  v-if="!list.length"
        description="还没有地址，快去添加" >
        <van-button block class="bottom-button"
            @click="onAdd">添加地址</van-button>
    </van-empty>
        

    <!-- 列表 -->
    <van-address-list
          v-if="list.length"
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
    />


  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"

// 导入 api接口
import {
  // 获取地址列表
  GetAddressList,
  // 设为默认地址
  SetDefaultAddress

} from "@/network/api.js"

export default {
  data() {
    return {
      // 所有的地址列表
      list:[],
      // checkbox选中，address地址的id
      chosenAddressId: '0',
      // 跳转的页面是add新增还是edit编辑
      type:'add',
    
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
    // VantUI 默认参数item是点击对象
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

    // 复选框状态变化时
    onSelect(item){
      // 获取选中的地址的 id
      console.log(item.id);

      // 发送请求，设为默认
      SetDefaultAddress(item.id).then(res=>{
          console.log(res);
          // 刷新页面
          this.$router.go(0)
          
      })

    }
  },

  created(){
      // 提示消息
        this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
      });

      // 请求 地址列表
      GetAddressList().then(res=>{
          console.log("获取的全部地址列表",res);

          // 获取所有 地址列表，并渲染
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
                      isDefault:!!item.is_default})
              })
              // console.log(this.list);
          }

          // checkebbox 选中状态
          // 根据 获取的地址list中 is_default属性是true的，获取其id并赋值给 控制选中的变量
          this.list.filter(item=>{
              if(item.isDefault){
                  // console.log(item.id);
                  this.chosenAddressId = item.id
              }
          })

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