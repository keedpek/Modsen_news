import axios from "axios";
import { REACT_APP_API_URL } from "../../consts/http";

export const $host = axios.create({
  baseURL: REACT_APP_API_URL
})
