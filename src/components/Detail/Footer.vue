<!-- footer -->
<template>
  <div class="footer-component">
    <section class="footer-l">
      <span class="footer-l-l">
        <i class="fa fa-comments-o"></i>
        <b>客服</b>
      </span>
      <span class="footer-l-r">
        <i class="fa fa-star-o"></i>
        <b>收藏</b>
      </span>
      <span class="footer-l-r"></span>
    </section>
    <section class="footer-r">
      <router-link to="/shopcar" tag="span" class="footer-r-l">加入购物车</router-link>
      <span class="footer-r-r">附近预约验光点</span>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { GET_RESULT } from "../../store/detail/const";

export default {
  name: "footer-component",
  data() {
    return {
     id:[]
    };
  },
  methods: {
    getGoods() {
      this.id = this.$route.params.id;
      this.$store.dispatch(GET_RESULT,this.id);
      console.log(this.result);
    },
  },
  computed: {
    ...mapState({
      result: state => state.detail.result,
      uni: state => state.detail.uni
    }),
  },
  created() {
    this.getGoods();
  }
};
</script>
<style lang='scss' scoped>
.footer-component {
  width: 100%;
  height: 0.6rem;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  section {
    height: 0.6rem;
  }
  .footer-l {
    width: 35%;
    float: left;
    span {
      float: left;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      font-size: 16px;
      text-align: center;
      i {
        font-size: 20px;
      }
    }
  }
  .footer-r {
    width: 65%;
    float: right;
    span {
      float: left;
      width: 50%;
      height: 100%;
      font-size: 14px;
      text-align: center;
      line-height: 0.6rem;
      color: #fff;
    }
    .footer-r-l {
      background: #ff9500;
    }
    .footer-r-r {
      background: #e8343b;
    }
  }
}
</style>