import Component from './component';

export default class Player extends Component {
  static componentType = 'Player';
  static INSTANCE = new Player();


  constructor() {
    if (Player.INSTANCE) {
      throw new Error('Calling enum Component constructor not allowed');
    }
    super();
  }

  getComponentType() {
    return Player.componentType;
  }
}
