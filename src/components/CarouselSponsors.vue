<template>
  <div class="flex justify-center flex-col">
    <div class="w-11/12 flex flex-row items-center text-xl text-bold justify-between mx-auto">
      <p class="text-gray-800">Sponsors</p>
      <button
        class="bg-primary hover:bg-pink-700 p-2 rounded-md text-sm text-white font-bold shadow-xl transition duration-200 ease-in-out outline-none pointer"
      >
        Apoyar iniciativa
      </button>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div v-for="(i, index) in content" :key="index" :title="i.sponsorName" class="border-3 p-10">
        <img :src="i.sponsorImg" alt="" class="w-full rounded-full shadow-2xl">
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  props: {
    content: { Array }
  },
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        initialSlide: 2,
        autoplay: true,
        autopĺaySpeed: 2000,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        swipeToSlide: true,
        arrows: true
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
