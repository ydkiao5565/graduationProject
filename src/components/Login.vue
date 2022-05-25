<template>
  <div class="login">
    <LoginBg></LoginBg>
    <LoginInput></LoginInput>
  </div>
</template>

<script>
import LoginBg from '@/components/LoginBg.vue'
import LoginInput from '@/components/LoginInput.vue'
export default {
  components:{LoginBg,LoginInput},
  mounted() {
    if(sessionStorage.getItem('create')==2){
        sessionStorage.removeItem('create')
        this.$router.go(0)
    }
  }
}
</script>

<style lang="less">

</style>