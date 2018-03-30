<!-- detail-header -->
<template>

  <nav class="header-component">
    <div class="navLeft">
      <router-link to="/" tag="i" class="fa fa-angle-left"></router-link>
    </div>
    <div class="navRight">
      <i class="fa fa-shopping-cart"></i>
      <!-- ,listColor='blue' -->
      <i @click="(tabBar=!tabBar)" class="fa fa-list"></i>
    </div>
    <aside v-if="tabBar" class="tab-bar">
      <a href="#">
        <i class="fa fa-user-o"></i>会员中心
      </a>
      <router-link to="/">
        <i class="fa fa-home"></i>首页
      </router-link>

    </aside>
  </nav>

</template>

<script>
export default {
  name: "header-component",
  data() {
    return {
      tabBar: false
      // listColor:'blue'
    };
  }
};
</script>
<style lang='scss'>
.header-component {
  box-sizing: border-box;
  width: 100%;
  height: 0.5rem;
  position: fixed;
  top: 0;
  font-size: 22px;
  z-index: 100;
  background: #fff;
  .navLeft {
    height: 0.5rem;
    float: left;
    display: flex;
    align-items: center;
    .fa-angle-left {
      color: #333;
      font-size: 30px;
      margin-left: 10px;
    }
  }
  .navRight {
    margin-right: 10px;
    width: 80px;
    height: 0.5rem;
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
  .tab-bar {
    width: 1.5rem;
    height: 1rem;
    position: relative;
    top: 0.5rem;
    left: 2rem;
    border: 1px solid #999;
    a {
      background: #fff;
      display: block;
      width: 100%;
      height: 0.5rem;
      color: #333;
      font-size: 16px;
      line-height: 0.5rem;
      i {
        margin-left: 0.1rem;
      }
      .fa-home {
        margin-left: 0.3rem;
      }
    }
  }
}
</style>