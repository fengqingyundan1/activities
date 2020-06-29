<template>
  <div class="bag">
    <div class="title">
      <img class="img-1" src="@images/i-7.png" />
      <img class="img-2" src="@images/i-8.png" />
    </div>
    <img class="img-3" @click="skipSmall(0)" src="@images/i-9.png" />
    <img class="img-4" @click="skipSmall(1)" src="@images/i-10.png" />
    <img class="img-5" @click="skipSmall(2)" src="@images/i-11.png" />
    <div class="img-6">
      <img src="@images/i-12.png" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    homeData: {}
  },
  methods: {
    skipSmall(index) {
      let url = this.homeData.productinfo[1][index].gooddetailurl;
      this.$wxSkip(url);
    }
  }
};
</script>
<style lang="less" scoped>
.bag {
  margin-top: 0.5rem;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .img-1 {
    height: 0.36rem;
  }
  .img-2 {
    position: absolute;
    top: -0.6rem;
    right: 0px;
    width: 3.05rem;
  }
}
.img-3 {
  margin-top: 0.6rem;
  width: 100%;
}
.img-4 {
  margin-top: -0.2rem;
  width: 100%;
}
.img-5 {
  margin-top: -0.2rem;
  width: 100%;
}
.img-6 {
  padding: 0px 0.1rem;
  margin-top: 0.1rem;
  img {
    width: 100%;
  }
}
</style>