<template>
  <div class="backToTop">
      <!-- <img src="../../assets/images/top.png" alt=""> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.backToTop {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 50px;
    height: 50px;
    padding: 10px;
    background:rgba(204, 204, 204, 0.5) url("../../assets/images/top.png") no-repeat center;
    background-size: 40px auto;
    border-radius: 50%;
    box-shadow: 2px 2px 5px #333;


}
</style>