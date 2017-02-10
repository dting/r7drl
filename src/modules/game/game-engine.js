import ROT from 'rot-js';

import * as Systems from './systems';

const OPTIONS = {
  width: 40,
  height: 40,
  forceSquareRatio: true,
  fontSize: 12,
};
const DISPLAY = new ROT.Display(OPTIONS);

const drawMap = function drawMap(state) {
  Systems.display.drawMap(state);
};

const create = function create(level = 1, player) {
  const { width, height } = OPTIONS;
  return {
    ...Systems.level.generate({ player, level, height, width }),
    display: DISPLAY,
  };
};

const transport = function transport(state) {
  return create(state.level + 1, state.player);
};

const move = function move(state, direction) {
  const { player, entities, map } = state;
  const newLocation = Systems.movement.check(player, direction);

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
      return Systems.combat.fight({ player, entities }, focus);
    }
    if (focus.hasComponent('Item')) {
      if (focus.getComponent('Item').type === 'Transport') {
        return transport(state);
      }
      return Systems.item.pickUp({ player, entities }, focus);
    }
  }
  return {
    player: Systems.movement.move(player, newLocation),
    message: 'You are exploring',
  };
};

export default {
  create,
  drawMap,
  move,
};
