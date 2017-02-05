import ROT from 'rot-js';

import Game from './game';
import types from './constants';

const HEIGHT = 30;
const WIDTH = 80;
const DISPLAY = new ROT.Display({ width: WIDTH, height: HEIGHT });

const game = new Game(DISPLAY, HEIGHT, WIDTH);

const initialState = {
  ...game,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.INIT_GAME:
      return {
        ...state,
        ...game.init(state),
      };
    case types.MOVE_LEFT:
    case types.MOVE_RIGHT:
    case types.MOVE_UP:
    case types.MOVE_DOWN:
      return {
        ...state,
        ...game.move(state, action.type),
      };
    default:
      return state;
  }
}

export { default as actions } from './actions';
