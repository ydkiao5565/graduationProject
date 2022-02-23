<template>
  <div class="homeContent">
    <Swiper></Swiper>
    <DailyPlaylist></DailyPlaylist>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import DailyPlaylist from '@/components/DailyPlaylist.vue'
export default {
  components:{
    Swiper,DailyPlaylist
  }
}
</script>

<style>
.homeContent {
  width: 85vw;
}
</style>