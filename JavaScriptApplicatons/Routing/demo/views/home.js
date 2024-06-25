const homeTemplate = () => `
  <h1>Home</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\
   Quas, minus? Ipsum molestiae, hic exercitationem iste modi expedita, similique
   fuga aperiam aut voluptatibus natus vero iure quia error est a perspiciatis.</p>
`;
const divEl = document.querySelector('#root');
export const homeView = () => {
  divEl.innerHTML = homeTemplate();
};