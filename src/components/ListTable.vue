<template>
  <div class="listTable">
    <div class="list" v-for="(item,i) in tracks" key="i">{{item}}</div>
  </div>
</template>
<script>
import {getPlaylistDetail} from '@/api/index.js'
export default {
  data() {
    return {
      tracks:[]
    }
  },
  async mounted() {
    let res = await getPlaylistDetail(this.$route.query.id)
    this.tracks = res.data.playlist.tracks
    console.log(this.tracks)
  },
}
</script>