<template>
  <div class="mineBody">
    
  </div>
</template>

<script>
import {getPlaylist} from '@/api/index.js'
export default {
  async mounted() {
    let playlist = await getPlaylist(this.$store.state.user.account.id)
    console.log(playlist)
  }
}
</script>