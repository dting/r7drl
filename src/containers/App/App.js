import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import Board from '../Board';

import { actions } from '../../modules';

class App extends PureComponent {
  static displayName = 'App';

  static propTypes = {
    gameActions: React.PropTypes.shape({}).isRequired,
  };

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
  gameActions: bindActionCreators(actions.game, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
