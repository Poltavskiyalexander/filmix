import storage from '../lib/ls-library';
//тут мы ТЕСТИМ все функции чтение/запись/удаление/очистка/удаление элемента из массива/добавление элем в массив

const queueButton = document.querySelector('.action__queue');
const watchedButton = document.querySelector('.action__watched');

const ls = new storage();
const arr = [1, 2, 54, 6];

ls.set('keyy', arr);
console.log(ls.get('keyy'));

// ls.remove('keyy');

// console.log;
