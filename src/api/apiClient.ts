import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

if (!API_KEY) {
  throw new Error("Missing VITE_WEATHER_API_KEY in .env file!");
}

const apiClient = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  params: {
    key: API_KEY,
  },
});

export default apiClient;
