<template>
	<div class="home-banner">  
    <div class="swiper swiper-wrapper" :options="swiperOption"  ref="mySwiper">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <div class="swiper-slide" v-for="focu in focus" :key="focu.pic">  
        	<img width="100%" src="focu.pic" alt="接口错误">
        </div>  
        <!-- 这是轮播的小圆点 -->  
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>  
    </div>  
  </div>  
</template>
<script type="text/javascript">
	
 import Swiper from 'swiper'
 import axios from 'axios'

 export default {
 	name: 'home-banner',
 	data() {
 		return {
 			focus:[],
 			swiperOption: {  
        notNextTick: true,  
        pagination: '.swiper-pagination',  
        slidesPerView: 'auto',  
        centeredSlides: true,  
        paginationClickable: true,  
        spaceBetween: 30,  
            onSlideChangeEnd: swiper => {  
                //这个位置放swiper的回调方法  
                this.page = swiper.realIndex+1;  
                this.index = swiper.realIndex;  
            }  
        }  
 		}
 	},
    methods: {
    	getFocus(){
              axios.get(this.$root.config.host+'lh/index'
              ).then(res => {
              	console.log(res.data.result.focus)
              	this.focus = res.data.result.focus
              })
           }
    },
    created () {
			this.getFocus()
		}, 
		updated () {
			new Swiper('.home-banner',{
				 loop:true
			})
		}
 }

</script>