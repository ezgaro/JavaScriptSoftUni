const baseUrl = 'http://localhost:3030/users/register';

export const postUsersRegister = (email, password) => {
  return fetch(baseUrl, {
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then(res => res.json()
  );
}