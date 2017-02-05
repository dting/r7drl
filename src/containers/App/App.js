import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import ROT from 'rot-js';

import Board from '../Board';

import { actions } from '../../modules';

class App extends PureComponent {
  static displayName = 'App';

  static propTypes = {
    move: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.initKeyHandlers();
  }

  initKeyHandlers() {
    window.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case ROT.VK_LEFT:
        case ROT.VK_RIGHT:
        case ROT.VK_UP:
        case ROT.VK_DOWN:
          this.props.move(e.keyCode);
          break;
        default:
          break;
      }
    });
  }

  render() {
    return (
      <div className="layout">
        <div className="layout-header">
          <h2>Welcome to R7DRL</h2>
        </div>
        <div className="layout-content">
          <Board />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  move: bindActionCreators(actions.game.move, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
