const draw = function draw(display, ...entities) {
  entities.forEach(entity => {
    const { x, y } = entity.getComponent('Location');
    const { char, fg, bg } = entity.getComponent('Display');
    display.draw(x, y, char, fg, bg);
  });
}

export default {
  draw,
};
