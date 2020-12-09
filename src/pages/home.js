import medb from '../lib/ApiMEDB';
import baseMarkup from '../components/basemarkup';
import { navigate } from '../lib/Router';
import Build from '../lib/Data-builder';

const init = async (params, query) => {
  //console.log(`params: ${params}`);
  //console.log(`query: ${query}`);
  //debugger;
  let currentPage = 1;

  //---> переписать на адекватный метод <----
  if (!!query) {
    currentPage = query.slice(5);
  }

  const data = await medb.getPopularFilms(currentPage);
  const { genres: genresArr } = await medb.getGenresList(data);
  const results = Build(data, genresArr);
  //console.log(data);
  //console.log(genresArr);
  //console.log(results);
  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', baseMarkup(results, 'home?'));
  duffElem.querySelector('.search__navLibrary').remove();
  duffElem.querySelector('header').classList.add('header__img-home');
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
