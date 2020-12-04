import templateSectionPagination from '../templates/section__pagination.hbs';
import paginationList from '../templates/navigation_list.hbs';

const paginationInit = obj => {
  const { page, total_pages: totalPages } = obj;
  const buffElem = document.createElement('div');

  buffElem.insertAdjacentHTML('beforeend', templateSectionPagination());

  let lists = buffElem.querySelector('.numpage__lists');
  let parentList = buffElem.querySelector('.numpage');
  let rightArrow = buffElem.querySelector('.numpage__right-arrow');
  let leftArrow = buffElem.querySelector('.numpage__left-arrow');

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

  return buffElem.innerHTML;
};
export default paginationInit;
