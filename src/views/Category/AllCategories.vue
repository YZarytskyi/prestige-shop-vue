<template>
  <div class="container">
    <h1>Our Categories</h1>
    <div class="cardsContainer">
        <CategoryCard :category="category" v-for="category of categories" :key="category.id"></CategoryCard>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../../components/CategoryCard.vue";
import { getAllCategories } from "../../api/categoryApi";

export default {
  name: "AllCategories",
  components: {CategoryCard},
  data() {
    return {
      categories: [],
    };
  },
  methods: {},
  async mounted() {
    this.categories = await getAllCategories();
  },
};
</script>

<style scoped>
.cardsContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
