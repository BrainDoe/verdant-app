import { createStore, combineReducer, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initailState, composeWithDevTools(applyMiddleware(...middleware)))

export default store