<template>
  <Header title="VVeather" @settings="toggle"/>
  <div id="main">
    <router-view :settings="settings" @settings="toggle"/>
    <hr>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      settings: false
    }
  },
  methods: {
    toggle() {
      this.settings = !this.settings;
    }
  }
}
</script>

<style>
html {
  background-color: cornflowerblue;
}

* {
  font-size: xx-large;
}

#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 20px;
  background-color: cornflowerblue;
  color: antiquewhite;
  height: auto;
  width: auto;
}

.table * {
  color: antiquewhite;
}

img {
  width: 100px;
  height: 100px;
}
</style>
