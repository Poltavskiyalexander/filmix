'use strict';
import templateSlider from '../templates/section_slider.hbs';

const init = data => {
  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', templateSlider(data));
  return duffElem.innerHTML;
};

export default init;
