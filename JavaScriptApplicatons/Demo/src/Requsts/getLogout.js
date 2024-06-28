const baseUrl = "http://localhost:3030/users/logout";

export const fetchLogout = () => {
  const token = localStorage.getItem('user');
  localStorage.removeItem('user');
  const res = fetch(baseUrl, {
    headers: {
      "x-authorization": token,
    },
  });
  return res;
}