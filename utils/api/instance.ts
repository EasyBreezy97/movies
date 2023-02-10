import { TOKEN } from "@/common/helpers/constants";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Request interceptors for API calls
instance.interceptors.request.use(
  (config) => {
    console.log({TOKEN});

    config.headers["Authorization"] = `Bearer ${TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default instance;
