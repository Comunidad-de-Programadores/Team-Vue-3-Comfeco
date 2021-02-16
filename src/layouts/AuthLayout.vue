<template>
  <div id="auth-layout" class="h-screen flex flex-col">
    <div id="nav">
      <Header text="Ingresar" />
    </div>
    <router-view  class="h-full"/>
    <div id="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import Footer from '../components/Footer'
export default {
  components: {
    Header,
    Footer
  },
};
</script>
