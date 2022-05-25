<template>
  <div class="listTable">
    <div class="nav">
      <div class="block"></div>
      <div class="title">标题</div>
      <div class="author">歌手</div>
      <div class="cz">操作</div>
    </div>
    <div class="table">
      <div class="list" v-for="(item,i) in tracks" key="i">
        <div class="num">
          <div class="count">{{changeNum(i+1)}}</div>
          <svg class="icon" aria-hidden="true" @click="like(item.id)">
            <use xlink:href="#icon-aixin"></use>
          </svg>
        </div>
        <div class="title">{{item.name}}</div>
        <div class="author">{{item.ar[0].name}}</div>
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
</template>
<script>
import {likeMusic} from '@/api/index.js'
import {getPlaylistAll} from '@/api/index.js'
export default {
  data() {
    return {
      tracks:[
        {
          id:'',
          name:'',
          ar:[
            {name:''}
          ]
        }
      ]
    }
  },
  methods: {
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
    async like(id) {
      let islogin = this.$store.state.user.isLogin
      if(islogin) {
        let res = await likeMusic(id)
        console.log(res)
        alert('收藏成功')
      }
      else {
        alert('请先登录')
      }
    },
  },
  async mounted() {
    let res = await getPlaylistAll(this.$route.query.id)
    this.tracks = res.data.songs
    this.$store.commit('setPlaylist',this.tracks)
    console.log(res)
  },
}
</script>

<style lang="less">
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
    padding-left: 20px;
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
</style>