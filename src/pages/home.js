import templateHeader from '../templates/header.hbs';
import templateSectionCards from '../templates/section__cards.hbs';
import templateSectionPagination from '../templates/section__pagination.hbs';
import templateFooter from '../templates/hooter.hbs';

import medb from '../lib/ApiMEDB';

const init = async () => {
  const { results } = await medb.getPopularFilms();
  console.log(results);
  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', templateHeader());
  duffElem.insertAdjacentHTML('beforeend', templateSectionCards(results));
  duffElem.insertAdjacentHTML('beforeend', templateSectionPagination());
  duffElem.insertAdjacentHTML('beforeend', templateFooter());
  return duffElem.innerHTML;
  // return medb.getPopularFilms().then(data => {
  //   const { results } = data;
  //   console.log(data);
  //   const duffElem = document.createElement('div');
  //   duffElem.insertAdjacentHTML('beforeend', templateHeader());
  //   duffElem.insertAdjacentHTML('beforeend', templateSectionCards(results));
  //   duffElem.insertAdjacentHTML('beforeend', templateSectionPagination());
  //   duffElem.insertAdjacentHTML('beforeend', templateFooter());
  //   return duffElem.innerHTML;
  // });
};
export default init;

const sabmitHendler = async event => {
  event.preventDefault();
  const searchQuery = event.target.querySelector('input[name="text"]').value;
  const textError = document.querySelector('.search__libraryFilmList');

  if (searchQuery !== '') {
    const { results } = await medb.getFilmsQuery(searchQuery);
    console.log(results);
    // if (searchQuery === title)
    if (results.length === 0) {
      console.log(
        'Search result not successful. Enter the correct movie name and',
      );
    } else {
      results.forEach(element => {
        if (element.title === searchQuery) {
          console.log(element);
        }
      });
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
