import localStorage from '../lib/storage';

const API_KEY = '0ff69c32b74d705c975bcd6fe072688a';
const BASE_URL = 'https://api.themoviedb.org';
const LANGUAGE = 'en-US';
const loadData = queryString => {
  return fetch(queryString).then(res => res.json());
};
export default {
  getPopularFilms(page = 1, language = LANGUAGE) {
    const ls = new localStorage();
    if (ls.has('language')) {
      language = ls.get('language');
    }
    const queryString = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`;
    return loadData(queryString);
  },
  getFilmsQuery(query, page = 1, language = LANGUAGE) {
    const ls = new localStorage();
    if (ls.has('language')) {
      language = ls.get('language');
    }
    const queryString = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=${language}&page=${page}&query=${query}`;
    return loadData(queryString);
  },
  getFilmsDetails(arr) {
    const ls = new localStorage();
    if (ls.has('language')) {
      language = ls.get('language');
    }
    const getFilmsApi = this.getFilmsId(id); //.then(data)
    debugger;
    return arr.map(id => {
      getFilmsApi;
    });
  },
  getFilmsId(id, language = LANGUAGE) {
    const ls = new localStorage();
    if (ls.has('language')) {
      language = ls.get('language');
    }
    const queryString = `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=${language}`;
    return loadData(queryString);
  },
  getGenresList(language = LANGUAGE) {
    const ls = new localStorage();
    if (ls.has('language')) {
      language = ls.get('language');
    }
    const queryString = `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=${language}`;
    return loadData(queryString);
  },
  getFilmsByGenre(genreId, year, language = LANGUAGE) {
    const ls = new localStorage();
    if (ls.has('language')) {
      language = ls.get('language');
    }
    const queryString = `${BASE_URL}/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&primary_release_year=${year}&sort_by=popularity.desc&language=${language}`;
    return loadData(queryString);
  },
  getMovies(filmId, language = LANGUAGE) {
    const ls = new localStorage();
    if (ls.has('language')) {
      language = ls.get('language');
    }
    const queryString = `${BASE_URL}/3/movie/${filmId}/videos?api_key=${API_KEY}&language=${language}`;
    return loadData(queryString);
    //"key": "5Byeq_hyh2U"
    //https://www.youtube.com/watch?v=5Byeq_hyh2U
  },
  getCinemaFilms(language = LANGUAGE) {
    const ls = new localStorage();
    if (ls.has('language')) {
      language = ls.get('language');
    }
    const twoWeeksInMilliseconds =
      2 /*weeks*/ *
      7 /*days in week*/ *
      24 /*hours*/ *
      60 /*minutes*/ *
      60 /*seconds*/ *
      1000; /*millis*/
    const twoWeeksAgoDate = new Date(Date.now() - twoWeeksInMilliseconds);
    //date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getUTCDate()
    const dateString = `${twoWeeksAgoDate.getFullYear()}-${
      twoWeeksAgoDate.getMonth() + 1
    }-${twoWeeksAgoDate.getUTCDate()}`;
    const queryString = `${BASE_URL}/3/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${dateString}&sort_by=popularity.desc&language=${language}`;
    console.log(queryString); //для проверки себя
    return loadData(queryString);
  },
};
