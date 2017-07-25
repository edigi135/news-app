<template>
  <div id="app">
    <NavBar></NavBar>
    <SourceSelector @SourceChanged="changeSource($event)"></SourceSelector>
  </div>
</template>

<script>
import server from './server';
import NavBar from './components/NavBar.vue';
import SourceSelector from './components/SourceSelector.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    SourceSelector
  },
  data () {
    return {
      selected: {},
      articles: {}
    };
  },
  methods: {
    changeSource (evt) {
      this.selected = evt;
      this.$emit('UpdateSource', evt);
    }
  }
};
</script>

<style lang="scss">
@import "styles/index.scss";

$fa-font-path: "~font-awesome/fonts";
@import "~font-awesome/scss/font-awesome.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  margin: 0 auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
