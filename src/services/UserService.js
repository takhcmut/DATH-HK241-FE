import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://e-commerce-website-backend-kauy.onrender.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});
