// Library for making basic http requests
//
// @version 2.0.0
// @author Mukhammadkodir Zainabidinov
// @license MIT

class HTTP {
  // HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // HTTP PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // HTTP DELETE request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then(() => resolve("Data deleted..."))
        .catch((err) => reject(err));
    });
  }
}
