<template>
  <div id="auth-layout" class="h-screen flex flex-col">
    <div id="nav">
      <Header text="Ingresar" />
    </div>
    <router-view  class="h-full"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
};
</script>
