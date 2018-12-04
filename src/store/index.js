import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunkMid from 'redux-thunk';
import promiseMid from 'redux-promise'
import pagereducer from './reducers/page.js'
import datainner from './reducers/datainner.js'
import datainner2 from './reducers/datainner1.js'
import datainner3 from './reducers/datainner3.js'
import datainner4 from './reducers/datainner4.js'

var reducer = combineReducers({
	pagereducer,
	datainner,
	datainner2,
	datainner3,
	datainner4,
})

var store = createStore(reducer,applyMiddleware(thunkMid,promiseMid));

export default store;