import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import api from '../middleware/api';
import rootReducer from '../reducers';

// import { createLogger } from 'redux-logger';
// import DevTools from '../containers/DevTools';

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk)));
const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, api/*createLogger()*/ )
    // DevTools.instrument()
));
export default store;
