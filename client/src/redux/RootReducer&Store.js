import { applyMiddleware, createStore, combineReducers } from 'redux'
import { greetingReducer, nameReducer } from './Reducers'
import { createLogger } from 'redux-logger'

const rootReducer = combineReducers({
  greeting: greetingReducer,
  name: nameReducer
})

const plugins = [createLogger()]
const middleware = applyMiddleware(...plugins)

const stelthStore = createStore(rootReducer, {
  greeting: "HEY THUR"
}, middleware)

export default stelthStore
