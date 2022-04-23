<template>
  <div class="mplaylist">
    <div class="top">我的歌单</div>
    <div class="content">
      <router-link :to="{path:'/mylist',query:{id:item.id}}" class="list" v-for="(item,index) in myPlaylist" key="index" @click="changeList()">
        <img :src="item.coverImgUrl" alt="">
        <div class="number">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play-w"></use>
          </svg>
          <span>{{item.playCount}}</span>
        </div>
        <div class="play">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play-w"></use>
          </svg>
        </div>
        <div class="name">{{changeValue(item.name)}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {getPlaylist} from '@/api/index.js'
export default {
  data() {
    return {
      myPlaylist:[]
    }
  },
  methods:{
    changeList() {
      this.$store.commit('setPaused',true)
    },
    changeValue(value) {
      let res = 0
      if(value>=100000000) {
        res = value/100000000
        res = res.toFixed(2) + '亿'
      }
      else if(value>10000) {
        res = value/10000
        res = res.toFixed(2) + '万'
      }
      else {
        res = value
      }
      return res
    }
  },
  // async mounted() {
  //   let res = await getDailyPlaylist()
  //   this.dailyPlaylist = res.data.result
  //   console.log(res)
  // }
  async mounted() {
    let playlist = await getPlaylist(this.$store.state.user.account.id)
    this.myPlaylist = playlist.data.playlist
    console.log(this.myPlaylist)
  },
}
</script>

<style lang="less">
.mplaylist {
  margin-top: -10px;
  padding: 0 20px;
  .top {
    text-align: left;
    font-size: 20px;
    font-weight: 900;
    padding-bottom: 5px;
  }
  .top:before {
    content: '';
    position: absolute;
    left: 0px;
    bottom: 0;
    top: auto;
    right: auto;
    width: 0px;
    height: 5px;
    background-color: rgb(255, 57, 57);
    display: none;
    transition: all .3s;
  }
  // .top:after {
  //   content: '';
  //   display: inline-block;
  //   width: 10px;
  //   height: 10px;
  //   border-top: 2px solid #000;
  //   border-right: 2px solid #000;
  //   transform: rotate(45deg);
  // }
  .content {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    .list {
      margin-bottom: 10px;
      margin-right: 11px;
      // background-color:lightskyblue;
      width: 19%;
      height: 280px;
      position: relative;
        .number {
          display: flex;
          align-items: center;
          position: absolute;
          top: 3px;
          right: 6px;
          .icon {
          width: 12px;
          height: 12px;
          fill: #fff
          }
          span {
            color: #fff;
            font-size: 14px;
            margin-left: 2px;
          }
      }
      .play {
        position: absolute;
        top: 58%;
        right: 10px;
        .icon {
          width: 40px;
          height: 40px;
        }
        display: none;
      }
      .play:hover {
        cursor: pointer;
        display: block;
      }
      
      img {
        width: 100%;
        height: auto;
        border-radius: 5px;
      }
      img:hover {
        cursor: pointer;
      }
      img:hover~.play {
        display: block;
        cursor: pointer;
      }
      .name {
        text-align: left;
        font-size: 14px;
        margin-top: 5px;
      }
      .name:hover {
        font-weight: 550;
        cursor: pointer;
      }
    }
  }
}
.mplaylist:hover .top:before {
    display: block;
    animation-name: mymove;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    // transition: all .3s linear;
  }
  @keyframes mymove {
    0% {
        width: 0;
    }
    100% {
        width: 80px;
            
    }
  }
</style>