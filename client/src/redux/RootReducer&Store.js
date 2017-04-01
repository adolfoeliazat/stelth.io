import { applyMiddleware, createStore, combineReducers } from 'redux'
import { greetingReducer, nameReducer } from './Reducers'
// import { createLogger } from 'redux-logger'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  greeting: greetingReducer,
  name: nameReducer
})

const preloadedState = {
  greeting: "sup"
}

const stelthStore = createStore(
  rootReducer, 
  preloadedState, 
  applyMiddleware(logger)
)

console.log('stelthstore', stelthStore)
export default stelthStore
