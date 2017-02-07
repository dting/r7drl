export default class Player {
  constructor({
    char = '⚇',
    fg = 'blue',
    bg = 'white',
    x = 0,
    y = 0,
  } = {}) {
    this.char = char;
    this.fg = fg;
    this.bg = bg;
    this.x = x;
    this.y = y;
  }

  move(direction) {
    switch(direction) {
      case 'left':
        this.x -= 1;
        break;
      case 'right':
        this.x += 1;
        break;
      case 'up':
        this.y -= 1;
        break;
      case 'down':
        this.y += 1;
        break;
      default:
        break;
    }
  }
}
