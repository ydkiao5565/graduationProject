import axios from 'axios'

//获取轮播图
export function getBanner(type=1) {
  return axios.get(`http://localhost:3000/banner?type=${type}`)
}

//获取每日推荐歌单
export function getDailyPlaylist(limit=10) {
  return axios.get(`http://localhost:3000/personalized?limit=${limit}`)
}