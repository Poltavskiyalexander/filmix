const init = async params => {
  const duffElem = document.createElement('div');

  duffElem.innerText = `Movie ${params.id}`;

  return duffElem.innerHTML;
};

export default init;
