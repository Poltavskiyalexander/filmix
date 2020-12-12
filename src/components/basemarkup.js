import templateHeader from '../templates/header.hbs';
import templateSectionCards from '../templates/section__cards.hbs';
import templateFooter from '../templates/footer.hbs';

import pagination from './pagination';

const init = (data = null, url = '#') => {
  const duffElem = document.createElement('div');

  duffElem.insertAdjacentHTML('beforeend', templateHeader());
  duffElem.insertAdjacentHTML('beforeend', '<main class="main"></main>');
  if (data) {
    const mainRef = duffElem.querySelector('.main');
    const { results } = data;
    mainRef.insertAdjacentHTML('beforeend', templateSectionCards(results));
    mainRef.insertAdjacentHTML('beforeend', pagination(data, url));
  }
  duffElem.insertAdjacentHTML('beforeend', templateFooter());

  const progressDone = duffElem.querySelectorAll('.progress-done');

  progressDone.forEach(progress => {
    progress.style.width = progress.getAttribute('data-done') + '%';
  });

  return duffElem.innerHTML;
};
export default init;
