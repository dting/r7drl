const initialState = {
  height: 30,
  width: 80,
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export { default as actions } from './actions';
