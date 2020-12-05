import medb from '../lib/ApiMEDB';
import baseMarkup from '../components/basemarkup';
import movieMarkup from '../templates/movie__card.hbs';
import { navigate } from '../lib/Router';

const init = async (params, query) => {
  //console.log(params);
  //console.log(`params: ${query}`);

  debugger;

  const data = await medb.getFilmsId(params.id);

  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', baseMarkup());
  const headerRef = duffElem.querySelector('.header');
  headerRef.insertAdjacentHTML('afterend', movieMarkup(data));
  headerRef.classList.add('header__img-details');
  headerRef.querySelector('.form-search').remove();

  return duffElem.innerHTML;
};
export default init;

const submitHandler = async event => {
  event.preventDefault();
  const searchQuery = event.target.querySelector('input[name="text"]').value;
  const textError = document.querySelector('.search__libraryFilmList');

  if (searchQuery !== '') {
    const data = await medb.getFilmsQuery(searchQuery);
    console.log(data);
    const { total_results } = data;
    if (total_results === 0) {
      textError.classList.remove('headen');
      console.log(
        'Search result not successful. Enter the correct movie name and',
      );
    } else {
      //console.log(`${total_results}кол фильмов`);
      //event.target.reset();
      navigate('/search?request=' + searchQuery);
    }
    console.log(searchQuery);
  }
};

const hideErrorHandler = event => {
  event.preventDefault();
  const textError = document.querySelector('.search__libraryFilmList');
  textError.classList.add('headen');
};

export const addEventHandlers = () => {
  document
    .querySelector('.form-search')
    .addEventListener('submit', submitHandler);

  document
    .querySelector('input[name="text"]')
    .addEventListener('click', hideErrorHandler);
};
