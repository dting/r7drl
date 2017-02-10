import ROT from 'rot-js';

const draw = function draw(display, ...entities) {
  entities.forEach((entity) => {
    const { x, y } = entity.getComponent('Location');
    const { char, fg, bg } = entity.getComponent('Display');
    display.draw(x, y, char, fg, bg);
  });
};

const drawMap = function drawMap({ display, player, map, entities, seen }) {
  const playerLocation = player.getComponent('Location');

  display.clear();

  Object.keys(seen).forEach((key) => {
    const [x, y] = seen[key];
    display.draw(x, y, '', '', map[key] ? '#333' : '#ccc');
  });

  new ROT.FOV.PreciseShadowcasting((x, y) => {
    const key = `${x},${y}`;
    return key in map && !map[key];
  }).compute(playerLocation.x, playerLocation.y, 5, (x, y) => {
    const key = `${x},${y}`;
    seen[key] = seen[key] || [x, y];
    display.draw(x, y, '', '', map[key] ? '#333' : '#fff');
  });

  entities
    .filter(entity => entity.getComponent('Location').key in seen)
    .forEach(entity => draw(display, entity));

  draw(display, player);
};

export default {
  drawMap,
};
