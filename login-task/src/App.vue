<template>
  <div>
    <Login />
    <Child v-if="false" msg="Welcome to my 'Vue.js + TypeScript' app" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Child from "./components/Child.vue";
import Login from "./components/Login.vue";

export default defineComponent({
  name: "App",
  components: {
    Login,
    Child,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
