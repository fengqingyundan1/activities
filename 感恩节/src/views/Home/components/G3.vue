<template>
  <div class="g3">
    <img class="img-1" src="@images/i-16.png" />
    <div class="list-wrap">
      <div class="list-one">
        <ProItemTwo :key="0" :item="homeData.productinfo[4][0]"></ProItemTwo>
        <ProItemTwo :key="1" :item="homeData.productinfo[4][1]"></ProItemTwo>
        <ProItemTwo :key="2" :item="homeData.productinfo[4][2]"></ProItemTwo>
      </div>
      <div class="list-1" style="margin-top:0.06rem">
        <ProItemThree :key="3" :item="homeData.productinfo[4][3]"></ProItemThree>
        <ProItemThree :key="4" :item="homeData.productinfo[4][4]"></ProItemThree>
      </div>
      <div class="list-2">
        <ProItemOne :key="5" :item="homeData.productinfo[4][5]"></ProItemOne>
      </div>
      
    </div>
  </div>
</template>
<script>
import ProItemOne from "./ProItemOne";
import ProItemTwo from "./ProItemTwo";

import ProItemThree from "./ProItemThree";
export default {
  components: { ProItemThree, ProItemOne, ProItemTwo },
  props: {
    homeData: {}
  }
};
</script>
<style lang="less" scoped>
.g3 {
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
.list-one {
  display: flex;
  justify-content: space-around;
}
.list-2 {
  margin-top: 0.06rem;
}
//  /deep/ .cube-scroll-content {
//             padding: 0px 0.2rem !important;
//         }
</style>