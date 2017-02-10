import Entity from '../entity';
import { Attributes, Display, Item, Meta } from '../components';

const ARMOR = [
  ['Birthday Suit', 0],
  ['Cloth Hat', 3],
  ['Leather Cuirass', 6],
  ['Enchanted Robe', 9],
  ['Godly Plate', 15],
];

const WEAPON = [
  ['Fists', 0],
  ['Oversized Axe', 6],
  ['Short Katana', 12],
  ['Kokiri Sword', 18],
  ['Sword of a Thousand Truths', 24],
];

export default {
  createPotion() {
    return new Entity()
      .setComponent(new Meta({ name: 'Potion' }))
      .setComponent(Item.CONSUMABLE)
      .setComponent(new Attributes({ hp: 35 }))
      .setComponent(new Display({ char: 'p', fg: 'green', bg: 'white' }));
  },
  createArmor(level) {
    const [name, def] = ARMOR[level];
    return new Entity()
      .setComponent(new Meta({ name }))
      .setComponent(Item.ARMOR)
      .setComponent(new Attributes({ def }))
      .setComponent(new Display({ char: 'a', fg: 'gray', bg: 'white' }));
  },
  createWeapon(level) {
    const [name, atk] = WEAPON[level];
    return new Entity()
      .setComponent(new Meta({ name }))
      .setComponent(Item.WEAPON)
      .setComponent(new Attributes({ atk }))
      .setComponent(new Display({ char: 'w', fg: 'gray', bg: 'white' }));
  },
  createTransporter() {
    return new Entity()
      .setComponent(new Meta({ name: 'Transporter' }))
      .setComponent(Item.TRANSPORT)
      .setComponent(new Display({ char: 't', fg: 'purple', bg: 'white' }));
  },
};
