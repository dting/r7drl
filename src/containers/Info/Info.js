import { connect } from 'react-redux';
import React, { PureComponent, PropTypes } from 'react';

class Info extends PureComponent {
  static displayName = 'Info';

  static propTypes = {
    playerLevel: PropTypes.number,
    message: PropTypes.string,
  };

  render() {
    return (
      <div className="info">
        <p>{this.props.message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerLevel: state.game.player.level,
  message: state.game.message,
});

export default connect(mapStateToProps)(Info);
