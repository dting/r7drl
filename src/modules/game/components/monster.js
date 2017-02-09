import Component from './component';

class Monster extends Component {
  constructor() {
    super('Monster');
    Object.freeze(this);
  }
}

export default Object.freeze({
  INSTANCE: new Monster(),
});
