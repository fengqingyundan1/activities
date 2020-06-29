<template>
  <div class="proItem-one" @click="goSmallPro">
    <img class="img" :src="item.main_image" />
    <div class="content">
      <div class="t1">{{item.product_name}}</div>
      <div class="t2">{{item.introduce}}</div>
      <div class="bottom">
        <div class="t3">
          ￥
          <i>{{item.price}}</i>
        </div>
        <div class="t4">￥{{item.market_price}}</div>
      </div>
    </div>
    <div class="btn" :style="{'backgroundColor':rBack}">{{rText}}</div>
  </div>
</template>
<script>
export default {
  props: {
    item: {},
    type: {},
    startTime: {},
    endTime: {}
  },
  data() {
    return {
      flag: false
    };
  },
  created() {
    setInterval(() => {
      this.flag = !this.flag;
    }, 1000);
  },
  computed: {
    rBack() {
      if (this.rState == "isIn") {
        return "#bd7446";
      } else if (this.rState == "notIn") {
        return "#cccccc";
      } else {
        return "#bd7446";
      }
    },
    rState() {
      let flag = this.flag;
      let nowTime = new Date().getTime(); // 对结束时间进行处理渲染到页面
      let startTime = new Date(this.startTime).getTime();
      let endTime = new Date(this.endTime).getTime();
      if (nowTime - endTime > 0) {
        return "outIn";
      }
      if (nowTime - startTime < 0) {
        return "notIn";
      }
      return "isIn"; // 正在抢杀
    },
    rText() {
      if (this.type && this.type == "miao") {
        if (this.rState == "isIn") {
          return "去抢购";
        } else if (this.rState == "notIn") {
          return "即将开始";
        } else {
          return "立即购买";
        }
      } else {
        return "立即购买";
      }
    }
  },
  methods: {
    goSmallPro(url) {
      if (this.type == "miao") {
        if (this.rState != "notIn") {
          console.log("点击了");
          this.$wxSkip(this.item.gooddetailurl);
        } else {
          console.log("no");
        }
      } else {
        this.$wxSkip(this.item.gooddetailurl);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.proItem-one {
  margin-bottom: 0.16rem;
  height: 2.84rem;
  width: 100%;
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;
  position: relative;
}
.img {
  // width: 1.72rem;
  height: 2.42rem;
}
.btn {
  right: 0px;
  bottom: 0.3rem;
  position: absolute;
  width: 1.3rem;
  height: 0.6rem;
  color: #ffffff;
  font-size: 0.26rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.content {
  transform: translateY(-0.2rem);
  width: 4rem;
  .t1 {
    font-size: 0.34rem;
    font-weight: 600;
    height: 0.8rem;
    color: #333333;
  }
  .t2 {
    margin-top: 0.1rem;
    color: #e4b886;
    font-size: 0.28rem;
    font-weight: 500;
  }
  .bottom {
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    .t3 {
      font-size: 0.4rem;
      font-weight: 600;
      color: #cd5d5d;
      i {
        font-size: 0.42rem;
        font-weight: 500;
        color: #cd5d5d;
        margin-left: -0.14rem;
      }
    }
    .t4 {
      margin-left: 0.2rem;
      color: #cccccc;
      font-size: 0.32rem;
      text-decoration: line-through;
    }
  }
}
</style>