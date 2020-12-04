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
    const qweryString = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${qwery}`;
    return loadData(qweryString);
  },
  getFilmsDetails(arr) {
    const getFilmsApi = this.getFilmsId(id); //.then(data)
    debugger;
    return arr.map(id => {
      getFilmsApi;
    });
  },
  getFilmsId(id) {
    const qweryString = `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    return loadData(qweryString);
  },
  getGenresList() {
    const qweryString = `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    return loadData(qweryString);
  },
};
