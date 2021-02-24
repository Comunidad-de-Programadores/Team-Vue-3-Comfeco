
<template>
  <div class="home h-screen">
    <navbar/>
    <h1 class="text-4xl font-bold text-center my-4">HomePage</h1>
    <Contador/>
    <Footer/>
  </div>
</template>

<script>

import navbar from "../components/nav-bar";
import Contador from '../components/Contador';
import Footer from '../components/Footer'

export default {
  name: "Home",
  components: {
    navbar,
    Contador,
    Footer
  },
};
</script>
