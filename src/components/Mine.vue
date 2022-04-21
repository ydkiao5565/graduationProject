<template>
  <div class="mine">
    <MineBg></MineBg>
    <LeftNav></LeftNav>
    <MineBody id="mineBody"></MineBody>
  </div>
</template>

<script>
import MineBg from '@/components/MineBg.vue'
import LeftNav from '@/components/LeftNav.vue'
import MineBody from '@/components/MineBody.vue'
export default {
  components:{MineBg,MineBody,LeftNav}
}
</script>

<style lang="less">
.mine{
  display: flex;
  justify-content: flex-start;
  #mineBody {
    flex: 1;
  }
}
</style>