const dataBuild = (data, genres) => {
  /** Функция для преобразования данных
   * отдаваемых сервером в нужный формат
   */
  const dataArr = { ...data };
  const resultsArray = [...data.results];
  resultsArray.forEach(filmObj => {
    if (filmObj.hasOwnProperty('release_date')) {
      filmObj.year = filmObj.release_date.slice(0, 4);
    } else {
      filmObj.year = '';
    }
    if (
      filmObj.hasOwnProperty('genre_ids') &&
      Array.isArray(filmObj.genre_ids)
    ) {
      filmObj.genres = [];
      filmObj.genre_ids.forEach(id => {
        const genrObj = genres.find(genre => genre.id === id);
        filmObj.genres.push(genrObj);
      });
    } else {
    }
  });
  dataArr.results = resultsArray;
  return dataArr;
};
export default dataBuild;
