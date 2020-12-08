import templateSectionPagination from '../templates/section__pagination.hbs';
import paginationList from '../templates/navigation_list.hbs';

const paginationInit = (obj, url) => {
  const { page, total_pages: totalPages } = obj;
  const buffElem = document.createElement('div');

  buffElem.insertAdjacentHTML('beforeend', templateSectionPagination());

  let lists = buffElem.querySelector('.numpage__lists');
  let parentList = buffElem.querySelector('.numpage');
  let rightArrow = buffElem.querySelector('.numpage__right-arrow');
  let leftArrow = buffElem.querySelector('.numpage__left-arrow');

  // ////////////////////////////////     ВЕРСИЯ ПОД МОБИЛУ     ///////////////////////////////////////

  const paginationMobile = function () {
    if (totalPages <= 1) {
      parentList.remove();
    }
    if (totalPages > 1) {
      for (let i = page - 2; i <= page + 2 && i <= totalPages; i++) {
        if (i >= 1) {
          let str = paginationList({ page: i, url, more: true });

          lists.insertAdjacentHTML('beforeend', str);
        }
      }

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

  paginationMobile();

  // ////////////////////////////////     ВЕРСИЯ ПОД ДЕКСТОП     ///////////////////////////////////////

  const paginationDekstop = function () {
    if (totalPages <= 1) {
      parentList.remove();
    }

    const max = 9;
    if (totalPages > 1) {
      lists.insertAdjacentHTML(
        'beforeend',
        paginationList({ page: 1, url, more: true, class: 'media-hidden' }),
      );

      for (let i = page - 3; i <= page + 3; i++) {
        let str = paginationList({ page: i, url, more: true });
        if (i <= 1 || i >= totalPages) {
        } else {
          if (i === page - 3) {
            lists.insertAdjacentHTML(
              'beforeend',
              paginationList({
                class: 'numpage__more media-hidden',
                page: '...',
                url,
                more: false,
              }),
            );
          } else if (i === page + 3) {
            lists.insertAdjacentHTML(
              'beforeend',
              paginationList({
                class: 'numpage__more  media-hidden',
                page: '...',
                url,
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
        paginationList({
          page: totalPages,
          url,
          more: true,
          class: 'media-hidden',
        }),
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
  // paginationDekstop();

  // ....................................ЗАКОНТИРОВАННЫЙ СТАРЫЙ КОД....................................

  // if (totalPages <= 1) {
  //   parentList.remove();
  // }

  // const max = 9;
  // if (totalPages > 1) {
  //   lists.insertAdjacentHTML(
  //     'beforeend',
  //     paginationList({ page: 1, url, more: true, class: 'media-hidden' }),
  //   );

  //   for (let i = page - 3; i <= page + 3; i++) {
  //     let str = paginationList({ page: i, url, more: true });
  //     if (i <= 1 || i >= totalPages) {
  //     } else {
  //       if (i === page - 3) {
  //         lists.insertAdjacentHTML(
  //           'beforeend',
  //           paginationList({
  //             class: 'numpage__more media-hidden',
  //             page: '...',
  //             url,
  //             more: false,
  //           }),
  //         );
  //       } else if (i === page + 3) {
  //         lists.insertAdjacentHTML(
  //           'beforeend',
  //           paginationList({
  //             class: 'numpage__more  media-hidden',
  //             page: '...',
  //             url,
  //             more: false,
  //           }),
  //         );
  //       } else {
  //         lists.insertAdjacentHTML('beforeend', str);
  //       }
  //     }
  //   }

  //   lists.insertAdjacentHTML(
  //     'beforeend',
  //     paginationList({
  //       page: totalPages,
  //       url,
  //       more: true,
  //       class: 'media-hidden',
  //     }),
  //   );
  //   const itemsRefs = buffElem.querySelectorAll('.numpage__list-item');

  //   itemsRefs.forEach(element => {
  //     element.textContent == page
  //       ? element.classList.add('item__border-active')
  //       : null;
  //   });
  // }
  // if (page === totalPages) {
  //   rightArrow.remove();
  // }
  // if (page === 1) {
  //   leftArrow.remove();
  // }

  return buffElem.innerHTML;
};
export default paginationInit;
