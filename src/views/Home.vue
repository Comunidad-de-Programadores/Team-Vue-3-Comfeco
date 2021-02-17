<template>
  <div class="home h-screen">
    <Header />
    <h1 class="text-4xl font-bold text-center my-4">HomePage</h1>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
