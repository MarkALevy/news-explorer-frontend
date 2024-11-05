import { request } from "./api";
import { from, to, pageSize, apiKey } from "./constants";
const baseUrl = "https://nomoreparties.co/news/v2/everything?";

export const getNews = (q) => {
  return request(
    `${baseUrl}q=${q}&from=${from}&to=${to}&apiKey=${apiKey}&pageSize=${pageSize}`
  );
};
