import { $host } from ".";
import { API_KEY } from "../../consts/http";

export const fetchNews = async (language, page) => {
  const {data} = await $host.get(`top?api_token=${API_KEY}&language=${language || 'en'}&page=${page || 1}`)
  return data
}