import storage from '../lib/storage';
import { addEventHandlers as paginationEventHandlers } from './pagination.js';
import medb from '../lib/ApiMEDB';
import { navigate } from '../lib/Router';

export const addEventHandlersAllPages = () => {
  /**
   * Обработчики импортируемые при загрузке всех страниц
   */

  const languageСhange = () => {
    /**
     * Отлавливаем клик по кнопке смены языка
     * и перезагружаем страницу меняя ее язык
     */
    const ls = new storage();
    document
      .querySelector('.header__language')
      .addEventListener('click', event => {
        const { target } = event;
        if (target.hasAttribute('data-language')) {
          event.preventDefault();
          ls.set('language', target.dataset.language);
          console.log(ls.get('language'));
          window.location.reload();
        }
      });
  };

  const paginationHandlers = () => {
    /**
     * если на странице есть пагинация то
     * запускаем отслеживание событий
     * нужных для пагинации
     */
    if (document.querySelector('.pagination')) {
      paginationEventHandlers();
    }
  };

  const searchHandlers = () => {
    /**
     * если на странице есть поиск
     * запускаем отслеживание событий
     * нужных для поиска
     */

    const submitHandler = async event => {
      event.preventDefault();
      const searchQuery = event.target.querySelector('input[name="text"]')
        .value;
      const textError = document.querySelector('.search__libraryFilmList');

      if (searchQuery !== '') {
        const data = await medb.getFilmsQuery(searchQuery);
        const { total_results } = data;
        if (total_results === 0) {
          textError.classList.remove('headen');
        } else {
          navigate('/search?request=' + searchQuery);
        }
      }
    };

    const hideErrorHandler = event => {
      event.preventDefault();
      const textError = document.querySelector('.search__libraryFilmList');
      textError.classList.add('headen');
    };

    if (document.querySelector('.form-search-library')) {
      document
        .querySelector('.form-search')
        .addEventListener('submit', submitHandler);

      document
        .querySelector('input[name="text"]')
        .addEventListener('click', hideErrorHandler);
    }
  };

  // Вызовы
  languageСhange();
  paginationHandlers();
  searchHandlers();
};
