import templateSectionCards from '../templates/section__cards.hbs';
import medb from '../lib/ApiMEDB';

const refs = {
  filmAboutRef: document.querySelector('a.card__film-about'),
};

const init = async () => {
  const { results } = await medb.getPopularFilms();
  // console.log(results);
  const newResultsArray = [...results];
  newResultsArray.forEach(elem => {
    elem.year = ``;
  });
  // console.log(newResultsArray);

  newResultsArray.forEach(element => {
    const stringItem = element.release_date.slice(0, 4);
    // console.log(stringItem);
  });

  const genresListItem = await medb.getGenresList();
  const objectArrayItem = genresListItem.genres;
  objectArrayItem.forEach(element => {
    console.log(element.name);
  });

  function insertMarkup(items) {
    const markup = templateSectionCards(items);
  }
};
