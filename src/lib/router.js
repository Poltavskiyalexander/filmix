import Navigo from 'navigo';
import RenderComponent from './Component';

import initHomePage, {
  addEventHandlers as addHomePageEventHandlers,
} from '../pages/home';
import initLibrary, {
  addEventHandlers as addLibraryPageEventHandlers,
} from '../pages/library';
import initMoviePage, {
  addEventHandlers as addMoviePageEventHandlers,
} from '../pages/movie';
import initSearchPage, {
  addEventHandlers as addSearchPageEventHandlers,
} from '../pages/search';
import initNotFound, {
  addEventHandlers as addNotFoundPageEventHandlers,
} from '../pages/not-found';

const root = null;
const useHash = true;
const hash = '#';
const router = new Navigo(root, useHash);

const initRouter = () => {
  // debugger;
  router
    .on({
      '/': () => {
        // debugger;
        navigate('/');
        RenderComponent(initHomePage).then(() => {
          addHomePageEventHandlers();
        });
      },
      '/:action': (params, query) => {
        // debugger;
        if (params.action === 'home') {
          RenderComponent(initHomePage, params, query).then(() => {
            addHomePageEventHandlers();
          });
          return;
        }
        if (params.action === 'search') {
          RenderComponent(initSearchPage, params, query).then(() => {
            addSearchPageEventHandlers();
          });
          return;
        }
        RenderComponent(initNotFound).then(() => {
          addNotFoundPageEventHandlers();
        });
      },
      '/movie/:id': (params, query) => {
        // debugger;
        RenderComponent(initMoviePage, params, query).then(() => {
          addMoviePageEventHandlers();
          return;
        });
        RenderComponent(initNotFound).then(() => {
          addNotFoundPageEventHandlers();
        });
      },
      '/library/:action': (params, query) => {
        // debugger;
        if (params.action === 'queu' || params.action === 'watched') {
          RenderComponent(initLibrary, params, query).then(() => {
            addLibraryPageEventHandlers();
          });
          return;
        }
        RenderComponent(initNotFound).then(() => {
          addNotFoundPageEventHandlers();
        });
      },
    })
    .notFound(() => {
      // debugger;
      RenderComponent(initNotFound).then(() => {
        addNotFoundPageEventHandlers();
      });
    })
    .resolve();
};

export const navigate = path => {
  router.navigate(path);
};

export default initRouter;
