<template>
  <div class="card">
    <img :src="category.imageUrl" class="image" />
    <p class="name">{{ category.categoryName }}</p>
    <p class="desc">{{ category.description }}</p>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ["category"],
  methods: {},
};
</script>

<style scoped>
.card {
  width: calc((100% - 90px) / 4);
  border: 1px solid gray;
  border-radius: 5px;
}
.image {
  width: 100%;
  object-fit: cover;
  height: 200px;
}
.name {
}
.desc {
}
</style>
