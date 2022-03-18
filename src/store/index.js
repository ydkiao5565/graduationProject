import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist:[
      {
        id:'',
        al:{
          picUrl:''
        },
        ar:[
          {name:''}
        ],
        name:''
      }
    ],
    playCurrentIndex:0,
    ispaused:false
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
    }
  },
  actions: {
  },
  modules: {
  }
})
