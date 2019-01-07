import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import { allReducers } from './reducers';

const Store = createStore(allReducers, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default Store;