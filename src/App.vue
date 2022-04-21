<template>
  <MainNav></MainNav>
  <router-view></router-view>
  <PlayController></PlayController>
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import PlayController from '@/components/PlayController.vue'
export default {
  components:{
    MainNav,PlayController
  },
  mounted(){
    let userData = JSON.parse(localStorage.userData)
    console.log(userData)
    this.$store.commit('setUser',userData)
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x:hidden ;
  cursor:context-menu
}
a {
  color: #333;
  text-decoration: none;
}

</style>
