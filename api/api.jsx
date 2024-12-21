import axios from "axios";

const apiBaseUrl = "http://localhost:8888/wordpress/wp-json/wp/v2/products";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(apiBaseUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
