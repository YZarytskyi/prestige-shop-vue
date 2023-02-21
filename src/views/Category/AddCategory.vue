<template>
  <div class="container">
    <h1>Add Category</h1>
    <form @submit.prevent="addCategory">
      <label for="name"> Name </label>
      <input type="text" id="name" v-model="categoryName" />

      <label for="desc"> Description </label>
      <textarea type="text" id="desc" v-model="description"></textarea>

      <label for="img"> Image </label>
      <input type="text" id="img" v-model="imageUrl" />

      <button type="submit" class="submitBtn">Add</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categoryName: "",
      description: "",
      imageUrl: "",
    };
  },
  methods: {
    addCategory() {
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageUrl,
      };

      const baseUrl = "https://limitless-lake-55070.herokuapp.com";

      axios({
        method: "post",
        url: `${baseUrl}/category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.container {
}

form {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 40px;
  text-align: center;
}

input,
textarea {
  border: none;
  border-bottom: 1px solid black;
  outline: none;
}
.submitBtn {
  margin-top: 50px;
  border: none;
  background-color: coral;
  padding: 10px 20px;
}
</style>
