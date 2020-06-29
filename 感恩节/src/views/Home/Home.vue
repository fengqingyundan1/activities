<template>
  <div class="home" :style="{backgroundImage:`url(${require('@images/b-1.png')})`}">
    <Header></Header>
    <div class="clear" :style="{backgroundImage:`url(${require('@images/i-22.png')})`}">
      <div class="title">清空购物车活动规则</div>
      <div class="content">
        <div class="text">
          <div class="t1">凡在本场购买的用户，添加福利君微信<i>T190930</i>，进群参与清空购物车抽奖活动～</div>
          <div class="t1">PS:进群前需有已付款订单，最高<i>免单金额2000元</i>，快来添加福利君吧！</div>
        </div>
        <img src="@images/i-23.jpg" />
      </div>
    </div>
    <!-- <img class="clear" src="@images/i-22.png" /> -->
    <img @click="goUrl(homeData.lotteryurl)" class="cycle" src="@images/i-5.png" />
    <Miao v-if="homeData" :homeData="homeData"></Miao>
    <Bag v-if="homeData" :homeData="homeData"></Bag>
    <G1 v-if="homeData" :homeData="homeData"></G1>
    <G2 v-if="homeData" :homeData="homeData"></G2>
    <G3 v-if="homeData" :homeData="homeData"></G3>
    <G4 v-if="homeData" :homeData="homeData"></G4>
    <G5 v-if="homeData" :homeData="homeData"></G5>
    <G6 v-if="homeData" :homeData="homeData"></G6>
    <img class="qr" src="@images/i-20.png" />
    <div class="btn" @click="goSmallPro">
      <img src="@images/i-21.png" />
    </div>

    <div style="height:0.4rem"></div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Miao from "./components/Miao";
import Bag from "./components/Bag";
import G1 from "./components/G1";
import G2 from "./components/G2";
import G3 from "./components/G3";
import G4 from "./components/G4";
import G5 from "./components/G5";
import G6 from "./components/G6";
import { getHomeData } from "_api/home";

export default {
  name: "home",
  components: { Header, Miao, Bag, G1, G2, G3, G4, G5, G6 },
  data() {
    return {
      homeData: null
    };
  },
  mounted() {
    this.getHomeData();
  },
  methods: {
    goUrl(url) {
      window.location.href = url;
    },
    async getHomeData() {
      try {
        this.homeData = await getHomeData({
          id: 1
        });
        console.dir(this.homeData);
      } catch (error) {
        console.log(error);
      }
    },
    goSmallPro() {
      this.$wxSkip("/pages/index/index", "tab");
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.clear {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3.49rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: -0.7rem;
  .title {
    margin-top: 0.8rem;
    display: flex;
    justify-content: center;
    font-size: 0.3rem;
    color: #bb774c;
    font-weight: 500;
  }
  .content {
    margin-top: 0.1rem;
    display: flex;
    justify-content: center;
    .text {
      width: 5rem;
      top: 0px;
      left: 0px;
      .t1 {
         word-break:break-all;
        text-indent: 2em;
        line-height: 0.36rem;
        font-size: 0.22rem;
        color: rgb(209, 150, 112);
        i{
          color: #BB774C;
        font-size: 0.24rem;
          font-weight: 500;
        }
      }
    }
    img {
      width: 1.36rem;
      height: 1.36rem;
    }
  }
}
.cycle {
  width: 100%;
  margin-top: -0.3rem;
}
.qr {
  margin-top: 0.4rem;
  width: 100%;
}
.btn {
  margin-top: 0.2rem;
  padding: 0px 0.1rem;
  img {
    width: 100%;
  }
}
</style>