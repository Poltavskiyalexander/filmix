import './styles/index.scss';
import './pages/local-storage';

import initRouter from './lib/Router';

const initApp = () => {
  initRouter();
};

window.addEventListener('load', initApp);
