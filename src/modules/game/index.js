import gameEngine from './game-engine';
import types from './constants';

export default function (state = {}, action) {
  switch (action.type) {
    case types.INIT_GAME:
      return {
        ...gameEngine.create(),
      };
    case types.MOVE_LEFT:
    case types.MOVE_RIGHT:
    case types.MOVE_UP:
    case types.MOVE_DOWN:
      return {
        ...state,
        ...gameEngine.move(state, action.type),
      };
    default:
      return state;
  }
}

export { default as actions } from './actions';
