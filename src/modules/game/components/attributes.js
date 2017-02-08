import Component from './component';

export default class Attributes extends Component {
  constructor({ atk, def, exp, hp, lvl }) {
    super();
    this.atk = atk;
    this.def = def;
    this.exp = exp;
    this.hp = hp;
    this.lvl = lvl;
  }

  getComponentType() {
    return Attributes.name;
  }
}
