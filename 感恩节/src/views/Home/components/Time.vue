<template>
  <div class="dao">
    <!-- <div class="i1">{{day}}</div>
    <i>天</i>-->
    <div class="i1">{{hou}}</div>
    <i>:</i>
    <div class="i1">{{min}}</div>
    <i>:</i>
    <div class="i1">{{sec}}</div>
  </div>
</template>
<script>
export default {
  props: {
    actEndTime: {}
  },
  data() {
    return {
      day: "",
      hou: "",
      min: "",
      sec: "",
      interval: null,
      countDownList: "00天00时00分00秒"
    };
  },
  watch: {
    countDownList: {
      handler: function() {
        this.countDown();
      }
    }
  },
  mounted() {
    this.countDown();
  },

  methods: {
    timeFormat(param) {
      return param < 10 ? "0" + param : param;
    },
    countDown() {
      this.interval = setInterval(() => {
        // 获取当前时间，同时得到活动结束时间数组
        let newTime = new Date().getTime(); // 对结束时间进行处理渲染到页面
        let endTime = new Date(this.actEndTime).getTime();
        let obj = null; // 如果活动未结束，对时间进行处理
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000; // 获取天、时、分、秒
          let day = parseInt(time / (60 * 60 * 24));
          let hou = parseInt((time % (60 * 60 * 24)) / 3600);
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          //   this.day = day;
          this.hou = hou + day * 24;
          this.min = min;
          this.sec = sec;
          obj = {
            day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          };
        } else {
          // 活动已结束，全部设置为'00'
          obj = {
            day: "00",
            hou: "00",
            min: "00",
            sec: "00"
          };
          this.day = 0;
          this.hou = 0;
          this.min = 0;
          this.sec = 0;
          clearInterval(this.interval);
        }
        this.countDownList =
          obj.day + "天" + obj.hou + "时" + obj.min + "分" + obj.sec + "秒";
      }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
.dao {
  margin-left: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  .i1 {
    width: 0.5rem;
    height: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7c5a2;
    color: #ffffff;
    background: rgb(233, 134, 60);
    border-radius: 0.1rem;
  }
  i {
    color: #ffffff;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
}
</style>