import axios from "axios";
import { API_BASE_URL } from "constants/API";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});
