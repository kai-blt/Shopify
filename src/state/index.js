import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//Import Ducks
import { searchReducer } from './ducks';

export const middlewares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

//Combine Slices of State
export const rootReducer = combineReducers({
  search: searchReducer,
});

export const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
