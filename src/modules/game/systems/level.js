import ROT from 'rot-js';

import { Location } from '../components';
import { StreamSampler } from '../utils';
import { Item, Monster, Player } from '../factories';

const LEVELS = [{
}, {
  name: 'Vanilla JavaScript',
  monsters: ['OOP', 'OOP', 'OOP', 'OOP', 'OOP'],
}, {
  name: 'JQuery',
  monsters: ['$', '$', '$', 'OOP', 'OOP'],
}, {
  name: 'Angular',
  monsters: ['Directive', 'Directive', 'Directive', '$', '$'],
}, {
  name: 'React',
  monsters: ['Redux', 'GraphQL', 'GraphQL', 'Directive', 'Directive'],
}];

const generate = function generate({ level = 1, player = Player.create(), width, height }) {
  const map = Object.create(null);
  const seen = Object.create(null);
  const levelName = LEVELS[level].name;
  const monsters = LEVELS[level].monsters.map(Monster.create);
  const items = [
    Item.createPotion(),
    Item.createPotion(),
    Item.createPotion(),
    Item.createArmor(level),
    Item.createWeapon(level),
    Item.createTransporter(),
  ];

  const digger = new ROT.Map.Digger(width, height, { dugPercentage: 0.4 });
  digger.create((x, y, type) => map[`${x},${y}`] = type);

  const [startRoom, ...rooms] = digger.getRooms();

  // Set player location
  const startCoords = [
    ROT.RNG.getUniformInt(startRoom._x1, startRoom._x2),
    ROT.RNG.getUniformInt(startRoom._y1, startRoom._y2),
  ];
  player.setComponent(new Location(startCoords));

  // Randomly place monsters and items
  const entities = [...monsters, ...items];
  const sampler = new StreamSampler(entities.length);
  rooms.forEach(room => {
    for (let x = room._x1; x <= room._x2; x++) {
      for (let y = room._y1; y <= room._y2; y++) {
        sampler.next([x, y]);
      }
    }
  });
  const coords = sampler.results;
  entities.forEach(entity => entity.setComponent(new Location(coords.pop())));

  return {
    message: "You are exploring",
    over: false,
    level,
    levelName,
    player,
    entities,
    map,
    seen,
  };
};

export default {
  generate,
};
