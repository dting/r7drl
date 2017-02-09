import ROT from 'rot-js';

import { Location } from './components';
import { movement } from './systems';
import { StreamSampler } from './utils';
import * as Factories from './factories';

const LEVELS = [{
}, {
  name: 'Vanilla JavaScript',
  monsters: ['Object', 'Object', 'Object', 'Object', 'Object'],
}, {
  name: 'JQuery',
  monsters: ['Object', 'Object', '$', '$', '$'],
}];

const HEIGHT = 40;
const WIDTH = 40;
const OPTIONS = {
  width: WIDTH,
  height: HEIGHT,
  forceSquareRatio: true,
  fontSize: 12,
};
const DISPLAY = new ROT.Display(OPTIONS);

const create = function create(level = 1, player = Factories.Player.create()) {
  const map = Object.create(null);
  const seen = Object.create(null);
  const levelName = LEVELS[level].name;
  const monsters = LEVELS[level].monsters.map(Factories.Monster.create);
  const items = [
    Factories.Item.createPotion(),
    Factories.Item.createPotion(),
    Factories.Item.createPotion(),
    Factories.Item.createArmor(level),
    Factories.Item.createWeapon(level),
    Factories.Item.createTransporter(),
  ];

  const digger = new ROT.Map.Digger(WIDTH, HEIGHT, { dugPercentage: 0.4 });
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
    display: DISPLAY,
    message: "You are exploring",
    level,
    levelName,
    player,
    entities,
    map,
    seen,
  };
};

const move = function move({ player, entities, map }, direction) {
  const newLocation = movement.check(player, direction);

  // If new location is a wall, noop
  if (map[newLocation.key]) {
    return {};
  }

  const occupants = entities
    .filter(entity => entity.hasComponent('Location'))
    .filter(entity => entity.getComponent('Location').key === newLocation.key);

  if (occupants.length) {
    const focus = occupants[0];
    if (focus.hasComponent('Monster')) {
      // combat
    }
    if (focus.hasComponent('Item')) {
      // pick up item
      const index = entities.indexOf(focus);
      return {
        message: `Picked up - ${focus.getComponent('Meta').name}`,
        entities: [...entities.slice(0, index), ...entities.slice(index + 1)],
      };
    }
  } else {
    return {
      player: movement.move(player, newLocation),
      message: 'You are exploring',
    };
  }
};

export default {
  create,
  move,
};
