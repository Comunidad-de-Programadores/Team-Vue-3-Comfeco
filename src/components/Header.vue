<template>
  <div>
    <router-link class="mr-2" to="/">Home</router-link> |
    <router-link class="mr-2" to="/auth/sign">Sign in</router-link> |
    <router-link class="mr-2" to="/auth/login">Login</router-link> |
    <router-link class="mr-2" to="/auth/reset-password">Reset Password</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
