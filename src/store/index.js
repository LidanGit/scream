import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunkMid from 'redux-thunk';
import promiseMid from 'redux-promise'
import pagereducer from './reducers/page.js'
import classifyReducer from './reducers/classifyReducer.js';
import sendOuterReducer from './reducers/sendOuterReducer.js';
import sendSearchReducer from './reducers/sendSearchReducer.js';
import sendTitleReducer from './reducers/sendTitleReducer.js';
var reducer = combineReducers({
	pagereducer,
	classifyReducer,
	sendOuterReducer,
	sendSearchReducer,
	sendTitleReducer
})
var store = createStore(reducer,applyMiddleware(thunkMid,promiseMid));

export default store;