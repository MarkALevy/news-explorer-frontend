import { request } from "./api";
import { baseUrl, from, to, pageSize, apiKey } from "./constants";

export const getNews = (q) => {
  return request(
    `${baseUrl}q=${q}&from=${from}&to=${to}&apiKey=${apiKey}&pageSize=${pageSize}`
  );
};
