const baseUrl = "http://localhost:3030/users";

const saveUser = (user) => {
  if (user) {
    localStorage.setItem("accessToken", user.accessToken);
    localStorage.setItem("email", user.email);
    localStorage.setItem("password", user.password);
    localStorage.setItem("_id", user._id);
  }
};

export const login = (email, password) => {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((user) => {
      saveUser(user);
      return user;
    });
};

export const isAuthenticated = () => {
  let accessToken = localStorage.getItem('accessToken');
  return Boolean(accessToken);
}