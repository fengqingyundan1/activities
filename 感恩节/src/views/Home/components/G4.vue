<template>
  <div class="g4">
    <img class="img-1" src="@images/i-17.png" />
    <div class="list-wrap">

      <div class="list-1" style="margin-top:0.06rem">
        <ProItemThree :key="0" :item="homeData.productinfo[5][0]"></ProItemThree>
        <ProItemThree :key="1" :item="homeData.productinfo[5][1]"></ProItemThree>
      </div>
      <div class="list-1" style="margin-top:0.06rem">
        <ProItemThree :key="2" :item="homeData.productinfo[5][2]"></ProItemThree>
        <ProItemThree :key="3" :item="homeData.productinfo[5][3]"></ProItemThree>
      </div>
      <div class="list-1" style="margin-top:0.06rem">
        <ProItemThree :key="4" :item="homeData.productinfo[5][4]"></ProItemThree>
        <ProItemThree :key="5" :item="homeData.productinfo[5][5]"></ProItemThree>
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
.g4 {
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