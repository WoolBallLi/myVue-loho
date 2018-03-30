<template>
	<div>
		<home-header></home-header>
		<home-banner></home-banner>
		<home-menu></home-menu>
		<home-tuwen></home-tuwen>
		<home-tuwenx></home-tuwenx>
		<home-footer></home-footer>
		<home-foot></home-foot>
		<back-top></back-top>
	</div>

</template>

<script type="text/javascript">

  import HeaderComponent from './Header'
  import HomeBanner from './Banner'
  import HomeMenu from './Menu'
  import HomeTuwen from './Tuwen'
  import HomeTuwenx from './Tuwen2'
  import HomeFooter from './Footer'
  import HomeFoot from './Foot'
  import BackTop from '../backTop/backTop'

	export default {
		components: {
			"home-header":HeaderComponent,
			"home-banner":HomeBanner,
			"home-menu":HomeMenu,
			"home-tuwen":HomeTuwen,
			"home-tuwenx":HomeTuwenx,
			"home-footer":HomeFooter,
			"home-foot": HomeFoot,
			"back-top":BackTop
		}
	}

</script>

<style lang="scss">
	

</style>