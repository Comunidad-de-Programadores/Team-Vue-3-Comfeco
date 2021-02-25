<template>
  <div class="home h-screen">
    <Header />
    <h1 class="text-4xl font-bold text-center my-4">HomePage</h1>
    <Contador />
    <hr />
    <carousel-leaders title="Team Leaders" :content="contentCarouselLeaders" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Contador from "@/components/Contador.vue";
import CarouselLeaders from "@/components/CarouselLeaders.vue";
import CarouselLeaders from "../components/Carousel-Leaders.vue";

export default {
  name: "Home",
  components: {
    Header,
    Contador,
    Carousel,
  },
  data() {
    return {
      contentCarouselLeaders: [
        {
          leaderImg: require("@/assets/images/team-leaders/1.webp"),
          tech: require("@/assets/images/technologies/angular-icon.svg"),
          leaderName: "Bezael Perez",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/2.webp"),
          tech: require("@/assets/images/technologies/angular-icon.svg"),
          leaderName: "Anartz Mugika Ledo",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/3.webp"),
          tech: require("@/assets/images/technologies/angular-icon.svg"),
          leaderName: "Mayra Rodríguez",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/4.webp"),
          tech: require("@/assets/images/technologies/angular-icon.svg"),
          leaderName: "Nicolas Molina",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/5.webp"),
          tech: require("@/assets/images/technologies/angular-icon.svg"),
          leaderName: "Diego Montoya",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/6.webp"),
          tech: require("@/assets/images/technologies/react-icon.svg"),
          leaderName: "Diego Plascencia",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/7.webp"),
          tech: require("@/assets/images/technologies/react-icon.svg"),
          leaderName: "Vanessa Marely",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/8.webp"),
          tech: require("@/assets/images/technologies/react-icon.svg"),
          leaderName: "Lina Maria Montaño Rámirez",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/9.webp"),
          tech: require("@/assets/images/technologies/react-icon.svg"),
          leaderName: "Martin Bavio",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/10.webp"),
          tech: require("@/assets/images/technologies/react-icon.svg"),
          leaderName: "Lara Diaz",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/11.webp"),
          tech: require("@/assets/images/technologies/vue-icon.svg"),
          leaderName: "Cristopher Paniagua",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/12.webp"),
          tech: require("@/assets/images/technologies/vue-icon.svg"),
          leaderName: "Manuel Ojeda",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/13.webp"),
          tech: require("@/assets/images/technologies/vue-icon.svg"),
          leaderName: "Fernando de la Rosa",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/14.webp"),
          tech: require("@/assets/images/technologies/vue-icon.svg"),
          leaderName: "Noemi León",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/15.webp"),
          tech: require("@/assets/images/technologies/vue-icon.svg"),
          leaderName: "Ignacio Anaya",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/16.webp"),
          tech: require("@/assets/images/technologies/svelte-icon.svg"),
          leaderName: "Marcos Rivas",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/17.webp"),
          tech: require("@/assets/images/technologies/svelte-icon.svg"),
          leaderName: "Manuel Muños",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/18.webp"),
          tech: require("@/assets/images/technologies/svelte-icon.svg"),
          leaderName: "Noah Kaufman",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/19.webp"),
          tech: require("@/assets/images/technologies/svelte-icon.svg"),
          leaderName: "Silvestre Vivo",
        },
        {
          leaderImg: require("@/assets/images/team-leaders/20.webp"),
          tech: require("@/assets/images/technologies/svelte-icon.svg"),
          leaderName: "Oscar Barajas",
        },
      ],
    };
  },
};
</script>
