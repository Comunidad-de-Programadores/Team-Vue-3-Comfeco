<template>
  <div class="home h-screen flex flex-col justify-center items-center">
    <h1 class="text-4xl font-bold my-4">PrivatePage</h1>
    <div v-if="currentUser">
      <h3 class="text-xl text-center font-bold">Datos del Usuario</h3>
      <p class="mt-1">
        <span class="font-semibold">uid:</span> {{ currentUser.uid }}
      </p>
      <p class="mt-1">
        <span class="font-semibold">displayName:</span>
        {{ currentUser.displayName }}
      </p>
      <p class="mt-1">
        <span class="font-semibold">email:</span> {{ currentUser.email }}
      </p>
      <img
        class="mt-2 mx-auto rounded-full"
        :src="currentUser.photoURL"
        alt="User Photo"
      />
      <button class="primary-button font-bold mt-4" @click="logout()">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase/config";
export default {
  name: "Private",
  data() {
    return {
      currentUser: null,
    };
  },
  created() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  },
  methods: {
    async logout() {
      await firebase.auth().signOut();
      this.$router.push("/");
    },
  },
};
</script>