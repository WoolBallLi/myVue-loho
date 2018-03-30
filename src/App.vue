<template>
  <div id="app">
      <router-link to="/"></router-link>
       <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
 @import "./stylesheets/_reset.scss";
  @import "./stylesheets/common.css";
</style>
