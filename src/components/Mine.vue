<template>
  <div class="mine">
    <Loader id="loader" v-if="timeout"></Loader>
    <MineBg></MineBg>
    <LeftNav></LeftNav>
    <router-view></router-view>
    <!-- <MineBody id="mineBody"></MineBody> -->
  </div>
</template>

<script>
import MineBg from '@/components/MineBg.vue'
import Loader from '@/components/Loader.vue'
import LeftNav from '@/components/LeftNav.vue'
import MineBody from '@/components/MineBody.vue'
import {getLogStatus} from '@/api/index.js'
export default {
  components:{MineBg,MineBody,LeftNav,Loader},
  // async mounted() {
  //   let status = await getLogStatus()
  //   console.log(status)
  // }
  data() {
    return {
      timeout:true
    }
  },
  mounted(){
    if(sessionStorage.getItem('create')==1){
      sessionStorage.removeItem('create')
      this.$router.go(0)
    }
    setTimeout(() => {
      this.timeout = false
    }, 1000);
  }
}
</script>


<style lang="less">
.mine{
  #loader {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
  }
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  // padding-left: 15vw; 
  #mineBody {
    flex: 1;
  }
}
</style>