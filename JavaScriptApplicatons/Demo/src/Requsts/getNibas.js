const baseUrl = 'http://localhost:3030/data/friends';

export const fetchNibas = () => {
  return fetch(baseUrl)
    .then(res => res.json());
}