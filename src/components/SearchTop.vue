<template>
  <div class="searchTop">
    <div class="searchInput">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <input type="text" v-model="searchKey" class="searchinp" :placeholder="placeholder" @keydown.enter="saveKeyWord">
    </div>
    <div class="history">
      <div class="historyLeft">历史搜索</div>
      <div class="historyRight">
        <div class="keyWordItem" v-for="(item,i) in keyWordsList" :key="i">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placeholder: 'rubia',
      searchKey:'',
      keyWordsList:[]
    }
  },
  beforeMount() {
    this.searchKey = this.placeholder
    this.keyWordsList = localStorage.keyWordsList? JSON.parse(localStorage.keyWordsList) : []
  },
  methods:{
    saveKeyWord() {
      this.keyWordsList.push(this.searchKey)
      localStorage.keyWordsList = JSON.stringify(this.keyWordsList)
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
    .historyLeft {
      padding-left: 10px;
      font-size: 15px;
    }
    .historyRight {
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
  }
}
</style>
