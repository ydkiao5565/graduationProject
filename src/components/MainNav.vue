<template>
  <div class="mainNav">
    <div class="logo">
      <img src="" alt="">
    </div>
    <div class="content">
      <div class="btn" id="left" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
      <div class="btn" id="right" @click="$router.go(1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiayiyeqianjinchakangengduo"></use>
        </svg>
      </div>
      <div class="search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <span>搜索</span>
      </div>
    </div>
    <div class="mine">
      <img src="@/assets/logo.png" alt="">
      <span>奥里给干净又卫生</span>
    </div>
  </div>
</template>

<style lang="less">
.mainNav {
  width: calc(100vw - 17px);
  height: 60px;
  background-color:rgb(255, 66, 66);
  display: flex;
  justify-content: space-between;
  .logo{
    flex: 1;
    background-color:lightpink;
  }
  .content {
    flex: 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    .btn {
      width: 25px;
      height: 25px;
      background-color:rgba(120, 120, 120, 0.1);
      border-radius: 12.5px;
      margin: 0 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        fill: rgba(255,255,255,0.8);
      }
    }
    .btn:hover {
      cursor: pointer;
    }
    .search {
      width: 150px;
      height: 25px;
      background-color:rgba(120, 120, 120, 0.1);
      border-radius: 12.5px;
      margin-left: 6px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 5px;
      .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        fill: rgba(255,255,255,0.8);
        margin-right: 5px;
      }
      .icon:hover {
        cursor: pointer;
      }
      span {
        margin-left: 3px;
        font-size: 14px;
        color: #fff;
      }
      span:hover {
        cursor: pointer;
      }
    }
  }
  .mine {
    flex: 3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }
    span {
      color: #fff;
      margin: 0 20px 0 10px;
      font-size: 14px;
    }
  }
}
</style>