<template>
  <div class="navbar">
    <div class="dropdown">
      <button class="dropbtn">
        Products Categories
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <button
          v-for="category in categoriesData"
          :key="category"
          @click="getCategoryProducts(category)"
        >
          {{ category }}
        </button>
      </div>
    </div>
    <router-link to="/user-dashboard">Profile</router-link>
  </div>
</template>

<script>
import { defineComponent, onMounted, computed } from "vue";
import { useCategoriesStore } from "../store/categories";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const categoriesStore = useCategoriesStore();
    const router = useRouter();
    const categoriesData = computed(() => categoriesStore.categories);
    const categoryProductData = computed(
      () => categoriesStore.categoryProductList
    );

    const getCategoryProducts = (category) => {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Categories load failed");
          }
        })
        .then((productsData) => {
          categoriesStore.setCategoryProductList(productsData);
          console.log(categoryProductData);
          router.push(`/product-listing/${category}`);
        })
        .catch((error) => {
          console.error("Something went wrong:", error);
        });
    };

    const getCategories = () => {
      fetch("https://dummyjson.com/products/categories")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Categories load failed");
          }
        })
        .then((categories) => {
          categoriesStore.setCategories(categories);
        })
        .catch((error) => {
          console.error("Something went wrong:", error);
        });
    };

    onMounted(() => {
      getCategories();
    });
    console.log(categoryProductData, "product data");
    return {
      categoriesData,
      getCategoryProducts,
    };
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
