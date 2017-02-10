import { connect } from 'react-redux';
import React, { PureComponent, PropTypes } from 'react';

class Header extends PureComponent {
  static displayName = 'Header';

  static propTypes = {
    level: PropTypes.number.isRequired,
    levelName: PropTypes.string.isRequired,
  };

  render() {
    const { level, levelName } = this.props;
    return (
      <div className="header">
        <div className="header--text">{`LVL ${level} - ${levelName}`}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  level: state.game.level,
  levelName: state.game.levelName,
});

export default connect(mapStateToProps)(Header);
