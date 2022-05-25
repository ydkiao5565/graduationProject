<template>
  <div class="loaderBody">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.loaderBody{
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  width: 100vw;
  background:#fff;
  margin:0;
  .loader{
    height:20em;
    width:20em;
    position:relative;
    span{
      margin-left: -140px;
      position:absolute;
      width:2em;
      height:2em;
      background:#ff2121;
      border-radius:50%;
      top:calc(50% - 2em / 2);
      animation:animate 2s linear infinite;
      transform-origin:10em  top;
      animation-delay:calc((var(--n) - 5) * 0.1s)
    }
  }
}
@keyframes animate{
  to{
    transform:rotatex(360deg) rotateZ(360deg);
  }
}
.loader span:nth-child(1) {
    --n: 1;
}

.loader span:nth-child(2) {
    --n: 2;
}

.loader span:nth-child(3) {
    --n: 3;
}

.loader span:nth-child(4) {
    --n: 4;
}

.loader span:nth-child(5) {
    --n: 5;
}
.loader span:nth-child(6) {
    --n: 6;
}

.loader span:nth-child(7) {
    --n: 7;
}

.loader span:nth-child(8) {
    --n: 8;
}

</style>