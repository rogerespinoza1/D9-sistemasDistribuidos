const R = require('ramda');

const Plane = {
  tiltLeft: R.curry((degrees) => {
    console.log(`Inclinación ${degrees} grados a la izquierda`)
  }),
  tiltRight: R.curry((degrees) => {
    console.log(`Inclinación ${degrees} grados a la derecha`)
  }),
  takeOff: () => console.log('despegando...'),
  land: () => console.log('aterrizando...'),
};

module.exports = Plane;
