import ROT from 'rot-js';

import { combat, item, level, movement } from './systems';

const HEIGHT = 40;
const WIDTH = 40;
const DISPLAY = new ROT.Display({
  width: WIDTH,
  height: HEIGHT,
  forceSquareRatio: true,
  fontSize: 12,
});

const create = function create(lvl = 1, player) {
  return {
    ...level.generate({
      player,
      level: lvl,
      height: HEIGHT,
      width: WIDTH,
    }),
    display: DISPLAY,
  };
};

const transport = function transport(state) {
  return create(state.level + 1, state.player);
};

const move = function move(state, direction) {
  const { player, entities, map } = state;
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
      return combat.fight({ player, entities }, focus);
    }
    if (focus.hasComponent('Item')) {
      if (focus.getComponent('Item').type === 'Transport') {
        return transport(state);
      }
      return item.pickUp({ player, entities }, focus);
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
