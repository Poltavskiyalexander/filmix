import templateHeader from '../templates/header.hbs';
import templateSectionCards from '../templates/section__cards.hbs';

const init = async () => {
  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', templateHeader());
  duffElem.insertAdjacentHTML('beforeend', templateSectionCards());
  return duffElem.innerHTML;
};
export default init;
