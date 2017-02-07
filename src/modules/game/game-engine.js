import ROT from 'rot-js';

import Player from './player';

const HEIGHT = 30;
const WIDTH = 80;

const DISPLAY = new ROT.Display({ width: WIDTH, height: HEIGHT });

const LEVELS = {
  level1: {
    level: 1,
    name: 'Crust',
  },
  level2: {
    level: 2,
    name: 'Mantle',
  },
  level3: {
    level: 3,
    name: 'Outer Core',
  },
  level4: {
    level: 4,
    name: 'Inner Core',
  },
};

const create = function create() {
  return {
    display: DISPLAY,
    level: LEVELS.level1,
    message: "You are exploring",
    player: new Player(),
  };
};

const move = function move(state, direction) {
  console.log(direction);
  return {};
};

export default {
  create,
  move,
};
