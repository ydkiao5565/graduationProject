<template>
  <div class="loginBg">
    <div class="bg">
      <div class="inner">
        <img src="@/assets/img/mainbg.png" alt="">
        <img src="@/assets/img/mainbg.png" alt="">
        <img src="@/assets/img/mainbg.png" alt="">
        <img src="@/assets/img/mainbg.png" alt="">
        <img src="@/assets/img/mainbg.png" alt="">
        <img src="@/assets/img/mainbg.png" alt="">
        <img src="@/assets/img/mainbg.png" alt="">
        <img src="@/assets/img/mainbg.png" alt="">
        <img src="@/assets/img/mainbg.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="less">
.loginBg {
  .bg {
      position: fixed;
      top: 60px;
      left: 0;
      height: calc(100vh - 60px);
      overflow: hidden;
      z-index: -1;
      .inner {
        display: flex;
        flex-wrap: wrap;
        width: 2943px;
        animation-name: leftmove;
        animation-duration: 25s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    }
}
@keyframes leftmove {
      from {
        transform: translateX(0) translateY(-1374px);
      }

      to {
        transform: translateX(-981px) translateY(-687px);
      }
}
</style>