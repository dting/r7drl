import { connect } from 'react-redux';
import React, { PureComponent, PropTypes } from 'react';

class Info extends PureComponent {
  static displayName = 'Info';

  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return (
      <div className="info">
        <div className="info--message">{this.props.message}</div>
        <div className="info__player">
          <div className="info__player--attributes">
            LVL: {this.props.lvl}
          </div>
          <div className="info__player--attributes">
            HP: {this.props.hp}
          </div>
          <div className="info__player--attributes">
            ATK: {this.props.atk}
          </div>
          <div className="info__player--attributes">
            DEF: {this.props.def}
          </div>
        </div>
        <div className="info__equipment">
          <div className="info__equipment--weapon">
            <span className="info__equipment--icon">⚔</span>{this.props.currentWeapon.getComponent('Meta').name}
          </div>
          <div className="info__equipment--armor">
            <span className="info__equipment--icon">🛡️</span>{this.props.currentArmor.getComponent('Meta').name}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.game.player.getComponent('Attributes'),
  ...state.game.player.getComponent('Inventory'),
  message: state.game.message,
});

export default connect(mapStateToProps)(Info);
