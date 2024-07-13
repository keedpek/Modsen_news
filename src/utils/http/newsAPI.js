import { $host } from ".";
import { API_KEY } from "../../consts/http";

export const fetchNews = async (theme) => {
  const {data} = await $host.get(`everything?q=${theme || 'bitcoin'}&apiKey=${API_KEY}`)
  return data
}