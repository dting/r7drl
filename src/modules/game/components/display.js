import Component from './component';

export default class Display extends Component {
  static componentType = 'Display';

  constructor({ char, fg, bg }) {
    super();
    this.char = char;
    this.fg = fg;
    this.bg = bg;
  }

  getComponentType() {
    return Display.componentType;
  }
}
