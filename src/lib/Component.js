import { navigate } from './Router';
const ROOT_ELEMENT_SELECTOR = '#wrapper';

const RenderComponent = async (
  renderFunction,
  params = null,
  query = null,
  rootElementSelector = ROOT_ELEMENT_SELECTOR,
) => {
  // debugger;
  const rootElement = document.querySelector(rootElementSelector);
  const template = await renderFunction(params, query);
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
