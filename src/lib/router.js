import Navigo from 'navigo';
import RenderComponent from './Component';
import { addEventHandlers as pag } from '../components/pagination';

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
          //addLanguageEventHandlers();
          pag();
          console.log('loading');
        });
      },
      '/:action': (params, query) => {
        //debugger;
        if (params.action === 'home') {
          RenderComponent(initHomePage, params, query).then(() => {
            addHomePageEventHandlers();
            //addLanguageEventHandlers();
            pag();
          });
          return;
        }
        if (params.action === 'search') {
          RenderComponent(initSearchPage, params, query).then(() => {
            addSearchPageEventHandlers();
            //addLanguageEventHandlers();
          });
          return;
        }
        RenderComponent(initNotFound).then(() => {
          addNotFoundPageEventHandlers();
          //addLanguageEventHandlers();
        });
      },
      '/movie/:id': (params, query) => {
        // debugger;
        RenderComponent(initMoviePage, params, query).then(() => {
          addMoviePageEventHandlers();
          //addLanguageEventHandlers();
          return;
        });
        RenderComponent(initNotFound).then(() => {
          //addLanguageEventHandlers();
          addNotFoundPageEventHandlers();
        });
      },
      '/library/:action': (params, query) => {
        // debugger;
        if (params.action === 'queu' || params.action === 'watched') {
          RenderComponent(initLibrary, params, query).then(() => {
            addLibraryPageEventHandlers();
            //addLanguageEventHandlers();
          });
          return;
        }
        RenderComponent(initNotFound).then(() => {
          addNotFoundPageEventHandlers();
          //addLanguageEventHandlers();
        });
      },
    })
    .notFound(() => {
      // debugger;
      RenderComponent(initNotFound).then(() => {
        addNotFoundPageEventHandlers();
        //addLanguageEventHandlers();
      });
    })
    .resolve();
};
export default initRouter;

export const navigate = path => {
  router.navigate(path);
};
