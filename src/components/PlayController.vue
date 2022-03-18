<template>
  <div class="playController">
    <div class="left">
      <img :src="this.$store.state.playlist[this.$store.state.playCurrentIndex].al.picUrl" alt="">
      <div class="detail">
        <div class="title">{{this.$store.state.playlist[this.$store.state.playCurrentIndex].name}}</div>
        <div class="author">{{this.$store.state.playlist[this.$store.state.playCurrentIndex].ar[0].name}}</div>
      </div>
    </div>
    <div class="center">
      <div id="pre" @click="preMusic()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangyishoushangyige-copy"></use>
        </svg>
      </div>
      <div id="play" @click="playMusic()">
        <svg v-if="this.$store.state.ispaused" class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <svg v-else class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconstop-copy"></use>
        </svg>
      </div>
      <div id="next" @click="nextMusic()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiayigexiayishou-copy"></use>
        </svg>
      </div>
    </div>
    <div class="right">
      <div class="like">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-aixin-copy"></use>
        </svg>
      </div>
      <div class="select">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao-black"></use>
        </svg>
      </div>
    </div>
    <audio ref="audio"  :src="`https://music.163.com/song/media/outer/url?id=${this.$store.state.playlist[this.$store.state.playCurrentIndex].id}.mp3`"></audio>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit('setPaused',true)
  },
  methods:{
    playMusic() {
      if(this.$refs.audio.paused){
        this.$refs.audio.play()
        this.$store.commit('setPaused',false)
      }
      else{
        this.$refs.audio.pause()
        this.$store.commit('setPaused',true)

      }
    },
    preMusic() {
      this.$store.commit('setPlayCurrent',this.$store.state.playCurrentIndex-1)
      if(!this.$refs.audio.paused){
        this.$refs.audio.pause()
        this.$store.commit('setPaused',true)
      }
    },
    nextMusic() {
      this.$store.commit('setPlayCurrent',this.$store.state.playCurrentIndex+1)
      if(!this.$refs.audio.paused){
        this.$refs.audio.pause()
        this.$store.commit('setPaused',false)
        this.$store.commit('setPaused',true)
      }
    }
  },
  
}
</script>

<style lang="less">
.playController {
  background-color: #fff;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    height: 100%;
    flex: 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 12px;
    img {
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 5px;
      margin-right: 10px;
    }
    .detail {
      text-align: left;
      .title {
        font-size: 15px;
      }
      .author {
        margin-top: 5px;
        font-size: 14px;
        color: #999;
      }
    }
  }
  .center {
    height: 100%;
    flex: 4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #play {
      cursor: pointer;
      background-color: #eee;
      border-radius: 20px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        margin-left: 3px;
        width: 20px;
        height: 20px; 
      }
    }
    #play:hover {
      background-color: #ddd;
    }
    #pre {
      margin-left: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        cursor: pointer;
        width: 15px;
        height: 15px;
      }
    }
    #next {
      margin-right: 200px ;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        cursor: pointer;
        width: 15px;
        height: 15px;
      }
    }
  }
  .right {
    height: 100%;
    flex: 3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .icon {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
    .select {
      margin:0 15px;
    }
  }
}
</style>