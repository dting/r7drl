import Player from './player';

export default class Game {
  static LEVELS = {
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

  constructor(display, height, width) {
    this.display = display;
    this.height = height;
    this.width = width;
  }

  init(state) {
    return {
      level: Game.LEVELS.level1,
      message: "You are exploring",
      player: new Player(),
    };
  }

  move(state, direction) {
    console.log(direction);
    return {};
  }
}
