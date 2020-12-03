import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage, { addEventHandlers } from '../pages/home';
import initLibraryQueu from '../pages/library-queu';
import initLibraryWatched from '../pages/library-watched';
import initMoviePage from '../pages/movie';

const root = null;
const useHash = true; // Defaults to: false
//const hash = '#';
const router = new Navigo(root, useHash);

const initRouter = () => {
  router
    .on({
      '/': (params, query) => {
        RenderComponent(initHomePage, params, query).then(() => {
          addEventHandlers();
        });
      },
      '/:action': (params, query) => {
        RenderComponent(initHomePage, params, query).then(() => {
          addEventHandlers();
        });
      },
      '/library/queu': () => {
        RenderComponent(initLibraryQueu);
      },
    })
    .resolve();

  // .on({
  //   '/': () {RenderComponent(initHomePage).then(() => {
  //     addEventHandlers();
  //   });
  //   },
  //   '/library/queu': () {
  //     RenderComponent(initLibraryQueu)
  //   },
  //   '*': function () {
  //     setContent('Home')
  //   }
  // })
  // .on({
  //     '/',
  //     () => {
  //       RenderComponent(initHomePage).then(() => {
  //         addEventHandlers();
  //       });
  //     },
  //     `/library/queu`,
  //     () => {
  //       RenderComponent(initLibraryQueu);
  //     },
  //   })
  //   .on(`/library/watched`, () => {
  //     RenderComponent(initLibraryWatched);
  //   })
  //   .on(`/movie/:id`, params => {
  //     RenderComponent(initMoviePage, params);
  //   })
  //   .on(`/search`, params => {
  //     console.log(params);
  //     RenderComponent(initMoviePage, params).then(() => {
  //       //addHomePageEventHandlers();
  //     });
  //   })
  //   .on(`/movie/:id`, params => {
  //     RenderComponent(initMoviePage, params).then(() => {
  //       addHomePageEventHandlers();
  //     });
  //   })
};

export const navigate = path => {
  router.navigate(path);
};

export default initRouter;
