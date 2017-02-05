import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import ROT from 'rot-js';

import { actions } from '../../modules';

class Board extends PureComponent {
  static displayName = 'Board';

  static propTypes = {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    setDisplay: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { height, width } = this.props;
    const display = new ROT.Display({ height, width });
    this.props.setDisplay(display);
    this.board.append(display.getContainer());
  }

  render() {
    return (
      <div className="board" ref={c => this.board = c} />
    );
  }
}

const mapStateToProps = state => ({
  height: state.game.height,
  width: state.game.width,
});

const mapDispatchToProps = dispatch => ({
  setDisplay: bindActionCreators(actions.game.setDisplay, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
