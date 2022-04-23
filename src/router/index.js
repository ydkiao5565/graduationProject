import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js'


const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        name:"HomeContent",
        component:()=>import ("@/components/HomeContent.vue")
      },
      {
        path:"musicList",
        name:"MusicList",
        component:()=>import ("@/components/MusicList.vue"),
        children:[
          {
            path:"",
            name:"List",
            component:()=>import ("@/components/ListTable.vue"),
          }
        ]
      },
    ]
  },
  {
    path:"/search",
    name:"Search",
    component:()=>import ("@/components/Search.vue")
  },
  {
    path:"/lyric",
    name:"Lyric",
    component:()=>import ("@/components/MusicLyric.vue")
  },
  {
    path:"/login",
    name:"Login",
    component:()=>import ("@/components/Login.vue")
  },
  {
    path:"/mine",
    name:"Mine",
    children:[
      {
        path:"",
        name:"MineBody",
        component:()=>import ("@/components/MineBody.vue"),
      },
      {
        path:"/mylist",
        name:"Mylist",
        component:()=>import ("@/components/MusicList.vue"),
        children:[
          {
            path:"",
            name:"List",
            component:()=>import ("@/components/ListTable.vue"),
          }
        ]
      }
    ],
    //路由守卫
    beforeEnter:(to,from,next)=> {
      console.log(store.state.user)
      if(store.state.user.isLogin) {
        next()
      }
      else {
        next('/login')
      }
    },
    component:()=>import ("@/components/Mine.vue")

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
