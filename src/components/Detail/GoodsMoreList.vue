<!-- goods-more -->
<template>
  <div class="goods-more-list">
    <div class="goods-more-box">
      <h1>
        <span>{{uni.tname}}</span>
        <b>￥{{uni.price}}</b>
      </h1>
      <section v-for="(good,i) in uni.goods" :key="i">
        <div class="goods-more-box-l">
          <img :src="imgPath+good.goodsThumbMin" alt="">
        </div>
        <div class="goods-more-box-r">
          <span>{{good.goodsName}}</span>
          <span>￥{{good.shopPrice}}</span>
        </div>
      </section>
        <div class="goods-more-box-b">
          <button>免费预约验光</button>
          <button class="red">加入购物车</button>
        </div>
      <!-- <div>
        <img :src="imgPath+uni.goods[1].goodsThumbMin" alt="">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "goods-more",
  props: ["uni"],
  methods: {},
  data() {
    return {
      imgPath: "http://image.loho88.com/"
    };
  }
};
</script>
<style lang='scss' scoped>
.goods-more-list {
  font-size: 16px;
  background: #fff;
  .goods-more-box {
    margin-top: 0.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      height: 0.5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      b{
        color: #d00;
      }
    }
    section {
      height: 1.1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 14px;
    }
    .goods-more-box-l {
      width: 1rem;
      height: 1rem;
      display: flex;
      align-items: center;
      border: 1px solid #e1e1e1;
      img {
        width: 100%;
      }
    }
    .goods-more-box-r {
      width: 2rem;
      height: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .goods-more-box-b{
    height: 0.7rem;
    display: flex;
      justify-content: space-around;
      align-items: center;
    button{
      width: 1.5rem;
      height: 0.4rem;
      background: #fff;
      border: 1px solid #e1e1e1;
    }
    .red{
      border: 1px solid #d00;
      
    }
  }
}
</style>