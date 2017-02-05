import ROT from 'rot-js';

import types from './constants';

const mapSetup = function mapSetup(display) {
  return {
    type: types.MAP_SETUP,
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
  mapSetup,
  move,
};
