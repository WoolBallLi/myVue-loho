<template>
	 <div class="home-banner swiper-container">
    <div class="swiper-wrapper mySwiper">
      <div class="swiper-slide" v-for="focu in focus" :key="focu.pic">
        <img width="100%" :src="focu.pic" alt="接口错误">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>

</template>
<script type="text/javascript">


import Swiper from 'swiper'
import axios from 'axios'

	export default {
		name:'home-banner',
		data() {
          return {
          	focus:[]
          }
		},
		methods: {
           getFocus(){
              axios.get(this.$root.config.host+'lh/index'
              ).then(res => {
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
<style lang="scss">
  .home-banner{
  	 margin-top:60px;
  }

</style>