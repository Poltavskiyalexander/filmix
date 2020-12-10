import medb from '../lib/ApiMEDB';
import baseMarkup from '../components/basemarkup';
import movieMarkup from '../templates/movie__card.hbs';
import { navigate } from '../lib/Router';
import localStorage from '../lib/storage';

const init = async (params, query) => {
  //console.log(params);
  //console.log(`params: ${query}`);
  //debugger;

  const data = await medb.getFilmsId(params.id);
  console.log(data);

  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', baseMarkup());
  const Resfs = {
    header: duffElem.querySelector('.header'),
    main: duffElem.querySelector('.main'),
  };

  Resfs.main.insertAdjacentHTML('beforeend', movieMarkup(data));
  Resfs.header.classList.add('header__img-details');
  Resfs.header.querySelector('.form-search-library').remove();

  const refs = {
    watchedButton: duffElem.querySelector('.action__watched'),
    queueButton: duffElem.querySelector('.action__queue'),
  };

  const attrName = 'data-name';

  const watchedAttribute = refs.watchedButton.getAttribute(attrName);
  const queueAttribute = refs.queueButton.getAttribute(attrName);

  const ls = new localStorage();

  if (ls.checkDataInLocalStorage('action__watched', watchedAttribute)) {
    // debugger;

    refs.watchedButton.classList.add('active');
  } else {
    refs.watchedButton.classList.remove('active');
  }

  if (ls.checkDataInLocalStorage('action__queue', queueAttribute)) {
    refs.queueButton.classList.add('active');
  } else {
    refs.queueButton.classList.remove('active');
  }

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
    .querySelector('.action__queue') // поставила точку (АТ)
    .addEventListener('click', buttonClickHandler);
};
