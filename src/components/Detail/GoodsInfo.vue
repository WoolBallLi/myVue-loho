<!-- goodsinfo -->
<template>
  <div class="detail-goodsinfo">
    <div v-show="isShow">
      <detail-banner></detail-banner>
      <div class="goods-name">
        <p class="name-left">{{result.info.goodsName}}</p>
        <div class="name-right">
          <span class="name-right-icon">
            <i class="fa fa-share-alt"></i>
            <span>分享</span>
          </span>
        </div>
      </div>
      <ul class="goods-cost">
        <li class="cost-l">￥{{result.info.shopPrice}}</li>
        <li class="cost-c">快递：免运费</li>
        <li class="cost-r">{{result.info.salesNum}}已买</li>
      </ul>
      <ul class="goods-type">
        <li v-for="(tag,i) in result.info.promiseTag" :key="i">
          <i class="fa fa-check-circle"></i>{{tag}}</li>
      </ul>
      <div v-if="uni.goods" @click="isShow = !isShow" class="goods-more">
        <head>更多选择</head>
        <section class="more-info">
          <div v-for="(good,i) in uni.goods" :key="i" class="more-info-img">
            <img :src="imgPath+good.goodsThumbMin" alt="">
          </div>
          <div class="goods_1">
            <span class="first">{{uni.tname}}</span>
            <span class="end">￥{{uni.price}}</span>
          </div>
          <i class="fa fa-chevron-right"></i>
        </section>
      </div>
      <div class="particular-btn">
        <button @click="parShow=1">图文详情</button>
        <button @click="parShow=2">商品参数</button>
      </div>
      <detail-pic v-if="parShow==1" :content="txtcontent"></detail-pic>
      <detail-particular v-else-if="parShow==2" :arg="arg" v-for="(arg,i) in result.arguments" :key="i"></detail-particular>
    </div>
    <div v-show="!isShow">
      <header class="goods-more-list-header">
        <div @click="isShow=!isShow" class="navLeft">
          <i class="fa fa-angle-left"></i>
        </div>
        <p>优惠配镜推荐</p>
        <div class="navRight">
          <i class="fa fa-shopping-cart"></i>
          <i class="fa fa-list"></i>
        </div>
      </header>
      <goods-more-list :uni="uni" v-for="(uni,i) in result.unioned" :key="i"></goods-more-list>

    </div>
  </div>
</template>




<script>
import axios from "axios";
import DetailBanner from "./Banner";
import GoodsMoreList from "./GoodsMoreList";
import DetailPic from "./DetailPic";
import DetailParticular from "./DetailParticular";
import { mapState } from "vuex";
import { GET_RESULT } from "../../store/detail/const";
// http://m.loho88.com/goods/5230
export default {
  name: "detail-goodsinfo",
  components: {
    DetailBanner,
    GoodsMoreList,
    DetailPic,
    DetailParticular
  },
  // props:['id'],
  data() {
    return {
      isShow: true,
      parShow: 2,
      // info: [],
      // detailarguments: [],
      // unioned: [],
      // goods: [],
      // goods_1: [],
      id:[],
      txtcontent: [],
      imgPath: "http://image.loho88.com/"
    };
  },
  methods: {
    getGoods() {
      console.log(this.$route.params.id);
      this.id = this.$route.params.id;
      this.$store.dispatch(GET_RESULT,this.id);

      //悲惨的数据问题
      axios.get(this.$root.config.host + "lh/goods/"+this.id).then(res => {
       
        this.txtcontent =  res.data.result.txtcontent
          .replace(new RegExp('<p><img src="/images/blank.gif" vip-', "gm"), "")
          .replace(
            new RegExp('<p><img src="/images/blank.gif" data-', "gm"),
            ""
          )
          .replace(new RegExp("</p>", "gm"), "")
          .replace(new RegExp("<p>", "gm"), "")
          .replace(new RegExp('style=""', "gm"), "")
          .replace(new RegExp("<br/>", "gm"), "")
          .replace(new RegExp('src=\"', "gm"), "")
          .replace(new RegExp('\"', "gm"), "");
        this.txtcontent = this.txtcontent.split("/>");

        // console.log(this.txtcontent);
      });
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
.detail-goodsinfo {
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.6rem;
  .name-right-icon {
    font-size: 16px;
  }
  .goods-name {
    margin-top: 2px;
    background: #fff;
    height: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name-left {
      box-sizing: border-box;
      font-size: 14px;
      margin-left: 10px;
      width: 70%;
    }
    .name-right {
      box-sizing: border-box;
      width: 30%;
      .name-right-icon {
        width: 50px;
        float: right;
        margin-right: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-left: 1px solid #e1e1e1;
      }
    }
  }
  .goods-cost {
    box-sizing: border-box;
    margin-top: 2px;
    height: 0.5rem;
    background: #fff;
    display: flex;
    border-top: 1px #f0f0f0 solid;
    justify-content: space-between;
    align-items: center;
    .cost-l {
      font-size: 18px;
      margin-left: 5px;
      color: #d00;
      font-weight: 600;
    }
    .cost-c {
      font-size: 14px;
    }
    .cost-r {
      margin-right: 5px;
      font-size: 14px;
    }
  }
  .goods-type {
    box-sizing: border-box;
    height: 0.3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
  }
  .goods-more {
    box-sizing: border-box;
    width: 100%;
    height: 1.5rem;
    background: #fff;
    display: flex;
    align-items: center;
    .more-info {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    div {
      display: flex;
      align-items: center;
      font-size: 16px;
      width: 1rem;
      height: 1rem;
    }
    .more-info-img {
      border: 1px solid #e1e1e1;

      img {
        width: 1rem;
      }
    }
    .goods_1 {
      flex-direction: column;
      .first {
        font-size: 14px;
      }
      .end {
        font-size: 18px;
        color: #d00;
      }
    }
    .fa-chevron-right {
      font-size: 20px;
    }
  }

  .goods-more-list-header {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    font-size: 22px;
    z-index: 200;
    background: #fff;
    .navLeft {
      height: 40px;
      float: left;
      display: flex;
      align-items: center;
      .fa-angle-left {
        color: #333;
        font-size: 30px;
        margin-left: 10px;
      }
    }
    p {
      font-size: 16px;
      float: left;
      margin-left: 1rem;
      margin-top: 10px;
    }
    .navRight {
      margin-right: 10px;
      width: 80px;
      height: 40px;
      float: right;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .fa-shopping-cart {
        color: #333;
        font-size: 22px;
      }
      .fa-list {
        color: #333;
        font-size: 16px;
      }
    }
  }
  .particular-btn {
    margin-top: 0.1rem;
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #e1e1e1;

    button {
      width: 1.5rem;
      height: 0.4rem;
      background: #fff;
      border: 1px solid #e1e1e1;
    }
  }
}
</style>