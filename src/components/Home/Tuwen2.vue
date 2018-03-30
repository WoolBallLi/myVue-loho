<template>
	<div class="home-tuwenx">
		<ul class="showcase2">
			<li class="showcase-block2" v-for="(classify,i) in classifys" :key="i">
				<div>
					 <h2 class="production-showcase-header2">
					 	 <span class="ng-binding" :key="classify.i">{{classify.title.word}}</span>
					 	 <span class="spacing"></span>
					 	 <router-link to="#" class="more">更多</router-link>
					 </h2>
					 	 <router-link :to="classify.img.url" :key="classify.i" class="nt">
               <img width="100%" :src="classify.img.pic" :key="classify.i" alt="加载失败"/>
					 	 </router-link>	
					 <ul class="small-block2">
					 	 <li class="showcase-cell2">
					 	 	 <router-link :to="{path:'/detail/'+classify.show[0].gid,params: {id: classify.show[0].gid}}" class="ng-scope">
					 	 	 	 <p class="fixed-p2" :key="classify.show.i">
					 	 	 	 	  {{classify.show[0].tag}}
					 	 	 	 </p>
					 	 	 	 <p class="text-gray2" :key="classify.show.i">
					 	 	 	 	 {{classify.show[0].tag_en}}
					 	 	 	 </p>
					 	 	 	 <p>
					 	 	 	 	 <img width="80%" class="isolate2" :src="classify.show[0].pic" :key="classify.i" alt="加载错误"/>
					 	 	 	 </p>
					 	 	 </router-link>
					 	 </li>
             <li class="showcase-cell3">
               <router-link :to="{path:'/detail/'+classify.show[1].gid,params: {id: classify.show[1].gid}}" class="ng-scope">
                 <p class="fixed-p" :key="classify.i">
                    {{classify.show[0].tag}}
                 </p>
                 <p class="text-gray" :key="classify.i">
                   {{classify.show[0].tag_en}}
                 </p>
                 <p>
                   <img width="80%" class="isolate3" :src="classify.show[1].pic" :key="classify.i" alt="加载错误"/>
                 </p>
               </router-link>
             </li>
             <li class="showcase-cell3">
               <router-link :to="{path:'/detail/'+classify.show[2].gid,params: {id: classify.show[2].gid}}" class="ng-scope">
                 <p class="fixed-p" :key="classify.i">
                    {{classify.show[0].tag}}
                 </p>
                 <p class="text-gray" :key="classify.i">
                   {{classify.show[0].tag_en}}
                 </p>
                 <p>
                   <img width="80%" class="isolate3" :src="classify.show[2].pic" :key="classify.i" alt="加载错误"/>
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
		name:'home-tuwenx',
		data() {
          return {
          	classifys:[]//每个classify都是一个数组
          }
		},
		methods: {
           getClassifys(){
              axios.get(this.$root.config.host+'lh/index'
              ).then(res => {
              	this.classifys = res.data.result.classify
              })
           }
		},
		created () {
			this.getClassifys();
      // this.getC_titles();
      // this.getC_mores();
      // this.getC_imgs();
		}
	
}


</script>
<style lang="scss">
	.home-tuwenx{
		width:100%;
		height:auto;
		text-align:center;
		background:#f2f2f2;
		margin-bottom:0.55rem
	}
  .showcase2{
    width:100%;
    height:auto;
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

  
  .showcase-block2{
  	width:100%;
  	height:auto;
  	display:block;
  	background:#ffffff;
    margin-bottom:0.2rem;
     box-shadow:0 1px 0 0 #f0efef;
  }
  .production-showcase-header2{
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
  .small-block2{
  	width:100%;
  	height:2.54rem;
  }
  .showcase-cell2{
    width:50%;
    height:2.54rem;
    box-sizing: border-box;
   box-shadow:1px 1px 0 0 #f0efef;
    float:left;
  }
  .showcase-cell3{
  	width:50%;
  	height:1.27rem;
  	box-sizing: border-box;
  	box-shadow:1px 1px 0 0 #f0efef;
    float:right;
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
  .isolate2{
  	margin-top:0.3rem;
  }
  .fixed-p2{
    margin-top:0.55rem;
    color:#333;
  }
  .text-gray2{
    margin-top:0.05rem;
    color:#999;
  }
</style>