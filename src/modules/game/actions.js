import ROT from 'rot-js';

import types from './constants';

const KEYCODE_TO_DIRECTION = {
  [ROT.VK_LEFT]: types.MOVE_LEFT,
  [ROT.VK_RIGHT]: types.MOVE_RIGHT,
  [ROT.VK_UP]: types.MOVE_UP,
  [ROT.VK_DOWN]: types.MOVE_DOWN,
};

const drawMap = {
  type: types.DRAW_MAP,
};

const init = function init() {
  return (dispatch) => {
    dispatch({ type: types.INIT_GAME });
    dispatch(drawMap);
  };
};

const move = function move(keyCode) {
  return (dispatch, getState) => {
    if (getState().game.over) {
      dispatch(init());
    } else if ({}.hasOwnProperty.call(KEYCODE_TO_DIRECTION, keyCode)) {
      dispatch({ type: KEYCODE_TO_DIRECTION[keyCode] });
      dispatch(drawMap);
    }
  };
};

export default {
  init,
  move,
};
