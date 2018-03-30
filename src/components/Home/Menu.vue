<template>
	<div class="home-menu">
		 <ul class="menu-box">
		 	 <li class="menu-block" v-for="(cate,i) in cates" :key="cate.i">
		 	 	 <router-link to="/">
		 	 	 	 <img class="menu-img" :src="cate.pic" :key="cate.i"/>
		 	 	 	 <article :key="cate.i">{{cate.tag}}</article>
		 	 	 </router-link>
		 	 </li>
		 </ul>
	</div>

</template>

<script type="text/javascript">

import axios from 'axios'

	export default {
		name:'home-menu',
		data () {
      return {
      	cates:[]
      }
		},
		methods: {
			getCates(){
              axios.get(this.$root.config.host+'lh/index'
              ).then(res => {
              	this.cates = res.data.result.cates
              })
           }
		},
		created () {
			this.getCates()
		}
	}

</script>
<style lang="scss" scoped>
	.menu-box {
		width: 100%;
		height:auto;
		display: flex;
		flex-direction:row;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.menu-block {
		width:25%;
		height:1rem;
		text-align:center;
		line-height:1rem;
		
	}
	a{
     width:100%;
     height:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
	}
  .menu-img{
  	width: 50%;
  	height:50%;
  	margin-top:20px;
  }
  .menu-block article{
  	font-size:14px;
  	height:14px;
  	text-align:center;
  	line-height:14px;
  	color: black;
  	margin-top:10px;
  }
</style>