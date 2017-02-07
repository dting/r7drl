import Monster from './base-monster';

export default class Slime extends Monster {
  constructor() {
    super();
    this.name = 'Slime';
    this.char = '©';
    this.hp = 50;
    this.atk = 7;
    this.yieldExp = 50;
  }
}
