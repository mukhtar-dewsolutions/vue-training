<template>
  <div class="login-page">
    <div class="form">
      <div class="login">
        <div class="login-header">
          <h3>LOGIN</h3>
          <p>Please enter your credentials to login.</p>
        </div>
      </div>
      <div class="login-form">
        <input v-model="username" type="text" placeholder="username" />
        <input v-model="password" type="password" placeholder="password" />
        <button @click="loginClick">login</button>
        <p class="message">Not registered? <a href="#">Create an account</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",
  data() {
    return {
      router: useRouter(),
      username: "",
      password: "",
    };
  },
  methods: {
    loginClick() {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Login failed");
          }
        })
        .then((userData) => {
          const userStore = useUserStore();
          userStore.setUser(userData);
          window.localStorage.setItem("token", userData.token);

          this.router.push("/user-dashboard");
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    },
  },
});
</script>

<style scoped>
.login-page {
  margin-top: 270px;
}

header .header {
  background-color: #fff;
  height: 45px;
}
header a img {
  width: 134px;
  margin-top: 4px;
}

.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background-color: #328f8a;
  background-image: linear-gradient(45deg, #328f8a, #08ac4b);
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}
</style>
../store
