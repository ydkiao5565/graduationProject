<template>
  <div class="search">
    <LeftNav></LeftNav>
    <SearchTop class="top"></SearchTop>
  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav.vue'
import SearchTop from '@/components/SearchTop.vue'
export default {
  components:{LeftNav,SearchTop}
}
</script>

<style lang="less">
.search {
  display: flex;
  justify-content: flex-start;
  .top {
    flex: 1;
  }
}
</style>