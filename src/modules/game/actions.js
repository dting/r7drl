import ROT from 'rot-js';

import { landTile, wallTile } from './tile';

import types from './constants';

const KEYCODE_TO_DIRECTION = {
  [ROT.VK_LEFT]: types.MOVE_LEFT,
  [ROT.VK_RIGHT]: types.MOVE_RIGHT,
  [ROT.VK_UP]: types.MOVE_UP,
  [ROT.VK_DOWN]: types.MOVE_DOWN,
};

const drawMap = function drawMap() {
  return (dispatch, getState) => {
    const { display, player, map, monsters, seen } = getState().game;

    display.clear();

    Object.keys(seen).forEach(key => {
      const [x, y] = seen[key];
      display.draw(x, y, '', '', 'darkgray');
    });

    new ROT.FOV.PreciseShadowcasting((x, y) => {
      const key = `${x},${y}`;
      return key in map && !map[key];
    }).compute(player.x, player.y, 5, (x, y, r) => {
      const key = `${x},${y}`;
      if (!map[key] && !seen[key]) {
        seen[key] = [x, y];
      }
      const bg = map[key] ? wallTile.bg : landTile.bg;
      display.draw(x, y, '', '', bg);
    });

    monsters.forEach(monster => {
      const key = `${monster.x},${monster.y}`;
      if (key in seen) {
        display.draw(monster.x, monster.y, monster.char, monster.fg, monster.bg);
      }
    });

    display.draw(player.x, player.y, player.char, player.fg, player.bg);
  };
};

const init = function init() {
  return dispatch => {
    dispatch({ type: types.INIT_GAME });
    dispatch(drawMap());
  };
};

const move = function move(keyCode) {
  return dispatch => {
    dispatch({ type: KEYCODE_TO_DIRECTION[keyCode] });
    dispatch(drawMap());
  }
};

export default {
  init,
  move,
};
