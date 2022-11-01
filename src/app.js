const http = new HTTP();

// Get Users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// User Data
const data = {
  name: "John Smith",
  username: "johnsmith",
  email: "jsmith@gmail.com",
};

// // Create user
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Update user
http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Delete user
http
  .delete("https://jsonplaceholder.typicode.com/users/3")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
