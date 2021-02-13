<template>
  <div class="container mx-auto">
    <div class="w-11/12 xl:w-2/5 h-auto mx-auto border border-gray-300 rounded">
      <div class="grid grid-cols-1 gap-4 m-2">
        <div>
          <h2 class="text-2xl xl:text-4xl">Registrar Usuario</h2>
        </div>
        <div class="w-full flex justify-start flex-col">
          <!-- <div class="w-full"> -->
          <div class="w-2/3 mx-auto">
            <input
              type="text"
              placeholder="username"
              class="w-full border rounded-md border-gray-200 p-2"
              v-model="username"
            />
          </div>
          <div class="w-2/3 mx-auto">
            <div class="w-full flex justify-start">
              <span class="m-1 text-left text-xs">Lorem ipsum dolor sit, </span>
            </div>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="email"
            class="w-2/3 border rounded-md border-gray-200 p-2"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            class="w-2/3  border rounded-md border-gray-200 p-2"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="confirmar password"
            class="w-2/3 border rounded-md border-gray-200 p-2"
          />
        </div>
        <div>
          <button class="w-2/3 bg-blue-500 text-white py-2 px-4 rounded">
            <!-- :disabled="isActive" -->
            Registrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script> 

import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: "Login",
  data(){
    return{
       username: '',
      password: '',
        email: ''
    }
  }, 
    validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  }
  // validations() {
  //   return {
  //     username: { required }, // Matches this.firstName
  //     password: { required }, // Matches this.lastName
  //     contact: {
  //       email: { required, email }, // Matches this.contact.email
  //     },
  //   };
  // },
};
</script>
