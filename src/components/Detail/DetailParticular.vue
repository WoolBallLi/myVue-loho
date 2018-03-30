<!-- DetailParticular -->
<template>
  <div class="detail-particular">

    <u>{{arg.tname}}</u>
    <b>{{arg.val}}</b>
  </div>
</template>

<script>
export default {
  name: "detail-particular",
  props: ["arg"]
};
</script>
<style lang='scss' scoped>
.detail-particular {
  font-size: 14px;
  background: #fff;
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  u{
    margin-left: 0.3rem;
    color: #999;
  }
  b{
    margin-right: 0.3rem;
  }
}
</style>