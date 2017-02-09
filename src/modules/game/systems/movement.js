import { Location } from '../components';

const _next = function _move(location, direction) {
  switch(direction) {
    case 'left':
      return new Location([location.x - 1, location.y]);
    case 'right':
      return new Location([location.x + 1, location.y]);
    case 'up':
      return new Location([location.x, location.y - 1]);
    case 'down':
      return new Location([location.x, location.y + 1]);
    default:
      throw new Error(`Invalid direction: ${direction}`);
  }
}

const check = function check(entity, direction) {
  return _next(entity.getComponent('Location'), direction);
}

const move = function move(entity, location) {
  return entity.copy().setComponent(location);
}

export default {
  check,
  move,
};
