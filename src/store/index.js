import { createStore } from 'vuex'
import {getLyric} from '@/api/index.js'
export default createStore({
  state: {
    playlist:[
      {
        id:'1815684465',
        al:{
          picUrl:'https://p1.music.126.net/499AYZ3epP1T7GJYvnJZZQ==/109951165671947083.jpg'
        },
        ar:[
          {name:'周深'}
        ],
        name:'Rubia'
      }
    ],
    playCurrentIndex:0,
    ispaused:false,
    lyric:''
  },
  getters:{
    lyricList:function(state) {
      let arr = state.lyric.split(/\n/igs).map((item,i)=>{
        let min = item.slice(1,3)
        let sec = item.slice(4,6)
        let mill = item.slice(7,10)
        return{
          min,sec,mill,
          lyric:item.slice(11,item.length),
          content:item,
          time:parseInt(mill)+parseInt(sec)*1000+parseInt(min)*60*1000}
      })
      console.log(arr)
      return arr
    }
  },
  mutations: {
    setPlaylist(state,value) {
      state.playlist = value
    },
    setPlayCurrent(state,value) {
      state.playCurrentIndex = value
    },
    setPaused(state,value) {
      state.ispaused = value
    },
    setLyric(state,value) {
      state.lyric = value
    }
  },
  actions: {
    async reqLyric(content,payload) {
      console.log(payload)
      let result = await getLyric(payload.id)
      content.commit('setLyric',result.data.lrc.lyric)
      console.log(result.data.lrc.lyric)
    }
  },
  modules: {
  }
})
