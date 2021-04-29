<template>
  <div id="addressList">
    <!-- 标题栏 -->
    <HeaderBar>
        <span slot="left_search" class="go_back" @click="$router.go(-1)">
            <i class="iconfont icon-back"></i>返回
        </span>
    </HeaderBar>


    <!-- 空白状态 -->
    <van-empty description="还没有地址，快去添加" >
        <van-button block class="bottom-button"
            to="address_edit/">添加地址</van-button>
    </van-empty>
        

    <!-- 列表 -->
    <!-- <van-address-list
          v-model="chosenAddressId"
          :list="list"
          :disabled-list="disabledList"
          disabled-text="以下地址超出配送范围"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
    /> -->



  </div>
</template>

<script>
// 导入 头部标题栏
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue"

export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '〒100-8924 東京都千代田区永田町１丁目１０−１',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '〒100-0014 東京都千代田区永田町１丁目７−１',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
    };
  },
  components:{
      HeaderBar
  },
  methods: {
    // 添加地址按钮
    onAdd() {
    // 跳转到 编辑地址页面
        this.$router.push('/address_edit')   
    },
    // 编辑地址
    onEdit(item, index) {
    //   Toast('编辑地址:' + index);
    },
  },
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