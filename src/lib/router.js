import Navigo from 'navigo';
import RenderComponent from './Component';
import initHomePage from '../pages/home';
import initLibraryQueu from '../pages/library-queu';
import initLibraryWatched from '../pages/library-watched';

const root = null;
const router = new Navigo(root);

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
    .resolve();
};

export const navigate = path => {
  router.navigate(path);
};

export default initRouter;
