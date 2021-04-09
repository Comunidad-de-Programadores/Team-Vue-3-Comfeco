<template>
  <div class="h-screen">
    <div id="header-container">
      <Header/>
    </div>
    <div id="contador-section" class="text-black ml-auto mr-auto text-primary">
      <h1 class="text-4xl font-medium m-6 text-center">Community Fest and Code</h1>
      <h2 class="m-6 text-3xl font-medium text-center">¡Inicia el 2021 aceptando el reto!</h2>
      <p class="m-6 text-xl font-normal w-auto text-center">
        Participa del primer festival de código en hispanoamérica hecho por desarrolladores, para
        desarrolladores
      </p>
      <div class="flex items-center justify-center flex-wrap md:my-8">
      <div class="m-4 lg:flex justify-center items-center w-14 h-14 rounded-2xl">
        <img src="../assets/images/technologies/angular-icon.svg" title="Angular" alt="Angular Logo" class="block w-12 h-auto max-w-full">
      </div>
      <div class="m-4 lg:flex justify-center items-center w-14 h-14 rounded-2xl">
        <img src="../assets/images/technologies/react-icon.svg" title="React" alt="React Logo" class=" block w-12 h-12 max-w-full">
      </div>
      <div class="m-4 lg:flex justify-center items-center w-14 h-14 rounded-2xl">
        <img src="../assets/images/technologies/vue-icon.svg" title="Vue" alt="Vue Logo" class="block w-12 h-auto max-w-full">
      </div>
      <div class="m-4 lg:flex justify-center items-center w-14 h-14 rounded-2xl">
        <img src="../assets/images/technologies/svelte-icon.svg" title="Svelte" alt="Svelte Logo" class="block w-12 h-auto max-w-full">
      </div>
      </div>
      <Contador class="px-10 pb-5 pt-5"/>
    </div>
    <div class="relative max-w-5xl m-auto">
      <h2 class="text-4xl font-bold leading-10 text-primary relative ml-5 md:text-4xl font-bold leading-10 text-primary relative">Sobre el evento</h2>
        <hr class="h-1 w-16 self-start bg-gradient-to-r from-primary via-red-300 to-yellow-500 relative ml-5 mb-2 md:h-1 w-16 self-start bg-gradient-to-r from-primary via-red-300 to-yellow-500 relative">
          <div class="mx-4 lg:my-10 grid grid-cols-2 place-items-center">
            <p class="text-center place-self-center md:max-w-lg font-normal font-sans text-base block">
                Comfeco (Community Fest and Code) En su primera edición le da la bienvenida a todos aquellos
                entusiastas que desean aprender y conocer a programadores del todo el mundo a través de esta
                travesía; conocerás a varias personas con esa misma pasión de programar a través de múltiples
                talleres cuyo objetivo es expandir tu conocimiento, una semana maratonica que sin duda dejara con
                ganas a mas de uno; adéntrate en la elaboración de un proyecto con los instructores mas
                profesionales del campo de la programación, ¡un sueño que ahora es posible!
              </p>
            <img src="../assets/logo.png" title="COMFECO Logo" alt="COMFECO Logo" class="md:place-self-center block max-w-full h-auto block box-border center">
          </div>
        <button class="m-5 py-3 px-5 py-2 px-1 rounded-md text-xl text-sm text-white font-bold duration-700 ease-in-out outline-none pointer bg-primary hover:bg-purple-400 ">
        <a rel="noopener noreferrer" target="_blank" href="https://tinyurl.com/conocenos-Organizadores">Conócenos</a>
      </button>
    </div>
    <div id="carousels-container" class="flex justify-center flex-col">
      <div id="carousel-leaders-container" class="pb-5">
        <carousel-leaders title="Team Leaders" :content="contentCarouselLeaders" class="delay-75 duration-700"></carousel-leaders>
      </div>
      <div id="carousel-sponsors-container" > 
        <carousel-sponsors :content="contentCarouselSponsors" class="delay-75 duration-700"></carousel-sponsors>
      </div>
    </div>
      <div id="footer" class="">
    <div class="hidden lg:inline-block">
      <Footer/>
    </div>
    <div class="bg-gray-200 lg:hidden">
      <p class="inline-block h-full w-6/12 text-center text-lg subpixel-antialiased font-normal">COMFECO &copy; 2020</p>
      <ul class="inline-block w-6/12">
        <li class="w-full pl-10 pt-1">
          <a href="https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew" class="inline-block w-5 h-5 content-center items-center m-2 bg-gray-200">
            <img src="../assets/icons/footer-mobile-icons/youtube.svg" alt="Youtube Logo" class="bg-gray-200">
          </a>
          <a href="https://www.instagram.com/comfeco/" class="inline-block w-5 h-5 content-center items-center m-2 bg-gray-200">
            <img src="../assets/icons/footer-mobile-icons/instagram.svg" alt="Instagram Logo" class="bg-gray-200">
          </a>
          <a href="https://www.facebook.com/groups/2637132626546045" class="inline-block w-5 h-5 content-center items-center m-2 bg-gray-200">
            <img src="../assets/icons/footer-mobile-icons/facebook.svg" alt="Facebook Logo" class="bg-gray-200">
          </a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Contador from "../components/Contador"
import CarouselLeaders from "../components/CarouselLeaders"
import CarouselSponsors from "../components/CarouselSponsors"
import Footer from "../components/Footer"

export default {
  name: "Home",
  components: {
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
      ],
      currentUser: null
    }
  }
};
</script>