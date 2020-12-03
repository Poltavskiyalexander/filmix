import templateHeader from '../templates/header.hbs';
import templateSectionCards from '../templates/section__cards.hbs';
import templateSectionPagination from '../templates/section__pagination.hbs';
import templateFooter from '../templates/hooter.hbs';
import pag from '../components/pagination';

import medb from '../lib/ApiMEDB';

const init = async () => {
  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', templateHeader());
  duffElem.insertAdjacentHTML('beforeend', templateSectionCards());
  //duffElem.insertAdjacentHTML('beforeend', templateSectionPagination());
  duffElem.insertAdjacentHTML('beforeend', pag());
  duffElem.insertAdjacentHTML('beforeend', templateFooter());
  return duffElem.innerHTML;
};
export default init;
