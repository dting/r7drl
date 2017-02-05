import types from './constants';

const initialState = {
  height: 30,
  width: 80,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_DISPLAY:
      return {
        ...state,
        display: action.payload,
      };
    case types.MOVE_LEFT:
    case types.MOVE_RIGHT:
    case types.MOVE_UP:
    case types.MOVE_DOWN:
      console.log(action.type);
      return state;
    default:
      return state;
  }
}

export { default as actions } from './actions';
