import { parse } from 'handlebars';
import templateSectionPagination from '../templates/section__pagination.hbs';
import paginationList from '../templates/navigation_list.hbs';

//{ page, total_pages: totalPages }
const pagegen = () => {
  const obj = {
    page: 50,
    total_pages: 100,
  };
  const { page, total_pages: totalPages } = obj;

  //-------твой код ------
  const buffElem = document.createElement('div');

  buffElem.insertAdjacentHTML('beforeend', templateSectionPagination());

  let lists = buffElem.querySelector('.numpage__lists');

  let parentList = buffElem.querySelector('.numpage');
  let addlist = document.createElement('li');
  let rightArrow = buffElem.querySelector('.numpage__right-arrow');
  let leftArrow = buffElem.querySelector('.numpage__left-arrow');

  const addPages = function () {
    if (totalPages <= 1) {
      parentList.remove();
    }

    const max = 9;

    if (totalPages > 1) {
      lists.insertAdjacentHTML(
        'beforeend',
        paginationList({ page: 1, more: true }),
      );

      for (let i = page - 3; i <= page + 3; i++) {
        let str = paginationList({ page: i, more: true });
        if (i <= 1 || i >= totalPages) {
        } else {
          if (i === page - 3) {
            lists.insertAdjacentHTML(
              'beforeend',
              paginationList({
                class: 'numpage__more',
                page: '...',
                more: false,
              }),
            );
          } else if (i === page + 3) {
            lists.insertAdjacentHTML(
              'beforeend',
              paginationList({
                class: 'numpage__more',
                page: '...',
                more: false,
              }),
            );
          } else {
            lists.insertAdjacentHTML('beforeend', str);
          }
        }
      }

      lists.insertAdjacentHTML(
        'beforeend',
        paginationList({ page: totalPages, more: true }),
      );
      const itemsRefs = buffElem.querySelectorAll('.numpage__list-item');

      itemsRefs.forEach(element => {
        element.textContent == page
          ? element.classList.add('item__border-active')
          : null;
      });
    }
    if (page === totalPages) {
      rightArrow.remove();
    }
    if (page === 1) {
      leftArrow.remove();
    }

    // Если количество в totalPAge меньше 9 то мы перебираем и создаём столько li, сколько указанно в totalPage

    // if (totalPages < max) {
    //   for (let i = 0; i < totalPages; i++) {
    //     let str = `<li class="numpage__list"><a class="numpage__list-item" href="#">${
    //       i + 1
    //     }</a></li>`;
    //     console.log(str);
    //     lists.insertAdjacentHTML('beforeend', str);
    //   }

    //   // В противном случае будем создавать 9 штук
    // } else {
    //   for (let i = 0; i < max; i++) {
    //     let str = `<li class="numpage__list"><a class="numpage__list-item" href="#">${
    //       i + 1
    //     }</a></li>`;
    //     lists.insertAdjacentHTML('beforeend', str);
    //   }
    // }
    //  Если количество в totalPAge больше чем 9(мах), то нужно перебрать и добавить на 1 элемент в текст-контент 1 ,
    //  затем "...", потом 5 элементов, также "...", и номер totalPage.

    //if(page < 3)
    /*2 
для 1 и 2 цикл до 7 добавляеш в конец ... 
1) <- "1",2,3.4,5,6,7,...,500 ->, <- "1",2,3.4,5,6,7,...,500 ->
2) <- "1",..,.4,5,6,7,...,500 ->, <- "1",2,3.4,5,6,7,...,500 ->
если 

*/

    // for (let i = 0; i < 9; i++) {
    // let addlist = document.createElement('li');
    // lists.appendChild(addlist);
    //   let str = `<li class="numpage__list"><a class="numpage__list-item" href="#">${
    //     i + 1
    //   }</a></li>`;
    //   lists.insertAdjacentHTML('beforeend', str);
    // }
  };
  const addListener = function () {
    document.addEventListener('click', function (event) {
      event.preventDefault();
      console.log(event.target);
    });
  };

  window.addEventListener('load', function () {
    document
      .getElementsByClassName('numpage__lists')
      .addEventListener('click', addListener);
  });

  addPages();

  //-------твой код конец ------
  return buffElem.innerHTML;
};

export default pagegen;
