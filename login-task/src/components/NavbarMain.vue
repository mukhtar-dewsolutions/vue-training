<template>
  <div class="navbar">
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <div class="dropdown">
      <button class="dropbtn">
        Products
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <a href="#profile">Profile</a>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return;
  },
});
</script>

<style scoped>
* {
  margin: 0px;
}

.navbar {
  overflow: hidden;
  background-color: #00302a;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 16px 30px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
  text-align: center;
  padding: 0px 30px;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 16px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: #fff8ab;
  color: black;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 0px 0px 5px 5px;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  font-size: 14px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #fffde3;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>