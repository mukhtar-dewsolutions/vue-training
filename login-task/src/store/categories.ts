import { defineStore } from "pinia";

interface CategoriesState {
  categories: [string?];
  categoryProductList: [];
}

export const useCategoriesStore = defineStore("categories", {
  state: (): CategoriesState => ({
    categories: [],
    categoryProductList: [],
  }),
  actions: {
    setCategories(data: CategoriesState) {
      this.categories = data;
    },
    setCategoryProductList(data: CategoriesState) {
      this.categoryProductList = data;
    },
  },
});
