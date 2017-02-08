import Component from './component';

export default class Location extends Component {
  constructor([x, y]) {
    super();
    this.x = x;
    this.y = y;
  }

  getComponentType() {
    return Location.name;
  }
}
