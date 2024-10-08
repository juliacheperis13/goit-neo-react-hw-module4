import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";
const VITE_UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common[
  "Authorization"
] = `Client-ID ${VITE_UNSPLASH_API_KEY}`;

export const getImage = async ({ query, page, per_page }) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page,
      orientation: "landscape",
    },
  });
  return response.data;
};
