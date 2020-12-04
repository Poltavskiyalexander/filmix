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

  const refs = {
    buttonWatched: document.querySelector('action__watched'),
    buttonQueue: document.querySelector('action_queue'),
  };

  refs.buttonWatched.classList.add('active');
  // let getFilmWatchedId = localStorage.getItem('Watched ID');

  // if (getFilmWatchedId) {
  // } else
};

// ПРИМЕР
//   if (!getItemKeyTheme) {
//     refs.body.classList.add(Theme.LIGHT);
//     getItemKeyTheme = Theme.LIGHT;
//   } else {
//     refs.body.classList.add(getItemKeyTheme);
//   }

//   if (getItemKeyTheme === Theme.DARK) {
//     refs.switchInput.checked = true;
//   } else {
//     getItemKeyTheme = false;
//   }
// };

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
