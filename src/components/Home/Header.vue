<template>
	 <header class="header">
	 	  <div class="nav-left">
	 	  	 <div class="city-li">
	 	  	 	 深圳市<i class="fa fa-angle-down"></i>
	 	  	 </div>
	 	  </div>
	 	  <div class="nav-center">
	 	  	 <img src="../../assets/logo2.png">
	 	  </div>
	 	  <div class="nav-right">
	 	  	 <div><i class="fa fa-shopping-cart"></i></div>
	 	  	 <div><i class="fa fa-user-o"></i></div>
	 	  </div>
	 </header>

</template>

<script type="text/javascript">
	
</script>
<style lang="scss" scoped>
	.header {
		width:100%;
		height:0.6rem;
    background:#ffffff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
    position:fixed;
    top:0;
    z-index:999;
	}
  .nav-center {
  	width: 0.36rem;
  	height: 0.31rem;
    margin-left:-20px;
  }
  .city-li {
  	font-size:16px;
    margin-top:-19px;
  }
  .fa {
  	width: 0.14rem;
  	height: 0.28rem;
  	color: #999999;
  	margin-top: 0.13rem;
  }
  
  .nav-left {
  	margin-left:0.3rem;
  }
  .nav-right>div{
  	float:right;
  	width:0.6rem;
  	height:0.6rem;
  	text-align:center;
  	line-height: 0.6rem;
  }
  .nav-right>div>i{
  	font-size:28px;
  }
</style>