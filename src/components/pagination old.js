import { parse } from 'handlebars';
import templateSectionPagination from '../templates/section__pagination.hbs';
import paginationList from '../templates/navigation_list.hbs';

//{ page, total_pages: totalPages }
const pagegen = () => {
  const obj = {
    page: 1,
    total_pages: 110,
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

    // if(matchMedia){
    //   let screen = window.matchMedia("(min-width: 767px)");
    //   screen.add
    // }

    if (totalPages > 1) {
      lists.insertAdjacentHTML(
        'beforeend',
        paginationList({ page: 1, more: true, class: 'media-hidden' }),
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
        paginationList({ page: totalPages, more: true, class: 'media-hidden' }),
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
  };

  addPages();

  //-------твой код конец ------
  return buffElem.innerHTML;
};

export default pagegen;