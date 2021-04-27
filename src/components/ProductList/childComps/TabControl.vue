<template>
  <div class="tab_control">
    <div class="tab_control-item" 
        v-for="(item,index) in tabControlItems" :key="index"
        :class="itemNumber==index?'active':''"
        @click="clickTabControlItem(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // tab-control-itenm
            itemNumber:1
        }
    },
    props:{
        "tabControlItems":{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        // tab-control-item 点击
        clickTabControlItem(index){
            this.itemNumber=index
            // 把index出给父组件 ProducList
            this.$emit('clickTabControlItem',index)
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/ProductList/TabControl.less";
</style>