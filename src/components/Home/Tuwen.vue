<template>
	<div class="home-tuwen">
		<router-link to="/" class="xinp">
      <img class="xinpin" v-for="(ad,i) in ads" :key="i" :src="ad.pic" alt="接口错误"/>
		</router-link>	
		<ul class="showcase">
			<li class="showcase-block">
				<div>
					 <h2 class="production-showcase-header">
					 	 <span class="ng-binding">人气推荐</span>
					 	 <span class="spacing"></span>
					 	 <router-link to="#" class="more">更多</router-link>
					 </h2>
					 	 <router-link to="#" class="nt">
               <img width="100%" src="http://img.loho88.com/images/loho-m/guanggaowei2/07-1.jpg" alt="加载失败"/>
					 	 </router-link>	
					 <ul class="small-block">
					 	 <li class="showcase-cell" v-for="(popular,i) in populars" :key="i">
					 	 	 <router-link :to="{path:'/detail/'+popular.gid,params: {id: popular.gid}}" class="ng-scope">
					 	 	 	 <p class="fixed-p" :key="popular.i">
					 	 	 	 	  {{popular.tag}}
					 	 	 	 </p>
					 	 	 	 <p class="text-gray" :key="popular.i">
					 	 	 	 	 {{popular.tag_en}}
					 	 	 	 </p>
					 	 	 	 <p>
					 	 	 	 	 <img width="80%" class="isolate" :src="popular.pic" :key="i" alt="加载错误"/>
					 	 	 	 </p>
					 	 	 </router-link>
					 	 </li>
					 </ul>	 
				</div>
			</li>
		</ul>
	</div>

</template>
<script type="text/javascript">
	import Swiper from 'swiper'
import axios from 'axios'

	export default {
		name:'home-tuwen',
		data() {
          return {
          	ads:[],
          	populars: [],
          	classifys: []
          }
		},
		methods: {
           getAds(){
              axios.get(this.$root.config.host+'lh/index'
              ).then(res => {
              	this.ads = res.data.result.ad
              })
           },
           getPopulars(){
              axios.get(this.$root.config.host+'lh/index'
              ).then(res => {
								this.populars = res.data.result.popular.show
								// console.log(this.populars)
              })
           },
           getClassifys(){
              axios.get(this.$root.config.host+'lh/index'
              ).then(res => {
              	this.classifys = res.data.result.classify
              })
           }

		},
		created () {
			this.getAds();
			this.getPopulars();
			this.getClassifys();
		}
	
}


</script>
<style lang="scss">
	.home-tuwen{
		width:100%;
		height:auto;
		text-align:center;
		background:#f2f2f2;
		margin-bottom:0.55rem
	}
	.xinp{
		width:3.55rem;
		height:150px;
		display:block;
		margin:10px auto;
	}
	.xinpin{
		width:100%;
		height:150px;
	}

  .showcase-block{
  	width:100%;
  	height:auto;
  	display:block;
  	background:#ffffff;
  	margin-bottom: 0.3rem;
  	 box-shadow:0 1px 0 0 #f0efef;
  }
  .production-showcase-header{
  	width:100%;
  	height:0.4rem;
  	font-size:14px;
  	font-weight:700;
  	display:flex;
  	flex-direction:row;
  	justify-content:space-between;
  	align-items:center;
  }
  .ng-binding{
  	font-size:16px;
  	// mairgin-left:-0.4rem;
  	display:block;
  	margin-left:0.3rem;
  }
  .ng-binding:before{
  	content:"|";
  	color:red;	
  	width: 0.04rem;
    height: 15px;
    background-color: red;
    border-radius: 0.1rem;
    vertical-align: baseline;
  }
  .spacing {
  	width:1.5rem;
  	height:0.4rem;
  }
  .more {
  	margin-right: 0.3rem;
  	color:#666666;
  }
  .small-block{
  	width:100%;
  	height:auto;
  	display:flex;
  	flex-direction:row;
  	justify-content:space-around;
  	flex-wrap: wrap;
  }
  .showcase-cell{
  	width:50%;
  	height:1.62rem;
  	box-sizing: border-box;
  	box-shadow:1px 1px 0 0 #f0efef;
  }
  .ng-scope{
  	display:block;
  }
  .fixed-p{
  	margin-top:0.15rem;
  	color:#333;
  }
  .text-gray{
  	margin-top: 0.05rem;
  	color:gray;
  }
  .isolate{
  	margin-top:0.3rem;
  }
</style>