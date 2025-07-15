import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
      if (error.response.status === 401) {
        alert("Unauthorized, please login again.");
      }
    } else {
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosConfig;
