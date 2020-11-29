import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage from '../pages/home';
import initLibraryQueu from '../pages/library-queu';
import initLibraryWatched from '../pages/library-watched';
import initMoviePage from '../pages/movie';

const root = null;
const useHash = true; // Defaults to: false
const hash = '#!'; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

const initRouter = () => {
  router
    .on('/', () => {
      RenderComponent(initHomePage);
    })
    .on(`/library/queu`, () => {
      RenderComponent(initLibraryQueu);
    })
    .on(`/library/watched`, () => {
      RenderComponent(initLibraryWatched);
    })
    .on(`/movie/:id`, params => {
      RenderComponent(initMoviePage, params);
    })
    .resolve();
};

export const navigate = path => {
  router.navigate(path);
};

export default initRouter;
