import { connect } from 'react-redux';
import React, { PureComponent, PropTypes } from 'react';

class Info extends PureComponent {
  static displayName = 'Info';

  static propTypes = {
    message: PropTypes.string,
    lvl: PropTypes.number,
    exp: PropTypes.number,
    hp: PropTypes.number,
    atk: PropTypes.number,
    def: PropTypes.number,
    currentWeapon: PropTypes.shape({}),
    currentArmor: PropTypes.shape({}),
  };

  render() {
    const { message, lvl, exp, hp, atk, def, currentWeapon, currentArmor } = this.props;
    const weaponName = currentWeapon.getComponent('Meta').name;
    const weaponAtk = currentWeapon.getComponent('Attributes').atk;
    const armorName = currentArmor.getComponent('Meta').name;
    const armorDef = currentArmor.getComponent('Attributes').def;
    return (
      <div className="info">
        <div className="info--message">{message}</div>
        <div className="info__player">
          <div className="info__player--attributes">
            LVL: {lvl}
          </div>
          <div className="info__player--attributes">
            EXP: {exp}
          </div>
          <div className="info__player--attributes">
            HP: {hp}
          </div>
          <div className="info__player--attributes">
            ATK: {atk}
          </div>
          <div className="info__player--attributes">
            DEF: {def}
          </div>
        </div>
        <div className="info__equipment">
          <div className="info__equipment--weapon">
            <span className="info__equipment--icon">⚔</span>{`${weaponName} (ATK: +${weaponAtk})`}
          </div>
          <div className="info__equipment--armor">
            <span className="info__equipment--icon">🛡️</span>{`${armorName} (DEF: +${armorDef})`}
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
