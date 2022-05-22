<template>
  <div ref="playContorller" class="playController">
    <div class="left" @click="changeLyPage()" ref="left">
      <img :src="this.$store.state.playlist[this.$store.state.playCurrentIndex].al.picUrl" alt="" >
      <svg v-if="isLyric" class="icon" id="down" aria-hidden="true">
        <use xlink:href="#icon-fanhui-copy-copy-copy"></use>
      </svg>
      <svg v-else class="icon" id="up" aria-hidden="true">
        <use xlink:href="#icon-fanhui-copy-copy"></use>
      </svg>
      <div class="detail">
        <div class="title">{{this.$store.state.playlist[this.$store.state.playCurrentIndex].name}}</div>
        <div class="author">{{this.$store.state.playlist[this.$store.state.playCurrentIndex].ar[0].name}}</div>
      </div>
    </div>
    <div class="center">
      <div id="pre" @click="preMusic()" ref="pre">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangyishoushangyige-copy"></use>
        </svg>
      </div>
      <div id="play" @click="playMusic()" ref="play">
        <svg v-if="this.$store.state.ispaused" class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <svg v-else class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconstop-copy"></use>
        </svg>
      </div>
      <div id="next" @click="nextMusic()" ref="next">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiayigexiayishou-copy"></use>
        </svg>
      </div>
    </div>
    <div class="right">
      <div class="like" ref="like">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-aixin-copy"></use>
        </svg>
      </div>
      <div class="select" ref="select">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao-black"></use>
        </svg>
      </div>
    </div>
    <div class="follow" ref="follow"></div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${this.$store.state.playlist[this.$store.state.playCurrentIndex].id}.mp3`"></audio>
    <MusicLyic></MusicLyic>
  </div>
</template>

<script>
import MusicLyric from '@/components/MusicLyric.vue'
import {mapState} from 'vuex'

export default {
  data() {
    return {
      isLyric:false
    }
  },
  computed:{
    ...mapState(['currentTime'])
  },
  mounted() {
    this.$store.commit('setPaused',true)
    this.$store.dispatch('reqLyric',{id: this.$store.state.playlist[this.$store.state.playCurrentIndex].id})
    // console.log(this.$store.state.currentTime)

    //监听鼠标移动
    this.$refs.playContorller.addEventListener('mousemove',this.moveBlock)
    this.$refs.playContorller.addEventListener('mouseleave',this.blockout)
    this.$refs.playContorller.addEventListener('mouseenter',this.blockin)
  },
  updated() {
    this.$store.dispatch('reqLyric',{id: this.$store.state.playlist[this.$store.state.playCurrentIndex].id})
    // console.log(this.$store.state.currentTime)
  },
  components: {
    MusicLyric
  },
  watch: {
    currentTime:function(newValue) {
      console.log(newValue*1000)
      var lastTime = this.$store.getters.lyricList[this.$store.getters.lyricList.length-2].time
      console.log(lastTime)
      if(newValue*1000>lastTime) {
        this.nextMusic()
        // this.playMusic()
      }
    }
  },
  methods:{
    changeLyPage() {
      console.log(this.isLyric)
      if(!this.isLyric) {
        this.$router.push({path: '/lyric'})
        this.$refs.playContorller.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
        this.isLyric = !this.isLyric
        
      }
      else {
        this.$router.go(-1)
        this.$refs.playContorller.style.backgroundColor = "rgba(255, 255, 255, 1)"
        this.isLyric = !this.isLyric
      }
    },
    playMusic() {
      //当音乐处于暂停状态
      if(this.$refs.audio.paused){
        this.$refs.audio.play()
        //更改状态为播放
        this.$store.commit('setPaused',false)
        //添加定时器，监控歌曲进度
        this.UpdateTime()
      }
      //当歌曲处于播放状态
      else{
        this.$refs.audio.pause()
        //更改状态为暂停
        this.$store.commit('setPaused',true)
        //清除定时器
        clearInterval(this.$store.state.id)
      }
    },
    //定时器方法，每0.5s更新当前歌曲播放时间
    UpdateTime() {
      this.$store.state.id = setInterval(() => {
        this.$store.commit('setCurrentTime',this.$refs.audio.currentTime)
      }, 500);
    },
    preMusic() {
      if(this.$store.state.playCurrentIndex>0) {
        this.$store.commit('setPlayCurrent',this.$store.state.playCurrentIndex-1)
      }
      if(!this.$refs.audio.paused){
        this.$refs.audio.pause()
        this.$store.commit('setPaused',true)
      }
    },
    nextMusic() {
      if(this.$store.state.playCurrentIndex<this.$store.state.playlist.length-1) {
        this.$store.commit('setPlayCurrent',this.$store.state.playCurrentIndex+1)
      }
      if(!this.$refs.audio.paused){
        this.$refs.audio.pause()
        // this.$store.commit('setPaused',false)
        this.$store.commit('setPaused',true)
      }
    },
    moveBlock() {
      var block = this.$refs.follow
      // block.style.display = 'block'
      // console.log('sss'+this.$refs.play.offsetLeft)
      var prew = this.$refs.pre.offsetLeft + this.$refs.pre.offsetWidth/2
      var preh = this.$refs.pre.offsetTop + this.$refs.pre.offsetHeight/2
      var playw = this.$refs.play.offsetLeft + this.$refs.play.offsetWidth/2
      var playh = this.$refs.play.offsetTop + this.$refs.play.offsetHeight/2
      var nextw = this.$refs.next.offsetLeft + this.$refs.next.offsetWidth/2
      var nexth = this.$refs.next.offsetTop + this.$refs.next.offsetHeight/2

      var leftw = this.$refs.left.offsetWidth
      var lefth = this.$refs.left.offsetHeight

      var likew = this.$refs.like.offsetLeft + this.$refs.like.offsetWidth/2
      var likeh = this.$refs.like.offsetTop + this.$refs.like.offsetHeight/2
      var selectw = this.$refs.select.offsetLeft + this.$refs.select.offsetWidth/2
      var selecth = this.$refs.select.offsetTop + this.$refs.select.offsetHeight/2
      // console.log(leftw)
      var mouseX = window.event.clientX
      var mouseY = window.event.clientY - document.documentElement.clientHeight + 70
      // console.log(mouseX)
      if(mouseX>=playw-22&&mouseX<=playw+22&&mouseY>=playh-22&&mouseY<=playh+22) {
        block.style.left = playw -20 + 'px'
        block.style.top = playh -20 + 'px'
        block.style.backgroundColor = "rgba(255, 66, 66,.8)"
        block.style.borderRadius = 20 + 'px'
        block.style.width = 40 + 'px'
        block.style.height = 40 + 'px'
      }
      else if(mouseX>=prew-9&&mouseX<=prew+9&&mouseY>=preh-9&&mouseY<=preh+9) {
        block.style.left = prew -10 + 'px'
        block.style.top = preh -10 + 'px'
        block.style.backgroundColor = "rgba(255, 66, 66,.8)"
        // block.style.borderRadius = 20 + 'px'
        // block.style.width = 40 + 'px'
        // block.style.height = 40 + 'px'
      }
      else if(mouseX>=nextw-9&&mouseX<=nextw+9&&mouseY>=nexth-9&&mouseY<=nexth+9) {
        block.style.left = nextw -10 + 'px'
        block.style.top = nexth -10 + 'px'
        block.style.backgroundColor = "rgba(255, 66, 66,.8)"
      }
      else if(mouseX>=0&&mouseX<=leftw) {
        block.style.left = 0
        block.style.top = 0
        block.style.width = leftw + 'px'
        block.style.height = lefth + 'px'
        block.style.backgroundColor = "rgba(184, 184, 184,.3)"
      }
      else if(mouseX>=likew-20&&mouseX<=likew+20&&mouseY>=likeh-20&&mouseY<=likeh+20) {
        block.style.left = likew -20 + 'px'
        block.style.top = likeh -20 + 'px'
        block.style.backgroundColor = "rgba(255, 66, 66,.8)"
        block.style.borderRadius = 10 + 'px'
        block.style.width = 40 + 'px'
        block.style.height = 40 + 'px'
      }
      else if(mouseX>=selectw-20&&mouseX<=selectw+20&&mouseY>=selecth-20&&mouseY<=selecth+20) {
        block.style.left = selectw -20 + 'px'
        block.style.top = selecth -20 + 'px'
        block.style.backgroundColor = "rgba(255, 66, 66,.8)"
        block.style.borderRadius = 10 + 'px'
        block.style.width = 40 + 'px'
        block.style.height = 40 + 'px'
      }
      else {
        block.style.backgroundColor = "rgba(184, 184, 184,.5)"
        block.style.width = 20 + 'px'
        block.style.height = 20 + 'px'
        block.style.borderRadius = 10 + 'px'
        block.style.left = window.event.clientX - 10 + 'px'
        block.style.top = window.event.clientY - document.documentElement.clientHeight + 60 + 'px' 
      }
    },
    blockout() {
      var block = this.$refs.follow
      block.style.display = 'none'
    },
    blockin() {
      var block = this.$refs.follow
      block.style.display = 'block'
    }
  },
  
  
}
</script>

<style lang="less">
.playController {
  background-color: rgba(255, 255, 255,1);
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 101;
  .left {
    cursor: pointer;
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
    .icon {
      width: 40px;
      height: 40px;
      display: none;
    }
    #up {
      position: absolute;
      left: 17px;
      top: 18px;
    }
    #down {
      position: absolute;
      left: 16px;
      top: 15px;
    }
    
    .detail {
      text-align: left;
      .title {
        font-size: 15px;
      }
      .author {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
      }
    }
  }
  .left:hover img{
    filter: blur(3px);
  }
  .left:hover .icon {
    display: block;
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
  .follow {
    display: none;
    pointer-events: none;
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: rgba(184, 184, 184, 0.5);
    transition: all 0.2s ease;
  }
}
</style>