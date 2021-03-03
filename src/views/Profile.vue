<template>
  <div class="home h-screen">
    <Header />
    <NavBar />
   <Submenuprofile/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import NavBar from "../components/nav-bar.vue";
import Submenuprofile from "../components/submenuprofile.vue";
export default {
  components: { Header, NavBar,Submenuprofile },
};
</script>

<style></style>
