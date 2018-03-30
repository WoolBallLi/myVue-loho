<!-- nearbox -->
<template>
  <div class="nearbox">
    
    <div class="cityBox">
      <!-- {{store.length}} -->
      <span>{{city}}共{{stores.length}}家体验店(全国<i>{{count}}</i>家)</span>
      <span @click="moreCityShow=!moreCityShow">{{city}}></b></span>
    </div>
    <div v-show="moreCityShow" class="moreCity">
      <h6>热门城市</h6>
      <ul class="moreCityBox">
        <router-link to="302">北京</router-link>
      <router-link to="200">上海</router-link>
      <router-link to="102">广州</router-link>
      <router-link to="101">深圳</router-link>
      </ul>
      
    </div>
    <section v-for="store in stores" :key="store.catId">
      <dl class="conBox">
        <dt class="boxName">{{store.catName}}</dt>
        <dd><img width="100%" :src="imgPath + store.store_image" alt=""></dd>
        <dd class="boxAddress">地址：{{store.chineseAddress}}</dd>
        <dd class="boxBtn">
          <button class="btn1">免费预约</button>
          <button><i class="fa fa-volume-control-phone"></i></button>
        </dd>
      </dl>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "nearbox",
  data() {
    return {
      moreCityShow:false,
      id: [],
      stores: [],
      city:[],
      count:[],
      imgPath: "http://image.loho88.com/",
      cityList:[
        {id:1,cityId:302,cityName:"北京"},
        {id:2,cityId:200,cityName:"上海"},
        {id:3,cityId:102,cityName:"广州"},
        {id:4,cityId:101,cityName:"深圳"},
      ]
      // http://image.loho88.com/images/shop/30201/1489373708477438.jpg
    };
  },
  methods: {
    getGoods() {
      this.id = this.$route.params.id;

      axios.get(this.$root.config.host + "lh/store/" + this.id).then(res => {
        this.stores = res.data.result.stores;
        this.city = res.data.result.city;
      });
      axios.get(this.$root.config.host + "lh/store/" +"count").then(res => {
        this.count = res.data.result;
      });
      
    }
  },
  watch: {
    
    $route:function () {
    this.getGoods();
    }
  },
  created() {
    this.getGoods();
  }
};
</script>
<style lang='scss' scoped>
.nearbox {
  background: #e2e2e2;
  .moreCity{
      background: #fff;
    margin-bottom: 0.2rem;
    height: 0.7rem;
    display: flex;
    flex-direction: column;
      justify-content: space-around;
      align-items: center;
    .moreCityBox{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a{
      color: #000;
      display: block;
      width: 0.5rem;
      height: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
      border: 1px solid #e2e2e2;
      }
    }
    
  }
  .cityBox{
    margin: 0.7rem 0 0.2rem;
    background: #fff;
    height: 0.5rem;
    line-height: 0.5rem;
    display: flex;
      justify-content: space-around;
      align-items: center;
    span{
      i{
        color: #d00;
      }
    }
  }
  .conBox {
    box-sizing: border-box;
    padding: 0.1rem;
    background: #fff;
      border-top: 1px solid #ccc;
    
    .boxName {
      width: 100%;
      font-size: 16px;
      font-weight: 999;
      height: 30px;
      line-height: 30px
    }
    img{
      border-radius: 10px;
    }
    .boxAddress{
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
    }
    .boxBtn{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button{
        width: 50%;
        height: 45px;
        font-size: 16px;
        background: #fff;
        color: #fff;
        text-align: center;
        border: 0;
      }
      .btn1{
        background: #d00;
      }
      i{
        font-size: 30px;
        color: #d00;
      }
    }
  }
}
</style>