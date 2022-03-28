<template>
  <div class="dPlaylist">
    <div class="top">每日推荐</div>
    <div class="content">
      <router-link :to="{path:'/musiclist',query:{id:item.id}}" class="list" v-for="(item,index) in dailyPlaylist" key="index" @click="changeList()">
        <img :src="item.picUrl" alt="">
        <div class="number">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play-w"></use>
          </svg>
          <span>{{changeValue(item.playCount)}}</span>
        </div>
        <div class="play">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play-w"></use>
          </svg>
        </div>
        <div class="name">{{item.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {getDailyPlaylist} from '@/api/index.js'
export default {
  data() {
    return {
      dailyPlaylist:[]
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
      return res
    }
  },
  async mounted() {
    let res = await getDailyPlaylist()
    this.dailyPlaylist = res.data.result
    console.log(res)
  }
}
</script>

<style lang="less">
.dPlaylist {
  margin-top: -10px;
  padding: 0 20px;
  .top {
    text-align: left;
    font-size: 20px;
    font-weight: 900;
  }
  .top:after {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    transform: rotate(45deg);
  }
  .content {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .list {
      margin-bottom: 10px;
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
</style>