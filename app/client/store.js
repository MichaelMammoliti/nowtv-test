import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import chatReducer from './containers/chat/state/reducer';

const reducerCollection = combineReducers({
  chat: chatReducer,
});

export const store = createStore(reducerCollection, {}, applyMiddleware(thunk));
