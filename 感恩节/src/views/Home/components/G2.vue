<template>
  <div class="g2">
    <img class="img-1" src="@images/i-14.png" />
    <div class="list-wrap">
      <div class="list-1">
        <ProItemThree :key="0" :item="homeData.productinfo[3][0]"></ProItemThree>
        <ProItemThree :key="1"  :item="homeData.productinfo[3][1]"></ProItemThree>
      </div>
      <div class="list-2">
        <ProItemOne :key="2"  :item="homeData.productinfo[3][2]"></ProItemOne>
        <ProItemOne :key="3" :item="homeData.productinfo[3][3]"></ProItemOne>
      </div>
      <div class="list-1">
        <ProItemThree :key="4" :item="homeData.productinfo[3][4]"></ProItemThree>
        <ProItemThree :key="5" :item="homeData.productinfo[3][5]"></ProItemThree>
      </div>
    </div>
  </div>
</template>
<script>
import ProItemOne from "./ProItemOne";
import ProItemThree from "./ProItemThree";
export default {
  components: { ProItemThree,ProItemOne },
  props: {
    homeData: {}
  }
};
</script>
<style lang="less" scoped>
.g2 {
  margin-top: 0.3rem;
}
.img-1 {
  width: 100%;
}
.list-wrap {
  margin-top: -0.2rem;
  padding: 0px 0.1rem;
}

.list-1 {
  display: flex;
  justify-content: space-between;
}
.list-2{
    margin-top: 0.2rem;
}
</style>