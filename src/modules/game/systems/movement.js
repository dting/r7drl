import { Location } from '../components';

const _move = function _move(location, direction) {
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

const candidateLocation = function candidateLocation(entity, direction) {
  return _move(entity.getComponent('Location'), direction);
}

const move = function move(entity, direction) {
  return entity.copy().setComponent(_move(entity.getComponent('Location'), direction));
}

export default {
  candidateLocation,
  move,
};
