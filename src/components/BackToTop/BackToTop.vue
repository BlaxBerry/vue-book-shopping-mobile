<template>
  <div id="backToTop" v-show="isShow" @click="clickToGoTop">
    <!-- <img src="../../assets/images/top.png" alt=""> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  methods: {
    windowScroll() {
      // console.log(document.querySelector(".tab_content").offsetTop);
      if (window.pageYOffset >= 410) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    clickToGoTop() {
      window.scroll(0, 0);
    },
  },
};
</script>

<style lang="less" scoped>
#backToTop {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 50px;
  height: 50px;
  padding: 10px;
  background: rgba(250, 250, 250, 0.6) url("../../assets/images/top.png")
    no-repeat center;
  background-size: 40px auto;
  border-radius: 50%;
  box-shadow: 2px 2px 5px #333;
}
</style>
