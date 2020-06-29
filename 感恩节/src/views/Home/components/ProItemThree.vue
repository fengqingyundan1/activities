<template>
  <div class="proItem-three" @click="goSmallPro" :class="{'no-margin':isMarginRight}">
    <img class="img" :src="item.main_image" />
    <div class="content">
      <div class="t1">{{item.product_name}}</div>
      <div class="bottom">
        <div class="t3">
          <!-- ￥
          <i>{{item.price}}</i>-->
          <span class="t4-1">
            ￥<i>{{item.price}}</i>
          </span>
          <span class="t4-2">
            <i>￥{{item.market_price}}</i>
          </span>
        </div>
        <img src="@images/i-15.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {},
    index: {}
  },
  computed: {
    isMarginRight() {
      let index = this.index + 1;
      if (index < 1) return false;
      if (index % 3 < 1) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    goSmallPro() {
      this.$wxSkip(this.item.gooddetailurl);
    }
  }
};
</script>
<style lang="less" scoped>
.proItem-three {
  width: 3.58rem;
  height: 4.74rem;
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.no-margin {
  margin-right: 0px;
}
.img {
  margin-top: 0.2rem;
  height: 2.6rem;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .t1 {
    height: 0.76rem;
    margin-top: 0.2rem;
    padding: 0px 0.2rem;
    font-size: 0.26rem;
    font-weight: 600;
    color: #333333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .t2 {
    padding: 0px 0.2rem;
    color: #e4b886;
    font-size: 0.16rem;
    font-weight: 500;
  }
  .bottom {
    transform: translateY(0.1rem);
    padding: 0px 0.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .t3 {
      display: flex;
      align-items: center;
      font-weight: 600;
      .t4-1 {
        display: flex;
        align-items: center;
        font-size: 0.22rem;
        color: #cd5d5d;
        i {
          font-size: 0.29rem;
          font-weight: 600;
          color: #cd5d5d;
        }
      }
      .t4-2 {
        // transform: translateY(0.0rem);
        display: flex;
        align-items:center;
        margin-left: 0.08rem;
        i {
          text-decoration: line-through;
          font-size: 0.24rem;
          font-weight: 600;
          color: #cccccc;
        }
      }
    }

    img {
      width: 0.6rem;
    }
  }
}
</style>