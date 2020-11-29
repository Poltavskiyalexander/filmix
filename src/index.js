import './styles/index.scss';

import initRouter, { navigate } from './lib/Router';

const initApp = () => {
  initRouter();
};

window.addEventListener('load', initApp);
