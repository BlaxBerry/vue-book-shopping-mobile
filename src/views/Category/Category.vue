<template>
  <div id="category">
    <!-- 分类页面 -->

    <!-- 头部标题栏 -->
    <HeaderBar></HeaderBar>

    <div class="main_box">
      <!-- 左侧菜单 -->
      <div class="left_menu">
        <van-sidebar v-model="leftMenuItemActive">
        
          <van-collapse v-model="leftMenuItemCollapse" accordion>
            <van-collapse-item v-for="item in leftMenuCategories" :key="item.id"
                               :title="item.name" 
                               :name="item.name">
                <van-sidebar-item 
                          v-for="sonItem in item.children" :key="sonItem.id"
                          :title="sonItem.name"/>
            </van-collapse-item>
          </van-collapse>
        </van-sidebar>
      </div>

      <!-- 右侧列表 -->
       <!-- 上部排序 -->
        <div class="right_top_order_tab">
          <TabControl :tabControlItems="tabControlItemTitle"></TabControl>
        </div>
        <!-- 下部商品列表 -->
        <div class="right_bottom_list">2222</div>
    </div>   


  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"
// 引入 Tab-control
import TabControl from "@/components/ProductList/childComps/TabControl.vue"
// 引入 GoodList商品列表
// import GoodItem from "./childComps/GoodItem.vue"

// 导入api接口
import {GetCategoryData} from "@/network/api.js"

export default {
  data(){
    return {
      // 左侧分类菜单 选项
      leftMenuCategories:[],
      // 左侧菜单栏 选项 点击val
      leftMenuItemActive:0,
      // 左侧分类菜单 折叠选项 点击val
      leftMenuItemCollapse:1,

      // tab-control 选项标题
      tabControlItemTitle:['畅销','精选','新书'],
    }
  },
  components:{
    HeaderBar,
    TabControl
  },
  created(){
    //获取 分类页数据
    GetCategoryData().then(res=>{
      console.log("Category分类页所有数据",res);
      this.leftMenuCategories = res.categories
    })
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/Category/Category.less";
</style>