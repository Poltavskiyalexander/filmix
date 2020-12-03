import templateHeader from '../templates/header.hbs';
import templateSectionCards from '../templates/section__cards.hbs';
import templateSectionPagination from '../templates/section__pagination.hbs';
import templateFooter from '../templates/hooter.hbs';

import medb from '../lib/ApiMEDB';

const init = async params => {
  console.log(params);
  return medb.getPopularFilms().then(data => {
    const { results } = data;
    console.log(data);
    const duffElem = document.createElement('div');
    duffElem.insertAdjacentHTML('beforeend', templateHeader());
    duffElem.insertAdjacentHTML('beforeend', templateSectionCards(results));
    duffElem.insertAdjacentHTML('beforeend', templateSectionPagination());
    duffElem.insertAdjacentHTML('beforeend', templateFooter());
    return duffElem.innerHTML;
  });
};
export default init;
export const addEventHandlers = () => {
  document.querySelector('button').addEventListener('click', event => {
    console.log(event);
  });
};
