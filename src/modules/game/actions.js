import ROT from 'rot-js';

import types from './constants';

const setDisplay = function setDisplay(display) {
  return {
    type: types.SET_DISPLAY,
    payload: display,
  };
};

const KEYCODE_TO_DIRECTION = {
  [ROT.VK_LEFT]: types.MOVE_LEFT,
  [ROT.VK_RIGHT]: types.MOVE_RIGHT,
  [ROT.VK_UP]: types.MOVE_UP,
  [ROT.VK_DOWN]: types.MOVE_DOWN,
};

const move = function move(keyCode) {
  return {
    type: KEYCODE_TO_DIRECTION[keyCode],
  };
}

export default {
  move,
  setDisplay,
};
