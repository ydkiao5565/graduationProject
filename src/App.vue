<template>
  <MainNav></MainNav>
  <router-view></router-view>
</template>

<script>
import MainNav from '@/components/MainNav.vue'
export default {
  components:{
    MainNav
  }
}
</script>

<style lang="less">
#app {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
a {
  color: #333;
  text-decoration: none;
}

</style>
