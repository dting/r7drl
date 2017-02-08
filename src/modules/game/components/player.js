import Component from './component';

export default class Player extends Component {
  static INSTANCE = new Player();

  getComponentType() {
    return Player.name;
  }
}
