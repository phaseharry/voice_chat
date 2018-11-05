import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import authReducer from './auth'
import messagesReducer from './messages'

const reducer = combineReducers({
  auth: authReducer,
  messages: messagesReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store