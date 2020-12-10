'use strict';
import templateSlider from '../templates/section_slider.hbs';

const init = data => {
  const duffElem = document.createElement('div');
  duffElem.insertAdjacentHTML('beforeend', templateSlider(data));

  duffElem.getElementsByClassName('left').onclick = slideClick;
  function slideClick() {
    const polosa = duffElem.getElementsByClassName('slider__lists');
    polosa.style.left = -800 + 'px';
  }

  return duffElem.innerHTML;
};

export default init;
