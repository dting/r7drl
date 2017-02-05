export default class Game {
  constructor(display, height, width) {
    this.display = display;
    this.height = height;
    this.width = width;
  }

  init(state) {
    return {
      level: {
        level: 1,
        name: 'Spooky Dungeon',
      },
      message: "You are exploring",
    };
  }

  move(state, direction) {
    console.log(direction);
    return {};
  }
}
