<template>
  <div class="header" :style="{backgroundImage:`url(${require('@images/i-1.png')})`}">
    <img class="love" src="@images/i-2.png" />
    <img class="text" src="@images/i-3.png" />
  </div>
</template>
<style lang="less" scoped>
.header {
  height: 7.43rem;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.love {
  position: absolute;
  top: 2.6rem;
  left: 0.86rem;
  width: 2.28rem;
}
.text {
  width: 5.68rem;
}
</style>