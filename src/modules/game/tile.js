export default class Tile {
  constructor({
    isWall = false,
    char = ' ',
    fg = '',
    bg = 'black',
  } = {}) {
    this.isWall = isWall;
    this.char = char;
    this.fg = fg;
    this.bg = bg;
  }
}

export const wallTile = new Tile({ isWall: true, char: '' });

export const landTile = new Tile({ bg: 'white', char: '' });
