// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// eslint-disable-next-line max-len
/**
 *
 * @param {array} array
 * @param {number} howMany
 * @returns {array}
 */
function chooseRandomFromArray(array, howMany = 1) {
  const arrayCopy = [...array];

  switch (true) {
    case !Array.isArray(array):
      throw new Error('"Array" parameter require an Array');
    case array.length < 1:
      throw new Error('"Array" parameter require min one element');
    case typeof howMany !== 'number':
      throw new Error('"howMany" parameter require dataType === number');
    case howMany < 1:
      throw new Error('"howMany" argument must be greater than 0');
  }
  const elementsToProcess = (howMany > array.length)
    ? array.length
    : howMany;
  const result = [];

  for (let i = 1; i <= elementsToProcess; i++) {
    const elementIndex = Math.floor(Math.random() * arrayCopy.length);
    const element = arrayCopy.splice(elementIndex, 1);

    result.push(element.at(0));
  }

  if (howMany === 1) {
    return result[0];
  }

  return result;
}

/*
/**
 *
 * @param {number} r /0 - 255
 * @param {number} g /0 - 255
 * @param {number} b /0 - 255
 * @returns {array: {number, number, number} }
 */

/* canceled
function convertRGBTo255 (r = 0, g = 0, b = 0) {
  const toReturn = [];
  const validRGB = [];
  const rgb = [r, g, b];

  rgb.forEach((color, i) => {
    switch (true) {
      case color >= 0 && color <= 255:
        validRGB[i] = color;
        break;
      case color < 0:
        validRGB[i] = 0;
        break;
      case color > 255:
        validRGB[i] = 255;
        break;
    }
  });

  for (let i = 0; i < 3; i++) {
    const colorValue = validRGB[i];
    const convertedValue = (!Number.isInteger(colorValue))
      ? Math.round(colorValue * 255)
      : colorValue;

    toReturn.push(convertedValue);
  }

  return toReturn;
}
*/

const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
};

export { chooseRandomFromArray as default };
// Alternatively you can use CommonJS syntax:
// require('./commands')
