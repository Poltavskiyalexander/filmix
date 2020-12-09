import baseMarkup from '../components/basemarkup';

const init = async () => {
  const duffElem = document.createElement('div');

  duffElem.insertAdjacentHTML('beforeend', baseMarkup());
  duffElem.querySelector('main').innerHTML = '<h1>NOT FOUND<h1>';

  duffElem.querySelector('.search__navLibrary').remove();
  duffElem.querySelector('header').classList.add('header__img-home');

  return duffElem.innerHTML;
};

export default init;

export const addEventHandlers = () => {};
