import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
      {
        path:"search",
        name:"Search",
        component:()=>import ("@/components/Search.vue")
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
