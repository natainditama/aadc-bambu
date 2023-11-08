import axios from "axios";
import config from "./config";

const apiClient = axios.create({
  baseURL: config.YOUTUBE_API_URL,
  headers: {
    Accept: "application/json",
  },
});

export default apiClient;
