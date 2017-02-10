import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent, PropTypes } from 'react';

import Board from '../Board';
import Header from '../Header';
import Info from '../Info';

import { actions } from '../../modules';

class App extends PureComponent {
  static displayName = 'App';

  static propTypes = {
    initGame: PropTypes.func.isRequired,
    move: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.initKeyHandlers();
    this.props.initGame();
  }

  initKeyHandlers() {
    window.addEventListener('keydown', ({ keyCode }) => this.props.move(keyCode));
  }

  render() {
    return (
      <div className="layout">
        <div className="layout-header">
          <h2>Welcome to R7DRL</h2>
        </div>
        <div className="layout-content">
          <Header />
          <Board />
          <Info />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initGame: bindActionCreators(actions.game.init, dispatch),
  move: bindActionCreators(actions.game.move, dispatch),
});

export default connect(null, mapDispatchToProps)(App);
