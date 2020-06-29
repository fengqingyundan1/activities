<template>
  <div class="miao">
    <div class="title">
      <img class="img" src="@images/i-6.png" />
    </div>
    <div class="scroll-nav">
      <div class="content">
        <div class="item" :class="{active:isActive(1)}" @click="selectItem(1)">
          <div class="t1">11.27</div>
          <div class="t2">10:00-12:00</div>
        </div>
        <div class="item" :class="{active:isActive(2)}" @click="selectItem(2)">
          <div class="t1">11.27</div>
          <div class="t2">14:00-16:00</div>
        </div>
        <div class="item" :class="{active:isActive(3)}" @click="selectItem(3)">
          <div class="t1">11.28</div>
          <div class="t2">00:00-23:59</div>
        </div>
        <div class="item" :class="{active:isActive(4)}" @click="selectItem(4)">
          <div class="t1">11.29</div>
          <div class="t2">10:00-12:00</div>
        </div>
        <div class="item" :class="{active:isActive(5)}" @click="selectItem(5)">
          <div class="t1">11.29</div>
          <div class="t2">14:00-16:00</div>
        </div>
        <div class="item" :class="{active:isActive(6)}" @click="selectItem(6)">
          <div class="t1">11.30</div>
          <div class="t2">10:00-16:00</div>
        </div>
      </div>
    </div>
    <div style="margin-top:0.4rem"></div>
    <div class="list-wrap">
      <div class="list">
        <div v-if="rState=='isIn'" class="time">
          <span class="t1">本场秒杀仅剩</span>
          <Time :actEndTime="rEndTime"></Time>
        </div>
        <div v-if="rState=='notIn'" class="time">
          <span class="t1">敬请期待</span>
        </div>
        <div v-if="rState=='outIn'" class="time">
          <span class="t1">秒杀已结束</span>
        </div>
        <ProItemOne
          :startTime="rStartTime"
          :endTime="rEndTime"
          type="miao"
          :item="item"
          v-for="(item,index) in selecData"
          :key="index"
        ></ProItemOne>
      </div>
    </div>
  </div>
</template>
<script>
import ProItemOne from "./ProItemOne";
import Time from "./Time";
export default {
  components: { Time, ProItemOne },
  props: {
    homeData: {}
  },
  data() {
    return {
      selectIndex: 1,
      flag: false
    };
  },
  created() {
   try {
     
   } catch (error) {
     
   }

    setInterval(() => {
      this.flag = !this.flag;
    }, 1000);
    this.changIndex();
  },
  computed: {
    isActive() {
      return index => {
        return index == this.selectIndex;
      };
    },
    rState() {
      let flag = this.flag;
      let nowTime = new Date().getTime(); // 对结束时间进行处理渲染到页面
      let startTime = new Date(this.rStartTime).getTime();
      let endTime = new Date(this.rEndTime).getTime();
      if (nowTime - endTime > 0) {
        return "outIn";
      }
      if (nowTime - startTime < 0) {
        return "notIn";
      }
      return "isIn"; // 正在抢杀
    },
    selecData() {
      let data = this.homeData.productinfo[0];
      return data.slice(3 * (this.selectIndex - 1), this.selectIndex * 3);
    },
    rStartTime() {
      if (this.selectIndex == 1) {
        return "2019-11-27 10:00:00".replace(/\-/g, "/");
        // return "2019-11-27 09:17:00".replace(/\-/g, "/");
      } else if (this.selectIndex == 2) {
        return "2019-11-27 14:00:00".replace(/\-/g, "/");
      } else if (this.selectIndex == 3) {
        return "2019-11-28 00:00:00".replace(/\-/g, "/");
      } else if (this.selectIndex == 4) {
        return "2019-11-29 10:00:00".replace(/\-/g, "/");
      } else if (this.selectIndex == 5) {
        return "2019-11-29 14:00:00".replace(/\-/g, "/");
      } else {
        return "2019-11-30 10:00:00".replace(/\-/g, "/");
      }
    },
    rEndTime() {
      if (this.selectIndex == 1) {
        return "2019-11-27 12:00:00".replace(/\-/g, "/");
        // return "2019-11-27 09:18:00".replace(/\-/g, "/");
      } else if (this.selectIndex == 2) {
        return "2019-11-27 16:00:00".replace(/\-/g, "/");
      } else if (this.selectIndex == 3) {
        return "2019-11-28 23:59:59".replace(/\-/g, "/");
      } else if (this.selectIndex == 4) {
        return "2019-11-29 12:00:00".replace(/\-/g, "/");
      } else if (this.selectIndex == 5) {
        return "2019-11-29 16:00:00".replace(/\-/g, "/");
      } else {
        return "2019-11-30 16:00:00".replace(/\-/g, "/");
      }
    }
    // rActEndTime() {
    //   if (this.selectIndex == 1) {
    //     // return "2019-11-27 10:00:00";
    //     return "2019-11-27 10:00:00".replace(/\-/g, "/");
    //   } else if (this.selectIndex == 2) {
    //     return "2019-11-27 14:00:00".replace(/\-/g, "/");
    //   } else if (this.selectIndex == 3) {
    //     return "2019-11-28 00:00:00".replace(/\-/g, "/");
    //   } else if (this.selectIndex == 4) {
    //     return "2019-11-29 10:00:00".replace(/\-/g, "/");
    //   } else if (this.selectIndex == 5) {
    //     return "2019-11-29 14:00:00".replace(/\-/g, "/");
    //   } else {
    //     return "2019-11-30 10:00:00".replace(/\-/g, "/");
    //   }
    // }
  },
  methods: {
    selectItem(index) {
      this.selectIndex = index;
    },
    changIndex() {
      let arr = [
        {
          startTime: "2019-11-27 10:00:00",
          endTime: "2019-11-27 12:00:00"
        },
        {
          startTime: "2019-11-27 14:00:00",
          endTime: "2019-11-27 16:00:00"
        },
        {
          startTime: "2019-11-28 00:00:00",
          endTime: "2019-11-28 23:59:59"
        },
        {
          startTime: "2019-11-29 10:00:00",
          endTime: "2019-11-29 12:00:00"
        },
        {
          startTime: "2019-11-29 14:00:00",
          endTime: "2019-11-29 16:00:00"
        },
        {
          startTime: "2019-11-30 10:00:00",
          endTime: "2019-11-30 16:00:00"
        }
      ];
      let nowTime = new Date().getTime();
      let toDay = new Date().getDate();
      let arrSameDay = [];
      for (let i = 0; i < arr.length; i++) {
        let startText = arr[i].startTime.replace(/\-/g, "/");
        let endText = arr[i].endTime.replace(/\-/g, "/");
        let start = new Date(startText).getTime();
        let end = new Date(endText).getTime();
        let indexDay = new Date(startText).getDate();
        console.log(indexDay);
        console.log(toDay);
        if (indexDay == toDay) {
          arrSameDay.push(i + 1);
        }
        if (nowTime - end > 0) {
          continue;
        }
        if (nowTime - start < 0) {
          continue;
        }
        this.selectIndex = i + 1;
        return;
      }
      if (arrSameDay.length > 0) {
        // console.log(arrSameDay)
        this.selectIndex = arrSameDay[arrSameDay.length - 1];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
  justify-content: center;
  .img {
    height: 0.4rem;
  }
}
.scroll-nav {
  margin-top: 0.4rem;
  padding: 0px 0.1rem;

  .content {
    height: 0.62rem;
    border-radius: 0.3rem;
    background: #f7c5a2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
  }
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .t1 {
      color: #ce741d;
      font-size: 0.24rem;
    }
    .t2 {
      color: #ce741d;
      font-size: 0.18rem;
    }
  }
  .active {
    border-radius: 0.4rem;
    height: 0.7rem;
    background: #c36f3b;

    .t1,
    .t2 {
      color: #ffe0ca;
    }
    .t1 {
      font-size: 0.26rem;
    }
    .t2 {
      font-size: 0.18rem;
    }
  }
}
.list-wrap {
  padding: 0px 0.08rem;
}
.list {
  border-radius: 0.1rem;
  background: #c36f3b;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  padding-bottom: 0.3rem;
  .time {
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffe0ca;
    font-size: 0.3rem;
    .t1 {
      color: #ffe0ca;
      font-size: 0.3rem;
    }
  }
}
</style>