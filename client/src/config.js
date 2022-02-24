import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8800/api",
});

export const IMG_FOLDER = "http://localhost:8800/images/";
