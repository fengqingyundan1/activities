<template>
  <div class="g1">
    <img class="img-1" src="@images/i-13.png" />
    <div class="list-wrap">
      <div class="list">
        <ProItemTwo
          :index="index"
          :item="item"
          v-for="(item,index) in homeData.productinfo[2]"
          :key="index"
        ></ProItemTwo>
      </div>
    </div>
  </div>
</template>
<script>
import ProItemTwo from "./ProItemTwo";
export default {
  components: { ProItemTwo },
  props: {
    homeData: {}
  }
};
</script>
<style lang="less" scoped>
.img-1 {
  width: 100%;
}
.list-wrap {
  margin-top: -0.2rem;
  padding: 0px 0.1rem;
}
.list {
  display: flex;
  flex-wrap: wrap;
}

</style>