<template>
  <div class="home">
    <LeftNav></LeftNav>
    <router-view></router-view>
    <div class="overbg">
      <div class="blue"></div>
      <div class="red"></div>
      <div class="yellow"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/HomeContent.vue'
import LeftNav from '@/components/LeftNav.vue'
// import{getLogStatus} from '@/api/index.js'
export default {
  components: {
    HomeContent,LeftNav
  },
  // async mounted() {
  //   let status = await getLogStatus()
  //   console.log(status)
  // }
}
</script>

<style lang="less">
.home {
  display: flex;
  .overbg {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .blue {
      position: absolute;
      width: 150px;
      height: 150px;
      background-color: rgba(135, 206, 250, 0.5);
      border-radius: 75px;
      animation: leftRight infinite 15s linear ;
    }
    .red {
      position: absolute;
      width: 150px;
      height: 150px;
      background-color: rgba(255, 182, 193, 0.5);
      border-radius: 75px;
      animation: leftRight infinite 16s linear;
      animation-delay: 2s;
    }
    .yellow {
      position: absolute;
      width: 150px;
      height: 150px;
      background-color: rgba(255, 255, 92, 0.5);
      border-radius: 75px;
      animation: leftRight infinite 16s linear ;
      animation-delay: 5s;
    }
  }
}
@keyframes leftRight {
    0% {
      left: 50%;
      top: 0
    }
    12.5%{
      left: calc(94% - 75px);
      top: 25%;
    }
    25% {
      left: 50%;
      top: 50%;

    }
    37.5%{
      left: 0;
      /* top: 100%; */
      top: 75%;

    }
    50%{
      left: 50%;
      top: calc(100% - 150px);
    }
    62.5% {
      left: calc(94% - 75px);
      top: 75%;

    }
    75% {
      left: 50%;
      top: 50%;

    }
    87.5% {
      left: 0;
      top: 25%;

    }
    100% {
      left: 50%;
      top: 0;
    }
  }
</style>
