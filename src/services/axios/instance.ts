import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error.response || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;
