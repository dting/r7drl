import ROT from 'rot-js';

import { Slime, Succubus, Cacodemon, Baron, Boss } from './monsters';
import Player from './player';

const HEIGHT = 30;
const WIDTH = 80;

const DISPLAY = new ROT.Display({ width: WIDTH, height: HEIGHT });

const LEVELS = ['Crust', 'Mantle', 'Outer Core', 'Inner Core'];
const MONSTERS = [
  [Slime, Slime, Slime, Slime, Slime],
  [new Slime(), new Slime(), new Succubus(), new Succubus(), new Succubus()],
  [new Cacodemon(), new Cacodemon(), new Cacodemon(), new Succubus(), new Succubus()],
  [new Baron(), new Baron(), new Cacodemon(), new Succubus(), new Boss()],
];

const place = function(entity, coords) {
  [entity.x, entity.y] = coords;
};

const streamSampler = function streamSampler(n) {
  return {
    results: [],
    count: 0,
    next(v) {
      this.count += 1;
      if (this.count <= n) {
        this.results.push(v);
      } else {
        const r = Math.floor(Math.random() * this.count);
        if (r < n) {
          this.results[r] = v;
        }
      }
    },
    sampled() {
      return [...this.results];
    },
  };
};

const create = function create(level = 0) {
  const map = Object.create(null);
  const seen = Object.create(null);
  const levelName = LEVELS[level];
  const monsters = MONSTERS[level].map(ctor => new ctor());
  const player = new Player();

  const digger = new ROT.Map.Digger(WIDTH, HEIGHT);
  digger.create((x, y, type) => map[`${x},${y}`] = type);

  const sampler = streamSampler(6);
  digger.getRooms().forEach(room => {
    for (let x = room._x1; x <= room._x2; x++) {
      for (let y = room._y1; y <= room._y2; y++) {
        sampler.next([x, y]);
      }
    }
  });
  const coords = sampler.sampled();
  place(player, coords.shift());

  monsters.forEach(monster => place(monster, coords.shift()));

  return {
    display: DISPLAY,
    message: "You are exploring",
    level,
    levelName,
    player,
    map,
    monsters,
    seen,
  };
};

const move = function move(state, direction) {
  const player = new Player(state.player);
  player.move(direction);
  return {
    player,
  };
};

export default {
  create,
  move,
};
