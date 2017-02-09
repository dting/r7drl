import ROT from 'rot-js';

import { Location } from './components';
import { movement } from './systems';
import { StreamSampler } from './utils';
import * as Factories from './factories';

const LEVELS = [{
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

const create = function create(level = 0, player = Factories.Player.create()) {
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

const move = function move(state, direction) {
  const candidateLocation = movement.candidateLocation(state.player, direction);
  const candidateKey = `${candidateLocation.x},${candidateLocation.y}`;

  // If candidate location is a wall, noop
  if (state.map[candidateKey]) {
    return {};
  }

  return {
    player: movement.move(state.player, direction),
  };
};

export default {
  create,
  move,
};
