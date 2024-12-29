#!/home/ty/.nvm/versions/node/v22.3.0/bin/node
function createElement (tag, hyperText, color) {
  const elem = document.createElement(tag);
  elem.innerHTML = hyperText;
  elem.style.color = color;

  return {
    elem,
    setInnerHTML (hyperText) {
      elem.innerHTML = hyperText;
    },
    getInnerHTML () {
      return `Inner HTML:\t${elem.innerHTML}`;
    },
    setColor (color) {
      elem.style.color = color;
    },
    getColor () {
      return `Color: ${elem.style.color}`;
    }
  };
}

const header = createElement('h1', '<i>TEMITAYO</i>', 'black');
console.log(header);
