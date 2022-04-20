<template>
  <div class="searchTop">
    <div class="searchInput">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <input type="text" v-model="searchKey" class="searchinp" :placeholder="placeholder" @keydown.enter="saveKeyWord">
    </div>
    <div class="history" v-show="searchSongs.length == 0">
      <div class="historyLeft">历史搜索</div>
      <div class="historyRight">
        <div class="keyWordItem" @click="clickHistory(item)" v-for="(item,i) in keyWordsList" :key="i">{{item}}</div>
      </div>
      <div class="clear" @click="clear">清除历史</div>
    </div>

    <div class="listTable" v-show="searchSongs.length != 0">
      <div class="nav">
        <div class="block"></div>
        <div class="title">标题</div>
        <div class="author">歌手</div>
        <div class="cz">操作</div>
      </div>
      <div class="table">
        <div class="list" v-for="(item,i) in searchSongs" key="i">
          <div class="num">
            <div class="count">{{changeNum(i+1)}}</div>
            <svg class="icon" aria-hidden="true">
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
  </div>
</template>

<script>
import {searchMusic} from '@/api/index.js'
export default {
  data() {
    return {
      placeholder: '陈奕迅',
      searchKey:'',
      keyWordsList:[],
      searchSongs:[]
    }
  },
  beforeMount() {
    this.searchKey = this.placeholder
    this.keyWordsList = localStorage.keyWordsList? JSON.parse(localStorage.keyWordsList) : []
  },
  methods:{
    async saveKeyWord() {
      this.keyWordsList.push(this.searchKey)
      this.keyWordsList = Array.from(new Set(this.keyWordsList))
      if(this.keyWordsList.length>10) {
        this.keyWordsList = this.keyWordsList.slice(this.keyWordsList.length-10,this.keyWordsList.length)
      }
      localStorage.keyWordsList = JSON.stringify(this.keyWordsList)
      let result = await searchMusic(this.searchKey)
      // console.log(result)
      this.searchSongs = result.data.result.songs
      console.log(this.searchSongs)
      this.$store.commit('setPlaylist',this.searchSongs)

    },
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
    clickHistory(item) {
      this.searchKey = item
      this.saveKeyWord()
    },
    clear() {
      console.log(1)
      localStorage.removeItem('keyWordsList')
      this.keyWordsList = localStorage.keyWordsList? JSON.parse(localStorage.keyWordsList) : []
    }
  }
}
</script>

<style lang="less">
.searchTop {
  padding: 10px;
  .searchInput {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .icon {
      width: 22px;
      height: 22px;
      fill: #666;
    }
    input {
      border-radius: 15px;
      border:1px solid #ccc;
      height: 20px;
    }
    input:focus {
      outline: none;
    }
  }
  .history {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .historyLeft {
      padding-left: 10px;
      font-size: 15px;
    }
    .historyRight {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .keyWordItem {
        margin-left: 10px;
        padding: 3px;
        border-radius: 15px;
        background-color: #eee;
        cursor: pointer;
      }
    }
    .clear {
        margin-left: 10px;
        padding: 3px;
        border-radius: 15px;
        background-color: #eee;
        cursor: pointer;
    }
  }
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
