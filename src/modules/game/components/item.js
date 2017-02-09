import Component from './component';

class Item extends Component {
  constructor(type) {
    super('Item');
    this.type = type;
    Object.freeze(this);
  }
}

export default Object.freeze({
  CONSUMABLE: new Item('Consumable'),
  WEAPON: new Item('Weapon'),
  ARMOR: new Item('Armor'),
  TRANSPORT: new Item('Transport'),
});
