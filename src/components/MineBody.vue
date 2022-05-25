<template>
  <div class="mineBody">
    <div class="top">
      <div class="pic">
        <img :src="$store.state.user.userDetail.data.profile.avatarUrl" alt="">
      </div>
      <div class="nickname">{{this.$store.state.user.userDetail.data.profile.nickname}}</div>
      <div class="leave" @click="logout()">
        <div class="block"></div>
        <div class="text">LogOut</div>
      </div>
    </div>

    <MineContent></MineContent>
  </div>
</template>

<script>
import {getPlaylist} from '@/api/index.js'
import MineContent from '@/components/MineContent.vue'
export default {
  components:{MineContent},
  
  methods:{
    logout() {
      sessionStorage.setItem('create',2)
      localStorage.removeItem('userData')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less">
.mineBody {
  padding-top: 10px;
  .top {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    .pic {
      img {
        width: 150px;
        height: 150px;
        border-radius: 75px;
      }
    }
    .nickname {
      font-size: 20px;
      font-weight: 600;
    }
    .leave {
      position: absolute;
      top: 0;
      right: 0;
      width: 150px;
      height: 50px;
      // background-color: #fff;
      display: flex;
      align-items: center;
      .block {
        box-sizing: border-box;
        position: relative;
        width: 30px;
        height: 30px;
        background-color:rgb(255, 57, 57);
        transform:rotateZ(45deg);
        margin-right: 15px;
        // border: 1px solid lightskyblue;
        transition: all .5s;
      }
      .block:before {
        content: '';
        position: absolute;
        left: 34.5%;
        top: 34.5%;
        width: 8px;
        height: 8px;
        // transform: translateX(-50%);
        // transform: translateY(-50%);
        border-right: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: rotateZ(-90deg);
        transition: all .5s;

      }
      .text {
        position: relative;
        font-size: 16px;
        color: #666;
      }
      .text:before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #666;
      }
    }
    .leave:hover {
      cursor: pointer;
    }
    .leave:hover .block {
      transform: rotateZ(225deg);
      background-color:#fff;
      border: 1px solid rgb(255, 57, 57);
    } 
    .leave:hover .block:before {
      border-right: 1px solid rgb(255, 57, 57);
      border-bottom: 1px solid rgb(255, 57, 57);
    }
    .leave:hover .text {
      color: rgb(255, 57, 57);
    }
    .leave:hover .text:before {
      background-color: rgb(255, 57, 57);
    }
  }
}
</style>