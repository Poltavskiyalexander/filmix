import medb from '../lib/ApiMEDB';
import baseMarkup from '../components/basemarkup';
import movieMarkup from '../templates/movie__card.hbs';
import { navigate } from '../lib/Router';

const init = async (params, query) => {
  //console.log(params);
  //console.log(`params: ${query}`);
  //debugger;

  const data = await medb.getFilmsId(params.id);

  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', baseMarkup());
  const Resfs = {
    header: duffElem.querySelector('.header'),
    main: duffElem.querySelector('.main'),
  };

  Resfs.main.insertAdjacentHTML('beforeend', movieMarkup(data));
  Resfs.header.classList.add('header__img-details');
  Resfs.header.querySelector('.form-search').remove();

  return duffElem.innerHTML;
};
export default init;

const submitHandler = async event => {
  event.preventDefault();
  const searchQuery = event.target.querySelector('input[name="text"]').value;
  const textError = document.querySelector('.search__libraryFilmList');

  if (searchQuery !== '') {
    const data = await medb.getFilmsQuery(searchQuery);
    console.log(data);
    const { total_results } = data;
    if (total_results === 0) {
      textError.classList.remove('headen');
      console.log(
        'Search result not successful. Enter the correct movie name and',
      );
    } else {
      //console.log(`${total_results}кол фильмов`);
      //event.target.reset();
      navigate('/search?request=' + searchQuery);
    }
    console.log(searchQuery);
  }
};

export const addEventHandlers = () => {};
