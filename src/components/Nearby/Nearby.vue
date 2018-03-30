<template>
	<div class="nearby">
    <header-component></header-component>
    <NearBox></NearBox>
	</div>

</template>
<script type="text/javascript">
import HeaderComponent from "../Detail/Header";
import NearBox from "./NearBox";
export default {
  name: "nearby",
  components: {
    HeaderComponent,
NearBox
    // DetailBanner,
  }
};

</script>
<style lang='scss' scoped>

</style>