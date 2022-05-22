<template>
  <div class="mineContent">
    <div class="profile">
        <div class="title">
          <div class="titlein">个人资料</div>
        </div>
        <div class="text">
          <div class="gender">
            <div class="genderin">性别：{{gender}}</div>
          </div>
          <div class="level">
            <div class="levelin">等级：{{this.$store.state.user.userDetail.data.level}}</div>
          </div>
          <div class="createDays">
            <div class="createDaysin">创建天数：{{this.$store.state.user.userDetail.data.createDays}}</div>
          </div>
          <div class="signature">
            <div class="signaturein">个人介绍：{{this.$store.state.user.userDetail.data.profile.signature}}</div>
          </div>
        </div>
    </div>
    <MyPlaylist></MyPlaylist>
    <SimiList></SimiList>
  </div>
</template>

<script>
import MyPlaylist from '@/components/MyPlaylist.vue'
import SimiList from '@/components/SimiList.vue'
export default {
  components:{MyPlaylist,SimiList},
  computed:{
    gender() {
      if(this.$store.state.user.userDetail.data.profile.gender == 1) {
        return '男'
      }
      else if(this.$store.state.user.userDetail.data.profile.gender == 2) {
        return '女'
      }
      else{
        return '其他'
      }
    }
  }
}
</script>

<style lang="less">
.mineContent {
  width: 100%;
  // height: 1000px;
  background-color: rgba(255, 255, 255, .95);
  border-radius: 20px;
  padding-top: 10px;
  .profile {
    padding-bottom: 20px;
    padding-left: 12px;
    margin-bottom: 10px;
    .title {
      position: relative;
      width: 80px;
      padding-bottom: 5px;
      margin-top: 5px;
      margin-left: 5px;
      font-size: 20px;
      font-weight: 900;
      // border-bottom: 4px solid rgb(255, 57, 57);
      .titlein:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        top: auto;
        right: auto;
        width: 0px;
        height: 5px;
        background-color: rgb(255, 57, 57);
        display: none;
        transition: all .3s;
      }
      
    }
    .text {
      text-align: left;
      padding-left: 15px;
      display: flex;
      flex-wrap: wrap;
      .gender {
        position: relative;
        margin-top: 5px;
        width: 25%;
        cursor:context-menu;
      }
      .genderin {
        padding-left: 10px;
      }
      .genderin:before {
        content: '';
        position: absolute;
        height: 15px;
        width: 5px;
        left: 0;
        top: 3px;
        background-color: rgb(255, 57, 57);
        transition: all .3s;
      }
      .genderin:hover.genderin:before  {
        transform: translateX(3px);
      }
      .level {
        position: relative;
        margin-top: 5px;
        width: 25%;
      }
      .levelin {
        padding-left: 10px;
      }
      .levelin:before {
        content: '';
        position: absolute;
        height: 15px;
        width: 5px;
        left: 0;
        top: 3px;
        background-color: rgb(255, 57, 57);
        transition: all .3s;
      }
      .levelin:hover.levelin:before  {
        transform: translateX(3px);
      }
      .createDays {
        position: relative;
        margin-top: 5px;
        width: 50%;
      }
      .createDaysin {
        padding-left: 10px;
      }
      .createDaysin:before {
        content: '';
        position: absolute;
        height: 15px;
        width: 5px;
        left: 0;
        top: 3px;
        background-color: rgb(255, 57, 57);
        transition: all .3s;
      }
      .createDaysin:hover.createDaysin:before  {
        transform: translateX(3px);
      }
      .signature {
        position: relative;
        margin-top: 5px;
        width: 80%;
      }
      .signaturein {
        padding-left: 10px;
      }
      .signaturein:before {
        content: '';
        position: absolute;
        height: 15px;
        width: 5px;
        left: 0;
        top: 3px;
        background-color: rgb(255, 57, 57);
        transition: all .3s;
      }
      .signaturein:hover.signaturein:before  {
        transform: translateX(3px);
      }
    }
  }
  .profile:hover .titlein:before {
    display: block;
    animation-name: move;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    // transition: all .3s linear;
  }
  @keyframes move {
    0% {
        width: 0;
    }
    100% {
        width: 80px;
            
    }
  }
}
</style>