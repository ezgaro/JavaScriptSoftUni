const articlesTemplate = (articles) => `
  <h1>Articles</h1>
  ${articles.map(x => `
  <article>
    <h3>${x.title}</h3>
    <footer>
      <p>Author: ${x.author}</p>
    </footer>
  </article>
  `).join('<hr>')}
`;

const divEl = document.querySelector('#root');


const getArticles = () => fetch('http://localhost:3030/jsonstore/messenger')
  .then(res => res.json())
  .then(data => Object.values(data));

export const articlesView = (ctx) => {
  getArticles()
  .then(articles => {
    divEl.innerHTML = articlesTemplate(articles);
  });
};