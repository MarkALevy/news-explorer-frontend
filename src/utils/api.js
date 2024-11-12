import { baseUrl } from "./constants";

function _handleRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
export function request(url, options) {
  return fetch(url, options).then(_handleRes);
}

export function saveItem(
  {
    description,
    keyword,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
    isSaved,
    owner,
  },
  token
) {
  return request(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      description: description,
      keyword: keyword,
      publishedAt: publishedAt,
      source: source,
      title: title,
      url: url,
      urlToImage: urlToImage,
      isSaved: isSaved,
      owner: owner,
    }),
  }).then((data) => {
    return data;
  });
}

export function deleteItem(item, token) {
  return request(`${baseUrl}/articles/${item._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export function getSavedItems(token) {
  return request(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}
