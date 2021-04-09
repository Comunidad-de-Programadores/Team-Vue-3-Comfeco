<template>
  <div class="home h-screen">
    <div id="nav-bar">
      <Nav-bar/>
    </div>
   <div id="sub-menu" class="p-10">
     <Submenuprofile/>
   </div>
  </div>
</template>

<script>
import NavBar from "../../components/nav-bar.vue";
import Submenuprofile from "../../components/submenuprofile.vue";
export default {
  name: 'Profile',
  components: { 
    NavBar,
    Submenuprofile 
  },
};
</script>

<style></style>
