import { navigate } from './Router';

const ROOT_ELEMENT = document.querySelector('body');
const RenderComponent = async (renderFunction, rootElement = ROOT_ELEMENT) => {
  const template = await renderFunction();
  rootElement.innerHTML = template;
  rootElement.addEventListener('click', event => {
    if (
      event.target.nodeName === 'A' &&
      event.target.getAttribute('href').substr(0, 1) === '/'
    ) {
      event.preventDefault();
      navigate(event.target.getAttribute('href'));
    }
  });
};

export default RenderComponent;
