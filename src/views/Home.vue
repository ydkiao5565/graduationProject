<template>
  <div class="home">
    <LeftNav></LeftNav>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/HomeContent.vue'
import LeftNav from '@/components/LeftNav.vue'
// import{getLogStatus} from '@/api/index.js'
export default {
  components: {
    HomeContent,LeftNav
  },
  // async mounted() {
  //   let status = await getLogStatus()
  //   console.log(status)
  // }
}
</script>

<style lang="less">
.home {
  display: flex;
}
</style>
