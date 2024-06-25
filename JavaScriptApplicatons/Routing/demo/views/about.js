const aboutTemplate = () => `
  <h1>About</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore dolorem dicta minus soluta in repudiandae facilis beatae adipisci, quis nobis veniam eaque sit fugiat quo odio eum doloribus at!</p>
`;
const divEl = document.querySelector('#root');

export const aboutView = () => {
  divEl.innerHTML = aboutTemplate();
};