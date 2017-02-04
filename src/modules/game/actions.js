import types from './constants';

const mapSetup = function mapSetup(display) {
  return {
    type: types.MAP_SETUP,
    payload: display,
  };
};

export default {
  mapSetup,
};
