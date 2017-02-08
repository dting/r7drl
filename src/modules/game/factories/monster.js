import Entity from '../entity';
import { Attributes, Display, Meta, Monster } from '../components';

const MONSTERS = {
  Object: {
    char: 'O',
    hp: 50,
    atk: 7,
    def: 0,
    exp: 50,
  },
  $: {
    char: '$',
    hp: 80,
    atk: 15,
    def: 3,
    exp: 100,
  },
};

export default {
  create(name) {
    const { char, hp, atk, def, exp } = MONSTERS[name];
    return new Entity()
      .setComponent(Monster.INSTANCE)
      .setComponent(new Meta({ name }))
      .setComponent(new Attributes({ atk, def, hp, exp }))
      .setComponent(new Display({ char, fg: 'red', bg: 'white' }));
  }
}
