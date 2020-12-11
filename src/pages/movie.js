import medb from '../lib/ApiMEDB';
import baseMarkup from '../components/basemarkup';
import movieTemplate from '../templates/movie__card.hbs';
import trailerTemplate from '../templates/trailer__card.hbs';
import { navigate } from '../lib/Router';
import localStorage from '../lib/storage';
import storage from '../lib/storage';
import { doc } from 'prettier';

const ATTR_NAME = 'data-filmID';
const ATTR_LS_KEY = 'data-lsKeys';
const KEY_WATCHED = 'watchedKey';
const KEY_QUEUE = 'queueKey';

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

  refs.movieCard = duffElem.querySelector('.movie_card');

  //нет смысла вешать одинаковый атрибут на 2 кнопки 1 раз повесить на movie_card и брать оттуда
  //так же логичнее назвать filmID ведь не имя а айдишник. на кнопки лучше довесить атрибуты
  //в который записать ключи по которым обращаться в локалсторедж тогда на 2 кнопки будет 1 обработчик
  const watchedAttribute = refs.watchedButton.getAttribute(ATTR_LS_KEY);
  const queueAttribute = refs.queueButton.getAttribute(ATTR_LS_KEY);
  const movieCardAttribute = refs.movieCard.getAttribute(ATTR_NAME);

  const ls = new localStorage();

  if (ls.checkDataInLocalStorage(KEY_WATCHED, movieCardAttribute)) {
    refs.watchedButton.classList.add('active');
    refs.watchedButton.innerHTML = 'ADDED TO WATCHED';
  }

  if (ls.checkDataInLocalStorage(KEY_QUEUE, movieCardAttribute)) {
    refs.queueButton.classList.add('active');
    refs.queueButton.innerHTML = 'ADDED TO QUEUE';
  }

  return duffElem.innerHTML;
};
export default init;

const buttonClickHandler = event => {
  // debugger;
  event.preventDefault();
  const ls = new storage();

  const buttonRef = event.target;
  const buttonAttrValue = buttonRef.getAttribute('data-lskeys');

  const movieCardAttribute = document
    .querySelector('.movie_card')
    .getAttribute(ATTR_NAME);

  if (ls.checkDataInLocalStorage(buttonAttrValue, movieCardAttribute)) {
    // debugger;
    ls.removeDataFromLocalStorage(buttonAttrValue, movieCardAttribute);
    buttonRef.classList.remove('active');
    if (buttonAttrValue === 'queueKey') {
      buttonRef.innerHTML = 'ADD TO QUEUE';
    } else {
      buttonRef.innerHTML = 'ADD TO WATCH';
    }
  } else {
    ls.addDataToLocalStorage(buttonAttrValue, movieCardAttribute);
    buttonRef.classList.add('active');
    if (buttonAttrValue === 'queueKey') {
      buttonRef.innerHTML = 'ADDED TO QUEUE';
    } else {
      buttonRef.innerHTML = 'ADDED TO WATCH';
    }
  }

  //   //
  // if (buttonRef.hasAttribute('data-lskeys')) // есть ли конкретно этот фильм по этому ключу{
  //   ls.addDataToLocalStorage(buttonAttrValue, movieCardAttribute);
  // }

  // if (buttonAttrValue === 'queueKey') {
  //   buttonRef.innerHTML = 'ADDED TO QUEUE';
  //   buttonRef.classList.add('active');
  // } else {
  //   buttonRef.innerHTML = 'ADDED TO WATCHED';
  //   buttonRef.classList.add('active');
  // }
};

export const addEventHandlers = () => {
  document
    .querySelector('.action__watched')
    .addEventListener('click', buttonClickHandler);

  document
    .querySelector('.action__queue')
    .addEventListener('click', buttonClickHandler);
  document
    .querySelector('.action__queue')
    .addEventListener('click', buttonClickHandler);
  document
    .querySelector('.action__queue')
    .addEventListener('click', buttonClickHandler);
};
