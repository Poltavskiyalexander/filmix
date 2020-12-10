import medb from '../lib/ApiMEDB';
import baseMarkup from '../components/basemarkup';
import movieTemplate from '../templates/movie__card.hbs';
import trailerTemplate from '../templates/trailer__card.hbs';
import { navigate } from '../lib/Router';
import localStorage from '../lib/storage';

const ATTR_NAME = 'data-name';
const KEY_WATCHED = 'watchedArr';
const KEY_QUEUE = 'queueArr';

const init = async (params, query) => {
  //console.log(params);
  //console.log(`params: ${query}`);
  //debugger;

  const data = await medb.getFilmsId(params.id);
  // console.log(data);

  const trailer = await medb.getMovies(params.id);
  console.log(trailer.results);

  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', baseMarkup());
  const refs = {
    header: duffElem.querySelector('.header'),
    main: duffElem.querySelector('.main'),
  };
  refs.header.classList.add('header__img-details');
  refs.header.querySelector('.form-search').remove();

  refs.main.insertAdjacentHTML('beforeend', movieTemplate(data));
  refs.main.insertAdjacentHTML('beforeend', trailerTemplate(trailer.results));
  refs.watchedButton = duffElem.querySelector('.action__watched');
  refs.queueButton = duffElem.querySelector('.action__queue');

  //нет смысла вешать одинаковый атрибут на 2 кнопки 1 раз повесить на movie_card и брать оттуда
  //так же логичнее назвать filmID ведь не имя а айдишник. на кнопки лучше довесить атрибуты
  //в который записать ключи по которым обращаться в локалсторедж тогда на 2 кнопки будет 1 обработчик
  const watchedAttribute = refs.watchedButton.getAttribute(ATTR_NAME);
  const queueAttribute = refs.queueButton.getAttribute(ATTR_NAME);

  const ls = new localStorage();
  // debugger;
  if (ls.checkDataInLocalStorage(KEY_WATCHED, watchedAttribute)) {
    refs.watchedButton.classList.add('active');
  }
  // не имеет смысла как как в момент генерации данные летят из шаблона а там нет класса active
  // else {
  //   refs.watchedButton.classList.remove('active');
  // }

  if (ls.checkDataInLocalStorage(KEY_QUEUE, queueAttribute)) {
    refs.queueButton.classList.add('active');
  }
  //аналогично
  // else {
  //   refs.queueButton.classList.remove('active');
  // }
  return duffElem.innerHTML;
};
export default init;

const buttonClickHandler = event => {
  event.preventDefault();
  const buttonRef = event.target;
  // if (buttonRef.innerHTML = )
  buttonRef.classList.add('active');
  buttonRef.innerHTML('');
};

export const addEventHandlers = () => {
  document
    .querySelector('.action__watched')
    .addEventListener('click', buttonClickHandler);

  document
    .querySelector('action__queue')
    .addEventListener('click', buttonClickHandler);
};
