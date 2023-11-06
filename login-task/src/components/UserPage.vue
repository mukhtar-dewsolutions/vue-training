<template>
  <div class="card">
    <img :src="image" :alt="firstName" style="width: 100%" />
    <h1>{{ firstName + " " + lastName }}</h1>
    <p class="title">Email: {{ email }}</p>
    <p>Gender: {{ gender }}</p>
    <p>
      <button>Username: {{ username }}</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserStore } from "../store/user";

export default defineComponent({
  name: "UserDashboard",
  setup() {
    const userStore = useUserStore();
    const userData = { ...userStore.$state };

    return {
      ...userData,
    };
  },
});
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover,
a:hover {
  opacity: 0.7;
}
</style>
