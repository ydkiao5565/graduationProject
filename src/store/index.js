import { createStore } from 'vuex'
import {getLyric,phoneLogin,getUserDetail} from '@/api/index.js'
import unlogin from '@/assets/img/unlogin.jpeg'

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
    lyric:'',
    IntervalId:0,
    currentTime:0,
    user:{
      isLogin:false,
      account:{},
      userDetail:{
        data:{
          profile:{
            avatarUrl:unlogin,
            nickname:'未登录用户'
          }
        }
      }
    }
  },
  getters:{
    lyricList:function(state) {
      let arr = state.lyric.split(/\n/igs).map((item,i)=>{
        // item = item.slice(0,10)+ ' ' + item.slice(10)
        let min = item.slice(1,3)
        let sec = item.slice(4,6)
        let mill = item.slice(7,10)
        return{
          min,sec,mill,
          lyric:item.slice(10,item.length),
          content:item,
          time:parseInt(mill)+parseInt(sec)*1000+parseInt(min)*60*1000
        }
      })
      console.log(arr)
      arr.forEach((item,i)=> {
        if(i==arr.length-1) {
          item.next = arr[arr.length-1].time
        }else {
          item.next = arr[i+1].time
        }
      })
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
    },
    setCurrentTime(state,value) {
      state.currentTime = value
    },
    setUser(state,value) {
      state.user = value
    }
  },
  actions: {
    async reqLyric(content,payload) {
      // console.log(payload)
      let result = await getLyric(payload.id)
      content.commit('setLyric',result.data.lrc.lyric)
      // console.log(result.data)
    },
    async login(content,payload) {
      // console.log(payload)
      let result = await phoneLogin(payload.phone,payload.password)
      if(result.data.code == 200) {
        content.state.user.isLogin = true;
        //保存用户账号信息
        content.state.user.account = result.data.account
        //获取用户详情
        let userDetail = await getUserDetail(result.data.account.id)
        content.state.user.userDetail = userDetail
        console.log(userDetail)
        //本地存储用户
        localStorage.userData = JSON.stringify(content.state.user)
        content.commit('setUser',content.state.user)
      }
      console.log(result)
      return result
    }
  },
  modules: {
  }
})
