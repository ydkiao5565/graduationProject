<template>
  <div class="mine">
    <MineBg></MineBg>
    <LeftNav></LeftNav>
    <router-view></router-view>
    <!-- <MineBody id="mineBody"></MineBody> -->
  </div>
</template>

<script>
import MineBg from '@/components/MineBg.vue'
import LeftNav from '@/components/LeftNav.vue'
import MineBody from '@/components/MineBody.vue'
import {getLogStatus} from '@/api/index.js'
export default {
  components:{MineBg,MineBody,LeftNav},
  // async mounted() {
  //   let status = await getLogStatus()
  //   console.log(status)
  // }
}
</script>


<style lang="less">
.mine{
  padding-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  // padding-left: 15vw; 
  #mineBody {
    flex: 1;
  }
}
</style>