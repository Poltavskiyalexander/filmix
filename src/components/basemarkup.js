import templateHeader from '../templates/header.hbs';
import templateSectionCards from '../templates/section__cards.hbs';
import templateFooter from '../templates/footer.hbs';

import pagination from './pagination';

const init = (data = null, url = '#') => {
  const duffElem = document.createElement('div');

  duffElem.insertAdjacentHTML('beforeend', templateHeader());
  if (data) {
    const { results } = data;
    duffElem.insertAdjacentHTML('beforeend', templateSectionCards(results));
    duffElem.insertAdjacentHTML('beforeend', pagination(data, url));
  }
  duffElem.insertAdjacentHTML('beforeend', templateFooter());
  return duffElem.innerHTML;
};
export default init;
