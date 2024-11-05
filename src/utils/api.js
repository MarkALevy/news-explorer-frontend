import { baseUrl, headers } from "./constants";

function _handleRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
export function request(url, options) {
  return fetch(url, options).then(_handleRes);
}

export function saveItem({
  author,
  content,
  description,
  keyword,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
  isSaved,
}) {
  return request(`${baseUrl}/articles`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      author: author,
      content: content,
      description: description,
      keyword: keyword,
      publishedAt: publishedAt,
      source: source,
      title: title,
      url: url,
      urlToImage: urlToImage,
      isSaved: isSaved,
    }),
  }).then((data) => {
    return data;
  });
}

export function deleteItem(item) {
  return request(`${baseUrl}/articles/${item._id}`, {
    method: "DELETE",
    headers: headers,
  });
}

export function getSavedItems() {
  return request(`${baseUrl}/articles`, {
    method: "GET",
    headers: headers,
  });
}
