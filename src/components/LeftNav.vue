<template>
  <div class="leftNav">
    <div class="gotop" @click="gotop()"></div>
  </div>
</template>

<script>
export default {
  methods:{
    gotop() {
      if(!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (cb) {
          setTimeout(cb, 16.67)
        }
      }
      window.requestAnimationFrame(this.toTop)
    },
    toTop() {
      const currentPosition = document.documentElement.scrollTop || document.body.scrollTop
      const position = Math.floor(currentPosition / 1.3)
      if (currentPosition <= 0) return
      window.scrollTo(0, position)
      window.requestAnimationFrame(this.toTop)
    }
  }
}
</script>

<style lang="less">
.leftNav {
  position: fixed;
  // position: relative;
  top: 60px;
  left: 0;
  width: 15vw;
  height: calc(100vh - 130px);
  background-color: #ff2121;
  border-right: 1px solid #ccc;
  .gotop {
    position: fixed;
    bottom: 80px;
    left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #fff;
    // transform-origin: center;
    transition: all 0.3s;
    // z-index: 1000000000000;
  }
  .gotop::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-top: 3px solid #ff2121;
    border-right: 3px solid #ff2121;
    transform: translateX(-50%) translateY(-20%) rotateZ(-45deg);
    transition: all 0.3s;

  }
  .gotop:hover{
    cursor: pointer;
    width: 45px;
    height: 45px;
    bottom: calc(87.5px);
    left: calc(1297.5);
    background-color: rgba(#ff2121,0.5);
  }
  .gotop:hover.gotop::before {
    width: 10px;
    height: 10px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
  }
}
</style>