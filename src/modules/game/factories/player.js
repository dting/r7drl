import Entity from '../entity';
import { Attributes, Display, Player } from '../components';

export default {
  create(atk = 7, def = 3, exp = 0, hp = 100, lvl = 1) {
    return new Entity()
      .setComponent(Player.INSTANCE)
      .setComponent(new Attributes({ atk, def, exp, hp, lvl }))
      .setComponent(new Display({ char: '⚇', fg: 'blue', bg: 'white' }));
  }
}
