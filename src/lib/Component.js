import { navigate } from './Router';

const ROOT_ELEMENT = document.querySelector('body');

const RenderComponent = async (
  renderFunction,
  params,
  rootElement = ROOT_ELEMENT,
) => {
  const template = await renderFunction(params);

  rootElement.innerHTML = template;
  rootElement.addEventListener('click', linkClickHandler);
};

const linkClickHandler = event => {
  if (
    event.target.nodeName === 'A' &&
    event.target.getAttribute('href').substr(0, 1) === '/'
  ) {
    event.preventDefault();
    navigate(event.target.getAttribute('href'));
  }
};

export default RenderComponent;
