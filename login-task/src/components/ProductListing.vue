<template>
  <div>
    <h1>Products in {{ currentCategory.category }}</h1>
    <div class="cardList">
      <div v-for="item in itemList" :key="item.id" class="product-card">
        <div class="badge">{{ item.rating.toFixed(1) }} &starf;</div>
        <div class="product-tumb">
          <img :src="item.thumbnail" :alt="item.title" />
        </div>
        <div class="product-details">
          <span class="product-catagory"
            >{{ item.brand }}, {{ item.category }}</span
          >
          <h4>
            <a href="">{{ item.title }}</a>
          </h4>
          <p>{{ item.description }}</p>
          <div class="product-bottom-details">
            <div class="product-price">
              <small>${{ item.price }}</small>
              ${{
                Math.round(
                  (item.price / 100) * item.discountPercentage - item.price
                )
              }}
            </div>
            <div class="product-links">
              <a href=""><i class="fa fa-heart"></i></a>
              <a href=""><i class="fa fa-shopping-cart"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useCategoriesStore } from "../store/categories";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const categoriesStore = useCategoriesStore();
    const route = useRoute();
    const productListData = computed(() => categoriesStore.categoryProductList);
    const itemList = computed(() => {
      return productListData.value || [];
    });
    const currentCategory = route.params;

    return {
      itemList,
      currentCategory,
    };
  },
});
</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
}
a {
  text-decoration: none;
}

.cardList {
  display: flex;
  margin-top: 10px;
}

.product-card {
  width: 380px;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  margin: 10px;
  background: #fafafa;
}

.badge {
  position: absolute;
  left: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: red;
  color: #fff;
  padding: 3px 10px;
}

.product-tumb {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
}

.product-tumb img {
  height: 300px;
  width: 300px;
  object-fit: contain;
}

.product-details {
  padding: 30px;
}

.product-catagory {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
  margin-bottom: 18px;
}

.product-details h4 a {
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #363636;
  text-decoration: none;
  transition: 0.3s;
}

.product-details h4 a:hover {
  color: #fbb72c;
}

.product-details p {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 18px;
  color: #999;
}

.product-bottom-details {
  overflow: hidden;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.product-bottom-details div {
  float: left;
  width: 50%;
}

.product-price {
  font-size: 18px;
  color: #fbb72c;
  font-weight: 600;
}

.product-price small {
  font-size: 80%;
  font-weight: 400;
  text-decoration: line-through;
  display: inline-block;
  margin-right: 5px;
}

.product-links {
  text-align: right;
}

.product-links a {
  display: inline-block;
  margin-left: 5px;
  color: #e1e1e1;
  transition: 0.3s;
  font-size: 17px;
}

.product-links a:hover {
  color: #fbb72c;
}
</style>
