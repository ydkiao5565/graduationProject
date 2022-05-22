<template>
  <div class="musicList">
    <div class="mainTop">
      <div class="detail">
        <div class="coverImg">
          <img :src="this.list.playlist.coverImgUrl" alt="">
        </div>
        <div class="message">
          <div class="title">{{list.playlist.name}}</div>
          <div class="author">
            <img :src="this.list.playlist.creator.avatarUrl" alt="">
            <div class="name">{{list.playlist.creator.nickname}}</div>
          </div>
          <div class="control">
            <div class="play">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-play-w"></use>
              </svg>
              <span @click="playAll">播放全部</span>
            </div>
            <div class="like">
              <span>收藏</span>
            </div>
          </div>
          <div class="tag">
            <span>标签:</span>
            <span v-for="(item,index) in list.playlist.tags" key="index">{{item}} /</span>
          </div>
          <div class="count">
            <span>播放:{{list.playlist.playCount}}</span>
          </div>
          <div class="introduction">简介:{{list.playlist.description}}</div>
        </div>
      </div>
      <div class="select">
        <div class="music">歌曲列表</div>
        <div class="comments">评论({{list.playlist.commentCount}})</div>
        <div class="liker">收藏者</div>
      </div>
    </div>
    <test2></test2>
  </div>
</template>

<script>
import test2 from '@/components/ListTableTest.vue'
import {getPlaylistDetail} from '@/api/index.js'
import {getLogStatus} from '@/api/index.js'
export default {
  components:{test2},
  data() {
    return {
      list:{
        playlist:{
          id:'',
          coverImgUrl:'',
          name:'',
          creator:{
            avatarUrl:'',
            nickname:''
          },
          tags:[],
          palyCount:'',
          description:'',
          commentCount:''
        }
      }
    }
  },
  async mounted() {
    let res = await getPlaylistDetail(this.$route.query.id)
    this.list = res.data
    console.log(this.list)
    let status = await getLogStatus()
    console.log(status)
  },
  methods:{
    playAll() {
      this.$store.commit('setPlayCurrent',0)
      this.$store.commit('setPaused',true)
    }
  }
}
</script>

<style lang="less">
.musicList{
  width: 100%;
  background-color: #fff;
  .mainTop {
    width: 100%;
    padding: 30px 30px 0 30px;
    box-sizing: border-box;   
    .detail {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      .coverImg{
        flex: 1;
        img {
          width: 200px;
          border-radius: 8px;
        }
      }
      .message {
        margin-left: 20px;
        flex: 5;
        .title {
          text-align: left;
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 10px;
        }
        .author {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          img {
            width: 25px;
            border-radius: 12.5px;
          }
          .name {
            font-size: 14px;
            margin-left: 5px;
          }
        }
        .control {
          height: 32px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          
          .play {
            cursor: pointer;
            height: 32px;
            width: 130px;
            background-color:rgb(255, 66, 66);
            border-radius: 16px;
            color: #fff;
            line-height: 32px;
            font-size: 15px;
            display: flex;
            align-items: center;
            .icon {
              margin-left: 10px ;
              margin-right: 5px;
              width: 22px;
              height: 22px;
            }
          }
          .like {
            margin-left: 5px;
            height: 32px;
            width: 100px;
            border: 1px solid #ccc;
            border-radius: 16px;
            line-height: 32px;
            font-size: 15px;
            color: #ccc;
          }
        }
        .tag {
          font-size: 14px;
          text-align: left;
          margin-bottom: 3px;
        }
        .count {
          font-size: 14px;
          text-align: left;
          margin-bottom: 3px;
        }
        .introduction {
          font-size: 14px;
          text-align: left;
          margin-bottom: 3px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
    .select {
      margin-top: 25px;
      display: flex;
      align-items: baseline;
      .music {
        font-size: 18px;
        font-weight: 900;
        border-bottom: 4px solid rgb(255, 57, 57);
      }
      .comments {
        font-size: 14px;
        margin-left: 15px;
      }
      .liker {
        font-size: 14px;
        margin-left: 15px;
      }
    }
  }
}
</style>