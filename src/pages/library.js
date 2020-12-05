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
  console.log();
  const qweryObj = parseQuery(`${query}`);
  let url;
  if (params.action === 'queu') {
    url = `/library/queu?`;
    qweryObj.request = 'war';
  } else {
    qweryObj.request = 'gerl';
    url = `/library/watched?`;
  }

  const data = await medb.getFilmsQuery(qweryObj.request, qweryObj.page);
  const { genres: genresArr } = await medb.getGenresList(data);
  const results = Build(data, genresArr);

  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', baseMarkup(results, url));

  duffElem.querySelector('.form-search-library').remove();
  duffElem.querySelector('.search__navLibrary').classList.remove('headen');

  duffElem.querySelector('header').classList.add('header__img-watched');

  return duffElem.innerHTML;
};
export default init;

const submitWatched = event => {
  const id = event.currentTarget.dataset.name;
  localStorage.setItem('Watched ID', id);
};

const submitQueue = event => {
  const id = event.currentTarget.dataset.name;
  localStorage.setItem('Queue ID', id);
};

export const addEventQueuHandlers = () => {
  document
    .querySelector('.action__watched')
    .addEventListener('click', submitWatched);
  document
    .querySelector('.action__queue')
    .addEventListener('click', submitQueue);
};
