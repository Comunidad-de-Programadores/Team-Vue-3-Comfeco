<template>
  <div id="footer-container" class="bg-auto ml-24">
    <footer class="relative w-full h-auto py-px-50 pr-px-100 flex space-between flex-wrap lg:mt-24">
      <div class="flex space-between flex-wrap flex-row">
        <div class="ml-8 mt-5 mr-8 inline-block">
          <h2 class="relative font-medium mb-1 border-b-2 max-w-max border-primary">
            About Us
          </h2>
          <p class="w-50">
            COMFECO (Community Fest and Code) le da la bienvenida a todos aquellos entusiastas
            <br/>
            que desean aprender y conocer a programadores del todo el mundo a través de esta travesía!
          </p>
        </div>
        <div class="ml-8 mt-5 mr-8 inline-block">
          <ul>
            <h2
              class="relative font-medium mb-1 border-b-2 border-black max-w-max border-primary"
            >
              Follow Us
            </h2>
            <li class="flex mt-5">
              <a
                class="flex inline-block w-5 h-2 content-center items-center m-2"
                href="https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../assets/icons/Youtube.svg" alt="Youtube Logo" />
              </a>
              <a
                class="flex inline-block w-5 h-2 content-center items-center m-2"
                href="https://www.facebook.com/groups/2637132626546045"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../assets/icons/Facebook.svg" alt="Facebook Logo" />
              </a>
              <a
                class="flex inline-block w-5 h-2 content-center items-center m-2"
                href="https://www.instagram.com/comfeco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../assets/icons/Instagram.svg" alt="Instagram Logo" />
              </a>
              <a
                class="flex inline-block w-5 h-2 content-center items-center m-2"
                href="https://discord.com/invite/5Bb5yvzNPr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../assets/icons/discord.svg" alt="Discord Logo" />
              </a>
            </li>
          </ul>
        </div>
        <div class="ml-8 mt-3 mb-3 mr-8 inline-block">
          <h2
            class="relative font-medium mb-1 border-b-2 border-black max-w-max border-primary"
          >
            Quick Links
          </h2>
          <ul>
            <li class="flex mt-1">
              <router-link to="/Terminos-y-Condiciones" target="_blank"
                >Privacity Policy</router-link
              >
            </li>
            <li class="flex mt-1">
              <router-link to="/terminos-y-condiciones">Terms & Conditions</router-link>
            </li>
            <li class="flex mt-1">
              <a href="https://discord.com/invite/5Bb5yvzNPr" target="_blank"
                >Contac Us</a
              >
            </li>
          </ul>
        </div>
        <div class="w-96">
          <div class="inline-block">
            <img
              class="w-10 h-10 ml-8 inline-block"
              src="../assets/images/Isotipo-brand.png"
              alt="COMFECO Logo"
            />
            <p class="w-max-w ml-8 inline-block">Comunity Fest and Code</p>
          </div>
          <p class="p-2 ml-32 sm:ml-32 text-center inline-block">COMFECO &copy; 2020</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>
