import baseMarkup from '../components/basemarkup';
import { addEventHandlersAllPages } from '../components/EventHandlers';

import templateNotFound from '../templates/not_found.hbs';

const init = async () => {
  const duffElem = document.createElement('div');

  duffElem.insertAdjacentHTML('beforeend', baseMarkup());
  duffElem
    .querySelector('main')
    .insertAdjacentHTML('beforeend', templateNotFound());
  duffElem.querySelector('.search__navLibrary').remove();
  duffElem.querySelector('header').classList.add('header__img-home');

  return duffElem.innerHTML;
};

export default init;

export const addEventHandlers = () => {
  addEventHandlersAllPages();
};
