import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Request interceptors for API calls
instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = ` ${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default instance;
