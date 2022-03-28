import axios from 'axios'

//获取轮播图
export function getBanner(type=1) {
  return axios.get(`http://localhost:3000/banner?type=${type}`)
}

//获取每日推荐歌单
export function getDailyPlaylist(limit=30) {
  return axios.get(`http://localhost:3000/personalized?limit=${limit}`)
}

//获取歌单详情
export function getPlaylistDetail(id) {
  return axios.get(`http://localhost:3000/playlist/detail?id=${id}`)
}

//获取歌单所有歌曲
export function getPlaylistAll(id) {
  return axios.get(`http://localhost:3000/playlist/track/all?id=${id}`)
}

//获取歌词
export function getLyric(id) {
  return axios.get(`http://localhost:3000/lyric?id=${id}`)
}
