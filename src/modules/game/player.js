export default class Player {
  constructor({
    char = '⚇',
    fg = 'blue',
    bg = 'white',
    x = 0,
    y = 0,
    vision = 6,
    hp = 100,
    lvl = 1,
    exp = 0,
    atk = 7,
    def = 3,
    wep = 'Fists',
    armor = 'Cloth Headband',
  } = {}) {
    this.char = char;
    this.fg = fg;
    this.bg = bg;
    this.x = x;
    this.y = y;
    this.vision = vision;
    this.hp = hp;
    this.lvl = lvl;
    this.exp = exp;
    this.atk = atk;
    this.def = def;
    this.wep = wep;
    this.armor = armor;
  }
}
