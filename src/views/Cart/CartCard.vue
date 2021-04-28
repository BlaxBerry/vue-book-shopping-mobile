<template>
  <div>
         <!-- 购物车商品卡片 -->
        <van-swipe-cell v-for="item in list" :key="item.id">
            <van-card
                :price="item.goods.price.toFixed(2)"
                :desc="item.goods.description"
                :title="item.goods.title"
                :thumb="item.goods.cover_url"
                :lazy-load="true"
                :origin-price="item.goods.price*1.5"
            />

            <!-- 步进器 -->
            <van-stepper 
                v-model="item.num" 
                theme="round" 
                button-size="22" 
                disable-input 
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
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 商品卡片 步进器
      //stepperValue:1
    }
  },
  props:["list"]
}
</script>

<style lang="less" scoped>
.van-swipe-cell {
    margin:10px 0;
    padding: 0 0 10px;
    position: relative;


    .van-card {
        padding: 8px 16px 0;
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


</style>