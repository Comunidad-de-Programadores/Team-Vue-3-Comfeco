<template>
  <div class="flex justify-center flex-col">
    <div class="w-11/12 flex flex-row items-center text-xl text-bold justify-between mx-auto">
      <p class="sm:text-xl md:text-xl lg:text-2xl font-bold text-primary text-center my-5">Sponsors</p>
      <button
        class="bg-primary hover:bg-pink-700 p-2 rounded-md text-sm text-white font-bold shadow-xl transition duration-200 ease-in-out outline-none pointer"
      >
        Apoyar iniciativa
      </button>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div v-for="(i, index) in content" :key="index" :title="i.sponsorName" class="border-3 p-10">
        <img :src="i.sponsorImg" alt="" class="w-full rounded-full">
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
        dots: false,
        infinite: true,
        initialSlide: 2,
        autoplay: true,
        autopĺaySpeed: 2000,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        swipeToSlide: true,
        arrows: true,
         responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
