<template>
  <div id="category">
    <!-- 分类页面 -->

    <!-- 头部标题栏 -->
    <HeaderBar></HeaderBar>

    <div class="main_box">
      <!-- 左侧菜单 -->
      <div class="left_menu">
        <van-sidebar v-model="leftMenuItemActive">
                <!-- <van-sidebar-item title="全部" class="all"/> -->
          <van-collapse v-model="leftMenuItemCollapse" accordion>
            <van-collapse-item v-for="item in leftMenuCategories" :key="item.id"
                               :title="item.name" 
                               :name="item.name">
                <van-sidebar-item 
                          v-for="sonItem in item.children" :key="sonItem.id"
                          :title="sonItem.name"
                          @click="clickLeftMenuItem(sonItem.id)"/>
            </van-collapse-item>
          </van-collapse>
        </van-sidebar>
      </div>

      <!-- 右侧列表 -->
       <!-- 上部排序 -->
        <div class="right_top_order_tab">
          <TabControl 
              :tabControlItems="tabControlItemTitle"
              @clickTabControlItem="clickTabControlItem"
          ></TabControl>
        </div>

        <!-- 下部商品列表 -->
        <div class="right_bottom_list">
          <ProductCard 
              :list="lists.list">
          </ProductCard>

          <!-- 空白提示 -->
          <van-empty
            v-if="!lists.list.length"
            class="custom-image"
            image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
            description="描述文字">
              <van-button 
                    color=" #42b983"
                    class="bottom-button"
                    @click="reLoadList">
                    刷新图书列表
              </van-button>
          </van-empty>

        </div>
    </div>   


  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"
// 引入 Tab-control
import TabControl from "@/components/ProductList/childComps/TabControl.vue"
// 引入 GoodList商品列表
import ProductCard from "@/components/ProductCard/ProductCard.vue"

// 导入api接口
import {
  // 分类页全部数据
  GetCategoryData,
  // 分类排序
  GetCategoryOrderList
} from "@/network/api.js"

export default {
  data(){
    return {
      // 左侧分类菜单 选项
      leftMenuCategories:[],
      // 左侧菜单栏 选项 点击val
      leftMenuItemActive:0,
      // 左侧分类菜单 折叠选项 点击val
      leftMenuItemCollapse:1,

      // tab-control选项卡 选项标题
      tabControlItemTitle:['销量','价格','评价'],
      // 被点击的 tab-control-item 的index
      tabControlItemNumber:0,

      // 商品列表模型
      // 点击的分类选项的id + 排序的选项名称
      lists:{
        id:1,
        order:"sales",
        list:[]
      }
    }
  },
  components:{
    HeaderBar,
    TabControl,
    ProductCard
  },
  mounted(){
    // 加载提醒  
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
    });
    //获取 分类页数据
    GetCategoryData().then(res=>{
      console.log("Category分类页所有数据",res);
      this.leftMenuCategories = res.categories
      this.lists.list = res.goods.data
    })
  },
  methods:{
    // 获得点击的left-menu-item的id
    clickLeftMenuItem(id){
      // 加载提醒  
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
      });

      this.lists.id = id
      // console.log(this.lists.id);
      console.log("分类选项id: "+this.lists.id,"，排序方式: " + this.lists.order);
      this.init(this)
    },
    // 获得被点击的tab-control-item的index
    clickTabControlItem(index){
      // 加载提醒  
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
      });

      this.tabControlItemNumber = index;
      // console.log(this.tabControlItemNumber);
      let orders = ["sales","price","comments_count"]
      // console.log(orders[index]);
      this.lists.order = orders[index];
      // console.log(this.lists.order);
      // console.log("分类选项id: "+this.lists.id,"，排序方式: " + this.lists.order);
      
      this.init(this)

    },
    // 获取 分类排序后的商品列表
    init(who){
      // console.log(who.lists);
      console.log("分类选项id: "+this.lists.id,"，排序方式: " + this.lists.order);

      GetCategoryOrderList(this.lists.id,1,this.lists.order).then(res=>{
        // console.log(res);
        this.lists.list = res.goods.data
        // console.log(this.lists.list.length);
      
      })
   },
   // 空白状态时的重新加载列表
   reLoadList(){
      GetCategoryData().then(res=>{
        this.lists.list = res.goods.data
      })
   }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/Category/Category.less";
</style>