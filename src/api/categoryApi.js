import axios from "axios";

const baseUrl = "https://limitless-lake-55070.herokuapp.com";

export async function getAllCategories() {
  try {
    const { data } = await axios.get(`${baseUrl}/category/`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
