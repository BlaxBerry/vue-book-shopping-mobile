<template>
  <div class="recommend">
      <div class="recommend_item" v-for="item in recommendList" :key="item.id">
        <a @click="goDetail(item.id)">
            <img :src="item.cover_url" alt="">
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
    flex-wrap: wrap;
    text-align: center;
    padding: 10px 0 30px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 10px;

    .recommend_item {
        flex: 20%;
        font-size: 15px;

        img {
            height: 70px;
            width: 70px;
            margin-bottom: 10px;
        }
    }
}
</style>