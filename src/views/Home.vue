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
export default {
  components: {
    HomeContent,LeftNav
  }
}
</script>

<style lang="less">
.home {
  display: flex;
}
</style>
