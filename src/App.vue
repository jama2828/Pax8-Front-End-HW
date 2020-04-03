<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';

export default {
  name: 'app',
  components: {
    Header,
  },
};

</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @import '~bulma/bulma';
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>
