<template>
  <div>
    <NavbarMain />
    <router-view />
  </div>
</template>

<script>
import NavbarMain from "./components/NavbarMain.vue";

export default {
  name: "App",
  components: {
    NavbarMain,
  },
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
