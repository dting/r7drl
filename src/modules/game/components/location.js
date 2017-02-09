import Component from './component';

export default class Location extends Component {
  constructor([x, y]) {
    super('Location');
    this.x = x;
    this.y = y;
    this.key = `${this.x},${this.y}`;
  }
}
