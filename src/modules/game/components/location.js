import Component from './component';

export default class Location extends Component {
  static componentType = 'Location';

  constructor([x, y]) {
    super();
    this.x = x;
    this.y = y;
  }

  getComponentType() {
    return Location.componentType;
  }
}
