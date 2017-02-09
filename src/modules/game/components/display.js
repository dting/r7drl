import Component from './component';

export default class Display extends Component {
  constructor({ char, fg, bg }) {
    super('Display');
    this.char = char;
    this.fg = fg;
    this.bg = bg;
  }
}
