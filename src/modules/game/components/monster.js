import Component from './component';

export default class Monster extends Component {
  static INSTANCE = new Monster();

  getComponentType() {
    return Monster.name;
  }
}
