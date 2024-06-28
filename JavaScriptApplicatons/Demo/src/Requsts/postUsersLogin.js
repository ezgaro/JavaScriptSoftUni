const baseUrl = 'http://localhost:3030/users/login';

export const postUsersLogin = (email, password) => {
  return fetch(baseUrl, {
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then(res => {
      if(res.status == 403 || res.status == 203) {
        alert('Invalid email or password');
        throw Error('Invalid email or password');
      }
      return res.json()
    });
}