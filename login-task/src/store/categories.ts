import { defineStore } from "pinia";

interface CategoriesState {
  categories: [string?];
}

export const useCategoriesStore = defineStore("categories", {
  state: (): CategoriesState => ({
    categories: [],
  }),
  actions: {
    setCategories(data: CategoriesState) {
      this.categories = data;
    },
  },
});
