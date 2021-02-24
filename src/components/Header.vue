<template>
  <header
    class="flex justify-between items-center md:py-2 md:px-6 py-1 px-3 border-b-2 border-primary shadow-md"
  >
    <router-link class="md:w-1/4 sm:w-2/4" to="/">
      <img
        src="../assets/images/logo-comfeco.png"
        alt=""
        class="my-3"
        style="height: 60px"
      />
    </router-link>
    <div class="md:w-2/4 hidden md:block">
      <p class="lg:text-2xl md:text-xl text-center font-bold text-primary">
        Haz parte de la comunidad, ¡Concursa y Gana!
      </p>
    </div>
    <div class="md:w-1/4 sm:w-2/4 flex justify-end">
      <router-link
        to="/auth/login"
        class="bg-primary hover:bg-pink-700 md:py-3 md:px-5 py-2 px-1 rounded-md md:text-xl text-sm text-white font-bold shadow-xl transition duration-200 ease-in-out outline-none"
        target="_blank">{{ text }}</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    text: {
      type: String,
      default: "Ingresar",
    },
  },
};
</script>
