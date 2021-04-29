<template>
  <div>
         <!-- 购物车商品卡片 -->

        <!-- 复选框组 嵌套商品卡片 -->
        <van-checkbox-group 
            v-model="result"
            @change="changeCheckbox"
        >

          <van-checkbox 
            v-for="item in list" :key="item.id"
            :name="item.id" >

            <van-swipe-cell>
                <van-card
                :price="item.goods.price.toFixed(2)"
                :desc="'商品库存: '+item.goods.stock"
                :title="item.goods.title"
                :thumb="item.goods.cover_url"
                :lazy-load="true"
                :origin-price="item.goods.price*1.5"
                />

                <!-- 步进器 -->
                <van-stepper 
                :name="item.id"
                v-model="item.num" 
                button-size="22" 
                disable-input 
                :max="item.goods.stock"
                @change="changeStepper(item.id,item.num)"
                />

                <!-- 滑动删除按钮 -->
                <template #right>
                <van-button 
                    square 
                    style="height:100%"
                    text="删除" type="danger" 
                    class="delete-button" 
                    @click="deleteGood(item.id)"/>
                </template>

            </van-swipe-cell>

          </van-checkbox>
          
        </van-checkbox-group>



  </div>
</template>

<script>
// 导入 api接口
import {
  // 获取购物车列表
  EditCart,
  // 获取购物车列表
  GetCart, 
  // 修改商品选中状态 checked
  CheckedCart,
  // 删除商品
  DeleteCart
} from "@/network/api.js"

export default {
  data(){
    return {
      // 商品列表
      list:[],
      // 商品卡片 复选框数组
      // 存放选中的复选框的商品id
      result:[]
    }
  },
  methods:{
      // 点击步进器数值，获取商品 num + id
      changeStepper(id,num){
        //  console.log("商品ID："+ id, "商品数量："+ num);

          // 发送修改购物车请求
          EditCart(id,{num:num}).then(res=>{

            // 防止短时间内修改点击次数过多，异步处理不过来，从而导致的数量显示不改变等问题
            // 使用等待框， 等待异步处理完
            this.$toast.loading({
              message: '修改中...',
              forbidClick: true,
            });

            // 修改内存中的list中的商品数量num（父组件传入的list）
            // 使内存中的商品数量 == 修改请求后的数量
            this.list.forEach(item => {
                if(item.id==id){
                    item.num = num
                }
            })

            console.log("发送求改购物车请求 成功");
          })
      },

      // 复选框选中状态改变
      changeCheckbox(){
          // UI默认是在数值变化时自动同步修改 复选框result数组
          // console.log(this.result);

          //发送修改请求，改变商品的选中状态
          CheckedCart({cart_ids: this.result})

          // 判断是否全选中
          // console.log(this.result);
          let checkAllFromChild
          if(this.result.length == this.list.length){
            checkAllFromChild = true
          }else{
            checkAllFromChild = false
          }

          // 双向绑定父子组件
          // 子组件全选不全选，控制父组件
          this.$emit("changeCheckbox",checkAllFromChild)
      },
    
      // 删除商品
      deleteGood(id){
        // 发送删除商品请求
        DeleteCart(id).then(res=>{
            console.log("商品删除成功");
            // 提示删除信息
            this.$toast.loading({
                message: '删除中...',
                forbidClick: true,
            });
            // 重新加载页面，刷新内存
            GetCart('include=goods').then(res=>{
              this.list = res.data
            })

        })

        
      },

  },

  created(){
        // 获得购物车 列表，
        GetCart('include=goods').then(res=>{
          // 获取渲染页面用 商品列表
          this.list = res.data;
          // console.log("在Card组件中获取的购物车列表",this.list);
          // 获取选中状态，并加入result数组
          this.result = []
          res.data.filter(item=>item.is_checked==1).map(item=>{
                this.result.push(item.id)
          })
          // console.log("选中商品的id数组",this.result);
        })
        
  }
}
</script>

<style lang="less" scoped>

.van-checkbox-group {
    padding: 10px;

    .van-checkbox {
        display: flex;
        width: 100%;
        background-color: #fafafa;
        margin: 10px 0;

        /deep/.van-checkbox__icon {
            background-color: #fff;
            margin-left: 5px;
        } 

        /deep/.van-checkbox__label {
            flex: 1;
        

            .van-swipe-cell {
                margin:10px 0;

                .van-card {
                    padding: 8px 16px 8px 0;
                }

                .van-stepper {
                    position: absolute;
                    right: 20px;
                    bottom: 10px;
                    // text-align: right;
                    // margin-right: 20px;
                    button {
                       .van-stepper__plus {
                           background-color: teal;
                       }
                   }
                }

            }

    }

    }

}



</style>