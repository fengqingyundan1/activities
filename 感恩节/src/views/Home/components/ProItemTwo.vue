<template>
  <div class="proItem-two" @click="goSmallPro" :class="{'no-margin':isMarginRight}">
    <img class="img" :src="item.main_image" />
    <div class="content">
      <div class="t1">{{item.product_name}}</div>
      <!-- <div class="t2">{{item.introduce}}</div> -->
      <div class="bottom">
        <div class="t3">
          <span class="t4-1">
            ￥
            <i>{{item.price}}</i>
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
.proItem-two {
  margin-right: 0.04rem;
  margin-bottom: 0.04rem;
  width: 2.4rem;
  height: 3.4rem;
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
  margin-top: 0.1rem;
  height: 2rem;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .t1 {
    margin-top: 0.1rem;
    padding: 0px 0.1rem;
    font-size: 0.18rem;
    height: 0.5rem;
    font-weight: 600;
    color: #333333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .bottom {
    padding: 0px 0.1rem;
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
        color: #cd5d5d;
        font-size: 0.18rem;
        i {
          font-size: 0.21rem;
          font-weight: 600;
          color: #cd5d5d;
        }
      }
      .t4-2 {
        transform: translateY(-0.02rem);
        margin-left: 0.04rem;
        display: flex;
        align-items: center;
        i {
          text-decoration: line-through;
          font-size: 0.2rem;
          font-weight: 600;
          color: #cccccc;
        }
      }
    }
    img {
      width: 0.4rem;
    }
  }
}
</style>