<template>
    <!-- <div

   v-scroll-handler="scroll"
   scroll-distance="300"
   v-show="isShow" class="back-top"
  > -->
    <div v-scroll-show="isShow" scroll-distance="200">
        <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
            <div v-back-top v-if="isShow.value" class="back-top animated">
                <i class="fa fa-arrow-circle-o-up"></i>
            </div>
        </transition>

    </div>
</template>

<script>
export default {
  name: "back-top",
  data() {
    return {
      isShow: { value: false }
    };
  },
  methods: {
    scroll() {
      //   this.isShow = true
    }
  }
};
</script>

<style lang="scss" scoped>
.back-top {
    font-size: 55px;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  line-height: 50px;
  text-align: center;
  color: #ccc;
  position: fixed;
  right: 15px;
  bottom: 0.7rem;
  z-index: 999;
}
</style>

