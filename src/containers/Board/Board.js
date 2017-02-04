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
    mapSetup: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { height, width } = props;
    this.display = new ROT.Display({ height, width });
  }

  componentDidMount() {
    this.board.append(this.display.getContainer());
    this.props.mapSetup(this.display);
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
  mapSetup: bindActionCreators(actions.game.mapSetup, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
