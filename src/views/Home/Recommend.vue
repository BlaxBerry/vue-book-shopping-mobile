<template>
  <div class="recommend">
      <div class="recommend_item" v-for="item in recommendList.slice(0,4)" :key="item.id">
        <a @click="goDetail(item.id)">
            <img v-lazy="item.cover_url" alt="">
            <div>{{item.title}}</div>
        </a>
      </div>
     
      
  </div>
</template>

<script>
export default {
    props:{
        "recommendList":{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        goDetail(id){
            this.$router.push({
                path:'/detail',
                query:{
                    id:id
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.recommend {
    width: 100%;
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    margin-bottom: 0px;

    .recommend_item {
        flex: 1;
        font-size: 15px;

        img {
            height: 80px;
            width: 80px;
            margin-bottom: 10px;
        }
    }
}
</style>