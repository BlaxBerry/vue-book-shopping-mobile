<template>
  <div>
         <!-- 购物车商品卡片 -->

        <!-- 复选框组 嵌套商品卡片 -->
        <van-checkbox-group v-model="checkedItemResult">

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
                @change="clickStepper(item.id,item.num)"
                />

                <!-- 滑动删除按钮 -->
                <template #right>
                <van-button 
                    square 
                    style="height:100%"
                    text="删除" type="danger" 
                    class="delete-button" />
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
  EditCart
} from "@/network/api.js"

export default {
  data(){
    return {
      // 商品卡片 复选框数组
      // 存放选中的复选框的商品id
      checkedItemResult:[]
    }
  },
  props:["list"],
  methods:{
      // 点击步进器数值，获取商品 num + id
      clickStepper(id,num){
          console.log("商品ID："+ id, "商品数量："+ num);
          
          num=Number(num)

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
      }
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