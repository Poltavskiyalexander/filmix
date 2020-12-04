import templateHeader from '../templates/header.hbs';
import templateSectionMovieCard from '../templates/movie__card.hbs';
import templateFooter from '../templates/hooter.hbs';

import medb from '../lib/ApiMEDB';
import { doc } from 'prettier';

const init = async () => {
  const data = await medb.getFilmsId('682377');
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

  if (action__watched.classList.contains('active')) {
    action__watched.innerHTML = 'ADD TO WATCH';
    action__watched.classList.remove('active');
  } else {
    action__watched.classList.add('active');
    action__watched.innerHTML = 'ADDED TO WATCH';
  }
};

// 1. проверить локал сторедж на наличие ключа
// 2. если ключ есть - добавить класс актив
// 3. если ключа нет - класс убрать

// не рабочая
// const submitQueue = event => {
//   const id = event.currentTarget.dataset.name;
//   ls = localStorage.setItem('Queue ID', id);

//   if (localStorage.getItem('Queue ID') !== null) {
//     document.getElementById(action__queue).classList.add('active');
//   } else {
//     document.getElementById(action__queue).classList.remove('active');
//   }
// };

const submitQueue = event => {
  const id = event.currentTarget.dataset.name;
  localStorage.setItem('Queue ID', id);

  if (action__queue.classList.contains('active')) {
    action__queue.innerHTML = 'ADD TO QUEUE';
    action__queue.classList.remove('active');
  } else {
    action__queue.innerHTML = 'ADDED TO QUEUE';
    action__queue.classList.add('active');
  }

  // document.getElementById('action__queue').onclick = function () {
  //   if (action__queue.classList.contains('active')) {
  //     action__queue.classList.remove('active');
  //   } else {
  //     action__queue.classList.add('active');
  //   }
  // };
};
// рабочая, но баганая
// const submitQueue = event => {
//   const id = event.currentTarget.dataset.name;
//   localStorage.setItem('Queue ID', id);

//   document.getElementById('action__queue').onclick = function () {
//     if (action__queue.classList.contains('active')) {
//       action__queue.classList.remove('active');
//     } else {
//       action__queue.classList.add('active');
//     }
//   };
// };

export const addEventQueuHandlers = () => {
  document
    .querySelector('.action__watched')
    .addEventListener('click', submitWatched);
  document
    .querySelector('.action__queue')
    .addEventListener('click', submitQueue);
};
