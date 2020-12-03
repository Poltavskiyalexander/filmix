import templateHeader from '../templates/header.hbs';
import templateSectionCards from '../templates/section__cards.hbs';
import templateSectionPagination from '../templates/section__pagination.hbs';
import templateFooter from '../templates/hooter.hbs';

import medb from '../lib/ApiMEDB';

const init = async (params, query) => {
  console.log(params);
  console.log(`params: ${query}`);
  const { results } = await medb.getPopularFilms();
  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', templateHeader());
  duffElem.insertAdjacentHTML('beforeend', templateSectionCards(results));
  duffElem.insertAdjacentHTML('beforeend', templateSectionPagination());
  duffElem.insertAdjacentHTML('beforeend', templateFooter());
  return duffElem.innerHTML;
};
export default init;

const sabmitHendler = async event => {
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
      console.log(`${total_results}кол фильмов`);
    }
    event.target.reset();
    console.log(searchQuery);
  }
};

const sabmitWatched = event => {
  console.log(event);
};

const sabmitQueue = event => {
  console.log(event);
};

export const addEventHandlers = () => {
  document
    .querySelector('.search__navLibraryBtn-Watched')
    .addEventListener('click', sabmitWatched);
  document
    .querySelector('.search__navLibraryBtn-Queue')
    .addEventListener('click', sabmitQueue);

  document
    .querySelector('.form-search')
    .addEventListener('submit', sabmitHendler);
};
