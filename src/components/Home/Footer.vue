<template>
	<div class="home-footer">
		<div class="maylike">
			<h2 class="you-maylike" :click="isFooterShow" @click="ToggleFooter">你可能喜欢<i class="fa fa-angle-down"></i></h2>
		</div>
		<ul class="like-may" v-if="isFooterShow">
       <li class="like-li" v-for="(image,i) in images" :key="i">
       	  <span class="new-new">NEW</span>
       	  <router-link to="#">      	  	
       	  	<img width="90%" class="item-img" :src="image.img" :key="image.i"/> 
       	  	<article class="item-title" :key="image.i">{{image.title}}</article>
       	  	<p class="item-price" :key="image.i">￥ {{image.salesNum}}</p>  	  
       	  </router-link>
       </li>
		</ul>	
		<div class="bottom-footer" v-if="isFooterShow">已经到底部了!</div>
	</div>
</template>

<script type="text/javascript">

import axios from 'axios'

	export default {
		name:'home-footer',
		data () {
			return {
        images:[
						{
							img: "http://loho88.com/images/201712/G_1513814669870171911.jpg",
							price: 599,
							goodsId: 6208,
							salesNum: 574,
							isNew: true,
							title: "LOHO 光学镜架 钛 枪色+银色 时尚款 LH01010-C2",
							barcode: "200302170622030",
							isHot: false,
							promotePrice: null
						},
						{
							img: "http://loho88.com/images/201712/G_1513818876617353013.jpg",
							price: 399,
							goodsId: 6216,
							salesNum: 1763,
							isNew: true,
							title: "LOHO 光学镜架 金属 钢琴黑色+淡金色 时尚款 LH02010-C01",
							barcode: "201337170825031",
							isHot: false,
							promotePrice: null
						},
						{
							img: "http://loho88.com/images/201711/G_1511323556451959450.jpg",
							price: 399,
							goodsId: 6101,
							salesNum: 523,
							isNew: true,
							title: "LOHO 光学镜架 金属 钢琴黑色 时尚款 LH07022-C01",
							barcode: "201337170719003",
							isHot: false,
							promotePrice: null
						},
						{
							img: "http://loho88.com/images/201712/G_1514415067102861825.jpg",
							price: 599,
							goodsId: 6229,
							salesNum: 171,
							isNew: true,
							title: "LOHO 太阳镜 金属 亮黄色+黑色 个性款 LH04602-C07",
							barcode: "211343170823003",
							isHot: false,
							promotePrice: null
						}
					],
        imbges:[],
        isFooterShow:false
			}
		},
		methods: {
			getImbges() {
        axios.get(this.$root.config.host+'lh/search/?sort=o6&e=249&page=2'
        	).then(res =>{
            this.imbges = res.data.result.data
        	})
			},
			ToggleFooter() {
				this.isFooterShow = !this.isFooterShow
			}
        	
		},
		created() {
			this.getImbges()
		}
		
}
</script>
<style lang="scss">
   .home-footer {
   	width:100%;
   	height:auto;
   	border-top: 1px solid #dedcdc;
   	margin-bottom:0.6rem;
   }
	 .maylike {
     width: 100%;
     height: 0.62rem;
     box-shadow: 0 1px 0 0 #f0efef;
	 }
   .you-maylike{
   	 width:100%;
   	 height:0.62rem;
   	 line-height:0.62rem;
   	 text-align:center;
   	 font-size:18px;
   }
   .fa-angle-down {
   	margin-left:20px;
   }
   .like-may {
   	 width: 100%;
   	 height: auto;
   	 display:flex;
   	 flex-direction: row;
   	 justify-content: space-around;
   	 flex-wrap: wrap;
   }
   .like-li {
   	width:50%;
   	height:2.67rem;
    box-sizing: border-box;
    text-align: center;
    box-shadow:1px 1px 0 0 #f0efef;
   }
   .new-new {
   	 width:0.28rem;
   	 height:14px;
   	 font-size:14px;
   	 color:#333;
   	 display:block;
   	 margin-left:0.1rem;
   	 margin-top:0.1rem;
   }
   .item-img {
     margin-top:0.4rem;
   }
   .item-title {
   	width:90%;
   	height:42px;
   	font-size: 14px;
   	line-height:21px;
   	white-space: wrap;
   	color:#333;
   	margin:0 auto;
   	margin-top:0.2rem;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 2; 
    overflow: hidden; 
   }
   .item-price {
   	 width:100%;
   	 height:0.25rem;
   	 font-size: 17px;
   	 font-weight:bold;
   	 color:#e51c23;
   	 text-align:center;
   	 line-height:0.25rem;
   	 margin-top: 0.2rem;
   }
    .bottom-footer{
    	width:100%;
    	height:0.5rem;
    	font-size:16px;
    	font-weight:bold;
    	text-align: center;
    	line-height:0.5rem;
    	background:#c8c5c5;
    }
</style>
