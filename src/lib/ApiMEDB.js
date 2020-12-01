const API_KEY = '0ff69c32b74d705c975bcd6fe072688a';
const BASE_URL = 'https://api.themoviedb.org';
const loadData = qweryString => {
  return fetch(qweryString).then(res => res.json());
};
export default {
  getPopularFilms(page = 1) {
    const qweryString = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    return loadData(qweryString);
  },
  getFilmsQuery(qwery, page = 1) {
    const qweryString = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${qwery}`;
    return loadData(qweryString);
  },
  getFilmsId(id) {
    const qweryString = `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    return loadData(qweryString);
  },
};
