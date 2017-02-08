import Component from './component';

export default class Meta extends Component {
  constructor({ name }) {
    super();
    this.name = name;
  }

  getComponentType() {
    return Meta.name;
  }
}
