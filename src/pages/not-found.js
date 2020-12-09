
import baseMarkup from '../components/basemarkup';
import templateHeader from '../templates/header.hbs';
import templateNotFound from '../templates/not_found.hbs';
import templateFooter from '../templates/footer.hbs';


const init = async () => {
  const duffElem = document.createElement('div');


  duffElem.insertAdjacentHTML('beforeend', baseMarkup());
  duffElem.querySelector('main').innerHTML = '<h1>NOT FOUND<h1>';
  duffElem.insertAdjacentHTML('beforeend', templateNotFound());

  duffElem.querySelector('.search__navLibrary').remove();
  duffElem.querySelector('header').classList.add('header__img-home');

  return duffElem.innerHTML;
};

export default init;

export const addEventHandlers = () => {};
