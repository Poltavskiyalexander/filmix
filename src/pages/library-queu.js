import templateHeader from '../templates/header.hbs';
import templateSectionMovieCard from '../templates/movie__card.hbs';
import templateFooter from '../templates/hooter.hbs';

import medb from '../lib/ApiMEDB';

const init = async () => {
  const data = await medb.getFilmsId('682377');
  console.log(data);
  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', templateHeader());
  duffElem.insertAdjacentHTML('beforeend', templateSectionMovieCard(data));
  duffElem.insertAdjacentHTML('beforeend', templateFooter());
  return duffElem.innerHTML;
};
export default init;
