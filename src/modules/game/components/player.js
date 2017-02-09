import Component from './component';

class Player extends Component {
  constructor() {
    super('Player');
    Object.freeze(this);
  }
}

export default Object.freeze({
  INSTANCE: new Player(),
});
