<template>
  <div class="musicLyric">
    <div class="bg" :style="{backgroundImage: `url(${this.$store.state.playlist[this.$store.state.playCurrentIndex].al.picUrl})`}">
      <img :src="this.$store.state.playlist[this.$store.state.playCurrentIndex].al.picUrl" alt="">
    </div>
    <div class="title">
      <div class="name">{{this.$store.state.playlist[this.$store.state.playCurrentIndex].name}}</div>
      <div class="author">{{this.$store.state.playlist[this.$store.state.playCurrentIndex].ar[0].name}}</div>
    </div>
    <div class="lyric">
      <p  v-for="(item, i) in $store.getters.lyricList" key="i">{{item.lyric}}</p>
    </div>
  </div>
</template>

<style lang="less">
.musicLyric {
  padding: 10px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #aaa;
  width: 100%;
  height: 100%;
  .bg {
    img {
      z-index: -1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      animation: imgblur 20s;
      animation-iteration-count: infinite;
      animation-timing-function: ease;
    }
  }
  .title {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    .name {
      color: #fff;
      font-size: 24px;
      margin-bottom: 5px;
    }
    .author {
      color: #eee;
      font-size: 12px;
    }
  }
  .lyric {
    height: 500px;
    overflow-y: scroll;
    
    p {
      font-size: 18px;
      color: #eee;
    }
  }
  .lyric::-webkit-scrollbar { width: 0 !important }
}

@keyframes imgblur {
  0% {
    filter: blur(200px);
  }
  50% {
    filter: blur(10px);
  }
  100% {
    filter: blur(200px);
  }
}
</style>
