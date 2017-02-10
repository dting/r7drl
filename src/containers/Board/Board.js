import { connect } from 'react-redux';
import React, { PureComponent, PropTypes } from 'react';

class Board extends PureComponent {
  static displayName = 'Board';

  static propTypes = {
    display: PropTypes.shape({
      getContainer: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.board.append(this.props.display.getContainer());
  }

  render() {
    return (
      <div className="board" ref={c => (this.board = c)} />
    );
  }
}

const mapStateToProps = state => ({
  display: state.game.display,
});

export default connect(mapStateToProps)(Board);
