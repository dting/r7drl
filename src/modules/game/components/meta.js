import Component from './component';

export default class Meta extends Component {
  static componentType = 'Meta';

  constructor({ name }) {
    super();
    this.name = name;
  }

  getComponentType() {
    return Meta.componentType;
  }
}
