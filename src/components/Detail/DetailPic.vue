<!-- detail-pic -->
<template>
  <div class="detail-pic">
    <div v-for="(item,i) in content" :key="i">
      <span v-html="'<img src=http://image.loho88.com'+item+'>'"></span>
    </div>
    
  </div>
</template>

<script>
//<img lazy-src="http://image.loho88.com/images/ueditor/20160831/1472610388710551.jpg" style="min-height: 20px; background-color: rgb(255, 255, 255); opacity: 1; transition: opacity 1s;" title="1472610388710551.jpg" class="ng-isolate-scope" src="http://image.loho88.com/images/ueditor/20160831/1472610388710551.jpg">
//<img src="http://image.loho88.com/images/ueditor/20160831/1472610388710551.jpg'" title="1472610388710551.jpg">
export default {
  name: "detail-pic",
  props: ["content"],
  methods: {},
  data() {
    return {
      imgPath: "http://image.loho88.com/"
    };
  },
  methods: {
    dataList() {
      // console.log(this.content)
    }
  },

  created() {
    this.dataList();
  }
};
</script>
<style lang='scss'>
.detail-pic {
  font-size: 16px;
  background: #fff;
  span{
    img{
      display: block;
      width: 100%;
    }
  }
}
</style>