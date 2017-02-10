import Entity from '../entity';
import { Attributes, Display, Meta, Monster } from '../components';

const MONSTERS = {
  OOP: { char: 'O', hp: 50, atk: 7, def: 0, exp: 50 },
  $: { char: '$', hp: 80, atk: 15, def: 3, exp: 100 },
  Directive: { char: 'D', hp: 115, atk: 20, def: 4, exp: 150 },
  GraphQL: { char: 'G', hp: 155, atk: 25, def: 5, exp: 200 },
  Redux: { char: 'R', hp: 200, atk: 30, def: 6, exp: 400 },
};

export default {
  create(name) {
    const { char, hp, atk, def, exp } = MONSTERS[name];
    return new Entity()
      .setComponent(Monster.INSTANCE)
      .setComponent(new Meta({ name }))
      .setComponent(new Attributes({ atk, def, hp, exp }))
      .setComponent(new Display({ char, fg: 'red', bg: 'white' }));
  },
};
