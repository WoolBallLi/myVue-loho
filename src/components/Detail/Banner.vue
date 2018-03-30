<!-- banner -->
<template>
  <div class="swiper-container detail-banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(pic,i) in result.info.pics" :key="i">
        <img width="100%" :src="imgPath+pic">
      </div>
    </div>
    <!-- {{test}} -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import axios from "axios";
import { mapState } from "vuex";
import { GET_RESULT } from "../../store/detail/const";
//http://m.loho88.com/goods/5230
export default {
  name: "detail-banner",
  data() {
    return {
      test: [],
      num: 0,
      imgPath: "http://image.loho88.com/"
    };
  },
  methods: {
    getGoods() {
      this.$store.dispatch(GET_RESULT);
    },
    dataInfo() {
      this.test = this.result[0];
    }
  },
  computed: {
    ...mapState({
      result: state => state.detail.result
    })
  },
  created() {
    this.getGoods();
  },
  updated() {
    new Swiper(".detail-banner", {
      autoplay: 1000,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
    this.dataInfo();
  }
};
</script>
<style lang='scss' scoped>
.detail-banner {
  background: #fff;
  height: 2.2rem;
  width: 100%;
  margin-top: 40px;
  padding: 50px 0;
}
</style>