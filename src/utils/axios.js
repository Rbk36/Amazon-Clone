import axios from "axios";
let myUrl = import.meta.env.VITE_BASE_URL;
export const axiosInstance = axios.create({
  baseURL: myUrl,
});
