<template>
  <div class="product-list">
      <!-- 商品列表 -->
      <!-- <div class="header">商品列表</div> -->
      <div class="prouduc-list-container">
          <!-- 三列表 -->
          <!-- tabcontrol -->
          <TabControl 
            :tabControlItems="tabControlItemTitle"
            @clickTabControlItem="clickTabControlItem"
          >
          </TabControl>

          <!-- 三列表 -->
          <div class="tab_content" 
              v-for="(item,index) in tabControlItemTitle" :key="index"
              v-show="index==tabControlItemNumber"
          > 

            <GoodItem 
                v-for="(item) in goods.list" :key="item.id"
                :goodImg="item.cover_url"
                :goodTitle="item.title"
                :goodPrice="item.price"
                :collectNumber="item.collects_count"
                :goodID="item.id"
            >
            </GoodItem>
          </div>
          
      </div>
  </div>
</template>

<script>
// 引入 Tab-control
import TabControl from "./childComps/TabControl.vue"
// 引入 GoodList商品列表
import GoodItem from "./childComps/GoodItem.vue"

// 引入api接口
import {GetHomeGoodsData} from "@/network/api.js" 


export default {
  data(){
    return {
      // tab-control 选项标题
      tabControlItemTitle:['畅销','精选','新书'],
      // 被点击的 tab-control-item 的index
      tabControlItemNumber:1,

      // 商品分页模型
      goods:{
        type:'sales',
        page:1,
        list:[]
      }
    }
  },
  components:{
    TabControl,
    GoodItem
  },
  methods:{
    // 跳转到详情页
    goDetail(id){
      this.$router.push({
        ath:'/detail',
          query:{
            id:id
          }
      })
    },
    // 获得被点击的tab-control-item的index
    clickTabControlItem(index){
      // console.log(index);
      this.tabControlItemNumber = index;
      // console.log(this.tabControlItemNumber);

      let types = ["sales","recommend","new"]
      // 切换列表后重新请求，然后重新渲染
      GetHomeGoodsData(types[index],this.goods.page).then(res=>{
      this.goods.list = res.goods.data
    }).catch(err=>{
      console.log(err);
    })
      
      // console.log(this.goods.list);
    }

  },
  created(){
      // type : sales/recommend/new
      // page : 1 

    GetHomeGoodsData(this.goods.type,this.goods.page).then(res=>{
      // console.log("111",res.goods);
      this.goods.list = res.goods.data
  
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style lang="less" scoped>
.tab_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 50px;
}
</style>