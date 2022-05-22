<template>
  <div class="simiList">
    <div class="top">推荐歌曲</div>
    <div class="listTable">
      <div class="nav">
        <div class="block"></div>
        <div class="title">标题</div>
        <div class="author">歌手</div>
        <div class="cz">操作</div>
      </div>
      <div class="table">
        <div class="list" v-for="(item,i) in simiSong" key="i">
          <div class="num">
            <div class="count">{{changeNum(i+1)}}</div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-aixin"></use>
            </svg>
          </div>
          <div class="title">{{item.name}}</div>
          <div class="author">{{item.artists[0].name}}</div>
          <div class="cz">
            <svg @click="changeMusic(i)" class="icon" id="play" aria-hidden="true">
              <use xlink:href="#icon-play-g-copy"></use>
            </svg>
            <svg class="icon" id="select" aria-hidden="true">
              <use xlink:href="#icon-liebiao-g-copy"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getSimiList} from '@/api/index.js'
import {getPlaylistDetail} from '@/api/index.js'
export default {
  data() {
    return {
      simiSongIds:[],
      simiSong:[]
    }
  },
  computed:{
    favouriteId() {
      return this.$store.state.favourite
    }
  },
  methods:{
    changeNum(num) {
      if (num<10) {
        num = '0' + num
      }
      return num
    },
    changeMusic(value) {
      this.$store.commit('setPlayCurrent',value)
      this.$store.commit('setPaused',true)
    },
    changSimiSongs(list) {
      list.forEach(elem => {
        elem['al'] = elem.album
        delete elem.album
      })
      return list
    }
  },
  async mounted() {
    //获取收藏歌单歌曲id
    let myplayList = await getPlaylistDetail(this.favouriteId)
    // console.log(myplayList)
    let trackIds = myplayList.data.playlist.trackIds
    // console.log(trackIds)
    for(let i=0;i<trackIds.length;i++) {
      this.simiSongIds.push(trackIds[i].id)
    }
    console.log(this.simiSongIds)

    //获取相似歌曲
    for(let j=0; j<this.simiSongIds.length; j++) {
      let simiSong = await getSimiList(this.simiSongIds[j])
      this.simiSong = this.simiSong.concat(simiSong.data.songs)
    }
    // let simiSong = await getSimiList(this.simiSongIds[0])
    // this.simiSong = Array.from(new Set(this.simiSong))
    for(let k=0; k<this.simiSong.length; k++) {
      this.simiSong[k]['al'] = this.simiSong[k].album
      this.simiSong[k]['ar'] = this.simiSong[k].artists
      delete this.simiSong[k].album
      delete this.simiSong[k].artists
    }
    
    
    console.log(this.simiSong)
    
    this.$store.commit('setPlaylist',this.simiSong)
  }
}
</script>

<style lang="less">
.simiList {
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
  .listTable {
    margin-top: 10px;
    padding-bottom: 70px;
    .nav {
      font-size: 14px;
      color: #666;
      padding-left: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .block {
        flex: 1;
      }
      .title {
        text-align: left;
        flex: 4;
      }
      .author {
        text-align: left;
        flex: 4;
      }
      .cz {
        text-align: left;
        flex: 1;

      }
    }
    .table {
      font-size: 16px;
      color: #666;
      // padding-left: 20px;
      .list:nth-child(2n) {
        background-color: #fff;
      }
      .list:nth-child(2n + 1) {
        background-color: #eee;
      }
      .list:hover {
        background-color: #ddd;
      }
      .list {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 40px;
        .num {
          text-align: left;
          flex: 1;
          display: flex;
          justify-content: flex-start;
          align-items:center;
          .icon {
            cursor: pointer;
            margin-left: 30px;
            width: 20px;
            height: 20px;
          }
        }
        .title {
          text-align: left;
          flex: 4;
        }
        .author {
          text-align: left;
          flex: 4;
        }
        .cz {
          text-align: left;
          flex: 1;
          display: flex;
          justify-content: flex-start;
          align-items:center;
          .icon {
            cursor: pointer;
            width: 20px;
            height: 20px;
          }
          #select {
            margin-left: 20px;
          }
        }
      }
    }
  }
}
.simiList:hover .top:before {
    display: block;
    animation-name: simimove;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    // transition: all .3s linear;
  }
  @keyframes simimove {
    0% {
        width: 0;
    }
    100% {
        width: 80px;
            
    }
  }
</style>