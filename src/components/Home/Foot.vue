<template>
	<div class="home-foot">
		<router-link :to="nav.path" v-for="nav in navs" :key="nav.id" class="homefont tubiao nav-item">
			 <i :class="nav.cla"></i>
			 <p class="btmfont">{{nav.title}}</p>
		</router-link>
		<!-- <router-link to="/tuangou" class="team-purchase tubiao">
			<i class="fa fa-shopping-bag"></i>
			<p class="btmfont">团购</p>
		</router-link>
		<router-link to="/kefu" class="customer-service tubiao">
			<i class="fa fa-headphones"></i>
			<p class="btmfont">客服</p>
		</router-link>
		<router-link to="/Nearby" class="nearby tubiao">
			<i class="fa fa-map-marker"></i>
			<p class="btmfont">附近</p>
		</router-link>
		<router-link to="/My" class="My tubiao">
			<i class="fa fa-user-o"></i>
			<p class="btmfont">我的</p>
		</router-link> -->
	</div>


</template>

<script type="text/javascript">
   export default {
   	 name: 'home-foot',
   	 data () {
   	 	 return {
   	 	 	 navs:[
           {id:1,title:'首页',path:'/',cla:'fa fa-home'},
           {id:2,title:'团购',path:'/tuangou/',cla:'fa fa-shopping-bag'},
           {id:3,title:'客服',path:'/kefu',cla:'fa fa-headphones'},
           {id:4,title:'附近',path:'/Nearby/302',cla:'fa fa-map-marker'},
           {id:5,title:'我的',path:'/My',cla:'fa fa-user-o'}
   	 	 	 ]
   	 	 }
   	 }
   }

</script>
  


<style lang="scss">
	.home-foot {
	 position:fixed;
	 bottom: 0;	
   background:#ffffff;
   box-shadow:0 -1px 0 0 #f0efef;
     width:100%;
     height:0.54rem;
     display:flex;
     flex-direction: row;
     justify-content: space-around;

	}
  .fa {
    color: #999999;
    font-size: 28px;
    }
  .tubiao {
  	width:20%;
  	height:0.54rem;
  	box-sizing: border-box;
  	text-align: center;
  } 
  .btmfont {
  	font-size:14px;
  	color: #999999;
  }
</style>