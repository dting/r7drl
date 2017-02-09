import Component from './component';

export default class Monster extends Component {
  static componentType = 'Monster';
  static INSTANCE = new Monster();

  constructor() {
    if (Monster.INSTANCE) {
      throw new Error('Calling enum Component constructor not allowed');
    }
    super();
  }

  getComponentType() {
    return Monster.componentType;
  }
}
