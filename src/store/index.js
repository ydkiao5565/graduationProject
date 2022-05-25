import { createStore } from 'vuex'
import {getLyric,phoneLogin,getUserDetail} from '@/api/index.js'
import unlogin from '@/assets/img/unlogin.jpeg'
import musicLogo from '@/assets/img/musiclogo.png'

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
    musicLogo:musicLogo,
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
    },
    favourite:7248506002
  },
  getters:{
    lyricList:function(state) {
      //将歌词字符串分割，并遍历操作
      let arr = state.lyric.split(/\n/igs).map((item,i)=>{
        //分别截取分钟，秒数，毫秒数
        let min = item.slice(1,3)
        let sec = item.slice(4,6)
        let mill = item.slice(7,10)
        //将每一句歌词返回一个对象
        return{
          min,sec,mill,
          //截取歌词本体
          lyric:item.slice(11,item.length),
          content:item,
          //计算每一句歌词开始时的毫秒数
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
    },
    setFavourite(state,value) {
      state.favourite = value
    }
  },
  actions: {
    async reqLyric(content,payload) {
      // console.log(payload)
      let result = await getLyric(payload.id)
      content.commit('setLyric',result.data.lrc.lyric)
      console.log(result.data.lrc.lyric)
    },
    async login(content,payload) {
      //通过账号密码登录
      let result = await phoneLogin(payload.phone,payload.password)
      //登录成功返回状态码200
      if(result.data.code == 200) {
        //将用户状态设置为已登录
        content.state.user.isLogin = true;
        //保存用户账号登录信息
        content.state.user.account = result.data.account
        //通过用户id获取用户详细信息
        let userDetail = await getUserDetail(result.data.account.id)
        content.state.user.userDetail = userDetail
        //localStorage本地存储用户信息
        localStorage.userData = JSON.stringify(content.state.user)
        //提交Vuex集中管理
        content.commit('setUser',content.state.user)
      }
      return result
    }
  },
  modules: {
  }
})
