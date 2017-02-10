import Entity from '../entity';
import { Attributes, Display, Inventory, Player } from '../components';
import * as Factories from '../factories';

const STARTING_INVENTORY = new Inventory({
  currentWeapon: Factories.Item.createWeapon(0),
  currentArmor: Factories.Item.createArmor(0),
});

export default {
  create(atk = 7, def = 3, exp = 0, hp = 100, lvl = 1, inventory = STARTING_INVENTORY) {
    return new Entity()
      .setComponent(Player.INSTANCE)
      .setComponent(inventory)
      .setComponent(new Attributes({ atk, def, exp, hp, lvl }))
      .setComponent(new Display({ char: '⚇', fg: 'blue', bg: 'white' }));
  },
};
