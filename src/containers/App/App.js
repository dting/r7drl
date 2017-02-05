import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent, PropTypes } from 'react';
import ROT from 'rot-js';

import Board from '../Board';

import { actions } from '../../modules';

class App extends PureComponent {
  static displayName = 'App';

  static propTypes = {
    initGame: PropTypes.func.isRequired,
    move: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.initKeyHandlers();
    this.props.initGame();
  }

  initKeyHandlers() {
    const { VK_LEFT, VK_RIGHT, VK_UP, VK_DOWN } = ROT;
    window.addEventListener('keydown', ({ keyCode }) => {
      if (keyCode === VK_LEFT || keyCode === VK_RIGHT || keyCode === VK_UP || keyCode === VK_DOWN) {
        this.props.move(keyCode);
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
          <Board/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  initGame: bindActionCreators(actions.game.init, dispatch),
  move: bindActionCreators(actions.game.move, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
