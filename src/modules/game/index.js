import gameEngine from './game-engine';
import types from './constants';

export default function (state = {}, action) {
  switch (action.type) {
    case types.DRAW_MAP:
      gameEngine.drawMap(state);
      return state;
    case types.INIT_GAME:
      return {
        ...gameEngine.create(),
      };
    case types.MOVE_LEFT:
      return {
        ...state,
        ...gameEngine.move(state, 'left'),
      };
    case types.MOVE_RIGHT:
      return {
        ...state,
        ...gameEngine.move(state, 'right'),
      };
    case types.MOVE_UP:
      return {
        ...state,
        ...gameEngine.move(state, 'up'),
      };
    case types.MOVE_DOWN:
      return {
        ...state,
        ...gameEngine.move(state, 'down'),
      };
    default:
      return state;
  }
}

export { default as actions } from './actions';
