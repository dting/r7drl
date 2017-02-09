import Component from './component';

export default class Attributes extends Component {
  static componentType = 'Attributes';

  constructor({ atk, def, exp, hp, lvl }) {
    super();
    this.atk = atk;
    this.def = def;
    this.exp = exp;
    this.hp = hp;
    this.lvl = lvl;
  }

  getComponentType() {
    return Attributes.componentType;
  }
}
