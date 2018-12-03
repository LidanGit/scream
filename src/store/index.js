import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunkMid from 'redux-thunk';
import promiseMid from 'redux-promise'
import pagereducer from './reducers/page.js'
var reducer = combineReducers({
	pagereducer,
})
var store = createStore(reducer,applyMiddleware(thunkMid,promiseMid));

export default store;