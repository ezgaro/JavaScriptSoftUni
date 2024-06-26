import {html, render} from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const root = document.querySelector('#root');

export const renderMiddleware = (ctx, next) => {
  const ctxRender = (templateResult) =>{
    let layout = html`
      <nav>
        ${navigationView(ctx)}
      </nav>
      <main>
      ${templateResult}
      </main>
    `;
    render(templateResult, root);
  }
  ctx.render = ctxRender;
  next();
};