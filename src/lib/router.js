import Navigo from 'navigo';
import RenderComponent from './Component';
// import { addEventHandlers as pag } from '../components/pagination';

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
  //debugger;
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
        //debugger;
        if (params.action === 'home') {
          RenderComponent(initHomePage, params, query).then(() => {
            addHomePageEventHandlers();
          });
        } else if (params.action === 'search') {
          RenderComponent(initSearchPage, params, query).then(() => {
            addSearchPageEventHandlers();
          });
        } else {
          RenderComponent(initNotFound).then(() => {
            addNotFoundPageEventHandlers();
          });
        }
      },
      '/movie/:id': (params, query) => {
        //debugger;
        RenderComponent(initMoviePage, params, query).then(() => {
          addMoviePageEventHandlers();
        });
      },
      '/library/:action': (params, query) => {
        // debugger;
        if (params.action === 'queu' || params.action === 'watched') {
          RenderComponent(initLibrary, params, query).then(() => {
            addLibraryPageEventHandlers();
          });
        } else {
          RenderComponent(initNotFound).then(() => {
            addNotFoundPageEventHandlers();
          });
        }
      },
    })
    .notFound(() => {
      //debugger;
      RenderComponent(initNotFound).then(() => {
        addNotFoundPageEventHandlers();
      });
    })
    .resolve();
};
export default initRouter;

export const navigate = path => {
  //debugger;
  router.navigate(path);
};
