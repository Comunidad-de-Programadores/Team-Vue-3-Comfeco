<template>
  <div id="app">
    <div id="nav">
      <Header text="Ingresar"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header'
export default {
  components:{
    Header
  }
}
</script>