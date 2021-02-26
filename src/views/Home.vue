<template>
  <div class="home h-screen">
    <Header />
    <navbar />
    <h1 class="text-4xl font-bold text-center my-4">HomePage</h1>
    <Contador />
    <hr />
    <div class="flex justify-center flex-col">
      <carousel-leaders title="Team Leaders" :content="contentCarouselLeaders" />
      <hr>
      <carousel-sponsors :content="contentCarouselSponsors"></carousel-sponsors>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Contador from "@/components/Contador.vue";
import CarouselLeaders from "@/components/CarouselLeaders.vue";
import CarouselSponsors from "@/components/CarouselSponsors.vue";
import navbar from "../components/nav-bar";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    navbar,
    Header,
    Contador,
    CarouselLeaders,
    CarouselSponsors,
    Footer,
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
      contentCarouselSponsors: [
        {
          sponsorImg:require("@/assets/images/sponsors/sponsor-codelytv.webp"),
          sponsorName: "CodelyTV",
        },
        {
          sponsorImg:require("@/assets/images/sponsors/sponsor-codigofacilito.webp"),
          sponsorName: "CodigoFacilito",
        },
        {
          sponsorImg:require("@/assets/images/sponsors/sponsor-dominicode.webp"),
          sponsorName: "Dominicode",
        },
        {
          sponsorImg:require("@/assets/images/sponsors/sponsor-egghead.webp"),
          sponsorName: "EggHead",
        },
        {
          sponsorImg:require("@/assets/images/sponsors/sponsor-fernando_herrera.webp"),
          sponsorName: "Fernando Herrera",
        },
        {
          sponsorImg:require("@/assets/images/sponsors/sponsor-huawei.webp"),
          sponsorName: "Huawei",
        },
        {
          sponsorImg:require("@/assets/images/sponsors/sponsor-jose_dimas_lujan.webp"),
          sponsorName: "CodelyTV",
        },
        {
          sponsorImg:require("@/assets/images/sponsors/sponsor-latamdev.webp"),
          sponsorName: "LatamDev",
        },
        {
          sponsorImg:require("@/assets/images/sponsors/sponsor-leonidas_esteban.webp"),
          sponsorName: "Leonidas Esteban",
        },
        {
          sponsorImg:require("@/assets/images/sponsors/sponsor-stacklycode.webp"),
          sponsorName: "stacklycode",
        },
        {
          sponsorImg:require("@/assets/images/sponsors/sponsor-tekkitv.webp"),
          sponsorName: "Tekkitv",
        }
      ]
    };
  },
};
</script>
