import medb from '../lib/ApiMEDB';
import baseMarkup from '../components/basemarkup';
import Build from '../lib/Data-builder';
import { addEventHandlersAllPages } from '../components/EventHandlers';

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
  //console.log(`params: ${params}`);
  //console.log(`query: ${query}`);
  //debugger;
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
  duffElem.querySelector('header').classList.add('header__img-watched');

  return duffElem.innerHTML;
};
export default init;

export const addEventHandlers = () => {
  addEventHandlersAllPages();
};
