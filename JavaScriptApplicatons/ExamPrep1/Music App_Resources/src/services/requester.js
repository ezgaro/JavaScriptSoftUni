import * as authService from "./authService.js";

const request = (method, url, data) => {
  let options = {
    method: method,
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (authService.getToken()) {
    options.headers['X-Authorization'] = authService.getToken();
  }

  if (method !== "GET" && data) {
    options.body = JSON.stringify(data);
  }

  return fetch(url, options)
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => { throw err; });
      }
      return res.json();
    })
    .catch(error => {
      console.error("Request error:", error.message);
      throw error;
    });
};

export const get = request.bind({}, "GET");
export const post = request.bind({}, "POST");
export const del = request.bind({}, "DELETE");
export const put = request.bind({}, "PUT");
export const patch = request.bind({}, "PATCH");
