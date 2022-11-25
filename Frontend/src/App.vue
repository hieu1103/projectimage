<template>
   <Navbar/>
   <Header/>
   <router-view/>
   <Footer/>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Footer,
  }
}
</script>

<style>
@import "assets/css/home.css" ;
</style>
