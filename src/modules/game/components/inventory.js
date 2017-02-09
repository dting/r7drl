import Component from './component';

export default class Inventory extends Component {
  constructor({ currentWeapon, currentArmor, archive = [] }) {
    super('Inventory');
    this.currentWeapon = currentWeapon;
    this.currentArmor = currentArmor;
    this.archive = archive;
  }
}
