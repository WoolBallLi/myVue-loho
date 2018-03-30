<!-- detail -->
<template>
  <div class="detail">
    <header-component></header-component>
    <!-- <detail-banner></detail-banner> -->
    <detail-goods-info></detail-goods-info>
    <back-top></back-top>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "./Header";
import DetailGoodsInfo from "./GoodsInfo";
// import DetailBanner from "./Banner";
import BackTop from "../backTop/backTop";
import FooterComponent from './Footer'

export default {
  name: "detail",
  components: {
    HeaderComponent,
    DetailGoodsInfo,
    BackTop,
    FooterComponent
    // DetailBanner,
  }
};
</script>
<style lang='scss'>
body {
  background: #e1e1e1;
}
</style>