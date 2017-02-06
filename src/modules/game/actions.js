import ROT from 'rot-js';

import types from './constants';

const KEYCODE_TO_DIRECTION = {
  [ROT.VK_LEFT]: types.MOVE_LEFT,
  [ROT.VK_RIGHT]: types.MOVE_RIGHT,
  [ROT.VK_UP]: types.MOVE_UP,
  [ROT.VK_DOWN]: types.MOVE_DOWN,
};

const drawMap = function drawMap() {
  return (dispatch, getState) => {
    const { display, player } = getState().game;
    display.clear();
    display.draw(player.x, player.y, player.char, player.fg, player.bg);
  };
};

const init = function init() {
  return dispatch => {
    dispatch({ type: types.INIT_GAME });
    dispatch(drawMap());
  };
};

const move = function move(keyCode) {
  return {
    type: KEYCODE_TO_DIRECTION[keyCode],
  };
}

export default {
  init,
  move,
};
