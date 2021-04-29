<template>
  <div>
    <!-- 标题栏 -->
    <HeaderBar>
        <span slot="left_search" class="go_back" @click="$router.go(-1)">
            <i class="iconfont icon-back"></i>返回
        </span>
    </HeaderBar>



    <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
    />


  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"

export default {
    data() {
        return {
          areaList:{
            province_list: {
              110000: '北京市',
              120000: '天津市',
            },
            city_list: {
              110100: '北京市',
              120100: '天津市',
            },
            county_list: {
              110101: '东城区',
              110102: '西城区',
              // ....
            },
          },
          searchResult: [],
        };
    },

    methods: {
        onSave() {
        //   Toast('save');
        },
        onDelete() {
        //   Toast('delete');
        },
        onChangeDetail(val) {
          if (val) {
            this.searchResult = [
              {
                name: '黄龙万科中心',
                address: '杭州市西湖区',
              },
            ];
          } else {
            this.searchResult = [];
          }
        },
    },

    components:{
        HeaderBar
    }
}
</script>

<style lang="less" scoped>

</style>