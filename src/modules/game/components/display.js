import Component from './component';

export default class Display extends Component {
  constructor({ char, fg, bg }) {
    super();
    this.char = char;
    this.fg = fg;
    this.bg = bg;
  }

  getComponentType() {
    return Display.name;
  }
}
