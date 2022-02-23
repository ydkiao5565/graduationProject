<template>
  <div class="swiper">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in SwiperPic" :key="item">
        <img :src="item.pic" alt="">
      </el-carousel-item>
    </el-carousel>  
  </div>
</template>

<script>
import {getBanner} from '@/api/index.js'
export default {
  data() {
    return {
      SwiperPic:[
        {pic: require('@/assets/img/s1.jpg')},
        {pic: require('@/assets/img/s2.png')},
        {pic: require('@/assets/img/s3.jpg')}
      ]
    }
  },
  async mounted() {
    let res = await getBanner(1)
    this.SwiperPic = res.data.banners
  }
}
</script>

<style scoped lang="less">

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;

}
.el-carousel__item {
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
    }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel {
  margin: 20px;
  :deep(.el-carousel__indicators) {
        left: unset;
        transform: unset;
        right: 2%;
  }
  :deep(.el-carousel__button) {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.2);
  }
  :deep(.is-active .el-carousel__button) {
        background: #f83d24;
  }
}

</style>