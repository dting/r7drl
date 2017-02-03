import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const devTools = function devTools() {
  if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
    return window.devToolsExtension();
  }
  return f => f;
};

const middleware = [thunk];

export default compose(applyMiddleware(...middleware), devTools());
