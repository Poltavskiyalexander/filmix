import { doc } from 'prettier';
import storage from '../lib/ls-library';
//тут мы ТЕСТИМ все функции чтение/запись/удаление/очистка/удаление элемента из массива/добавление элем в массив

const queueButton = document.querySelector('.action__queue');
const watchedButton = document.querySelector('.action__watched');
const getButtonId = document.getElementById('.data-name');

const ls = new storage();
const ID_VALUE = 'idValue';

const addFilmToLocalStorage = (idInfo, shouldAddToLS = true) => {
  if (ls.has(ID_VALUE)) {
    const allId = ls.get(ID_VALUE);
    const newId = [...allId, idInfo];
    ls.set(ID_VALUE, newId);
  } else {
    ls.set(ID_VALUE, [idInfo]);
  }

  if (shouldAddToLS) {
    addFilmToLocalStorage(idInfo);
  }
};

const checkFilmInLocalStorage = () => {
  if (ls.has(ID_VALUE)) {
    const allId = ls.get(ID_VALUE);
    idData.forEach(id => addFilmToLocalStorage(id, false));
  } else {
    allId.forEach((film, id) => {
        const data = { ...film };
  }
};

const removeFilmFromLocalStorage = () => {
  const { id } = ids.dataset;

  const allId = ls.get(ID_VALUE);
  const filteredFilms = allId.filter(all => all.id !== +id);

  ls.set(ID_VALUE, filteredFilms);
};

// -----------------------------
// const arr = [1, 2, 54, 6];

// ls.set('key', arr);
// console.log(ls.get('key'));

// ls.set('keyy', arr);
// console.log(ls.get('keyy'));

// ls.remove('keyy');
// console.log;
