import medb from '../lib/ApiMEDB';
import baseMarkup from '../components/basemarkup';
import { navigate } from '../lib/Router';
import Build from '../lib/Data-builder';

const parseQuery = query => {
  const queryArr = query.split('&');
  const resultObj = queryArr.reduce((acc, param) => {
    const key = param.split('=')[0];
    acc[key] = param.split('=')[1];
    return acc;
  }, {});
  if (!resultObj.hasOwnProperty('page')) {
    resultObj.page = 1;
  }
  return resultObj;
};

const init = async (params, query) => {
  //console.log(params);
  //console.log(`params: ${query}`);
  // debugger;

  const qweryObj = parseQuery(`${query}`); //${params.action}=
  const data = await medb.getFilmsQuery(qweryObj.request, qweryObj.page);
  const { genres: genresArr } = await medb.getGenresList(data);
  const results = Build(data, genresArr);
  const url = `search?request=${qweryObj.request}&`;

  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', baseMarkup(results, url));

  duffElem.querySelector('.search__navLibrary').remove();
  duffElem.querySelector('header').classList.add('header__img-home');

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
      navigate('/search?request=' + searchQuery);
    }
    console.log(searchQuery);
  }
};

const hideErrorHandler = event => {
  event.preventDefault();
  const textError = document.querySelector('.search__libraryFilmList');
  textError.classList.add('headen');
};

export const addEventHandlers = () => {
  document
    .querySelector('.form-search')
    .addEventListener('submit', submitHandler);

  document
    .querySelector('input[name="text"]')
    .addEventListener('click', hideErrorHandler);
};
