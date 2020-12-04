import templateHeader from '../templates/header.hbs';
import templateSectionMovieCard from '../templates/movie__card.hbs';
import templateFooter from '../templates/hooter.hbs';

import medb from '../lib/ApiMEDB';
import { doc } from 'prettier';

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

const submitWatched = event => {
  const id = event.currentTarget.dataset.name;
  localStorage.setItem('Watched ID', id);
};

const submitQueue = event => {
  const id = event.currentTarget.dataset.name;
  localStorage.setItem('Queue ID', id);
};

export const addEventQueuHandlers = () => {
  document
    .querySelector('.action__watched')
    .addEventListener('click', submitWatched);
  document
    .querySelector('.action__queue')
    .addEventListener('click', submitQueue);
};
