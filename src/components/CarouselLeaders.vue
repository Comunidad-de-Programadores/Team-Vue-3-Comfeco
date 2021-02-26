<template>
  <section class="mt-6">
    <div class="flex justify-center items-center">
      <span
        class="sm:text-xl md:text-xl lg:text-2xl font-bold text-primary text-center border-b-4 border-primary my-5"
        >{{ title }}</span
      >
    </div>
    <VueSlickCarousel v-bind="settings" class="my-5 ml-12 sm:ml-6 md:ml-10">
      <div
        class="flex flex-col justify-center p-5 black h-80 mr-6 relative"
        v-for="i in content"
        :key="i.name"
      >
        <div class="h-full w-60 rounded-xl overflow-hidden shadow-2xl">
          <div class="h-3/4">
            <img
              :src="i.leaderImg"
              class="object-cover object-center h-full w-full"
              alt=""
            />
          </div>
          <div class="flex justify-center items-center h-1/4">
            <p class="text-primary text-bold uppercase text-lg font-extrabold">
              {{ i.leaderName }}
            </p>
          </div>
          <div
            class="flex justify-center items-center absolute h-16 w-16 bg-white rounded-full top-48 left-28"
          >
            <img :src="i.tech" alt="" class="w-10" />
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  props: {
    title: String,
    content: Array,
  },
  components: { VueSlickCarousel },
  data() {
    return {
      image: "../assets/images/team-leaders/1.webp",
      settings: {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
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

<style lang="scss" scoped>
#container-carousel {
  width: 100%;
  padding: 20px 0;
  overflow: hidden;

  #carousel {
    display: flex;
    flex-wrap: nowrap;

    #card {
      min-width: 40%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
