import Navigo from 'navigo';

import RenderComponent from './Component';

import initHomePage, {
  addEventHandlers,
  linkMyLibraryHeader,
  linkDetailsHeader,
} from '../pages/home';

import initLibrary from '../pages/library';
import initMoviePage from '../pages/movie';
import initSearchPage from '../pages/search';

const root = null;
const useHash = true; // Defaults to: false
const hash = '#';
const router = new Navigo(root, useHash);

const initRouter = () => {
  debugger;
  router
    .on({
      '/': () => {
        debugger;
        navigate('/');
        RenderComponent(initHomePage).then(() => {
          addEventHandlers();
        });
      },
      '/:action': (params, query) => {
        debugger;
        if (params.action === 'home') {
          RenderComponent(initHomePage, params, query).then(() => {
            addEventHandlers();
          });
        }
        if (params.action === 'search') {
          RenderComponent(initSearchPage, params, query).then(() => {
            addEventHandlers();
          });
        }
      },
      '/movie/:id': (params, query) => {
        debugger;
        RenderComponent(initMoviePage, params, query).then(() => {
          addEventHandlers();
        });
      },
      '/library/:action': (params, query) => {
        debugger;
        if (params.action === 'queu' || params.action === 'watched') {
          RenderComponent(initLibrary, params, query).then(() => {
            addEventHandlers();
          });
        }
      },
    })
    .notFound(function (query) {
      console.log(query);
      debugger;
    })
    .resolve();
};

export const navigate = path => {
  router.navigate(path);
};

export default initRouter;
