import Component from './component';

export default class Item extends Component {
  static componentType = 'Item';
  static INSTANCE = new Item();

  constructor() {
    if (Item.INSTANCE) {
      throw new Error('Calling enum Component constructor not allowed');
    }
    super();
  }

  getComponentType() {
    return Item.componentType;
  }
}
