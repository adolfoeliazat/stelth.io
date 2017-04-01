import { createStore, combineReducers, applyMiddleware } from 'redux'
import { greetingReducer, nameReducer } from './Reducers'
import { createLogger } from 'redux-logger'

const rootReducer = combineReducers({
  greeting: greetingReducer,
  name: nameReducer
})

const preloadedState = {
  greeting: "sup"
}

// const stelthStore = createStore(
//   rootReducer, 
//   preloadedState, 
//   applyMiddleware(logger)
// )


const plugins = [createLogger()]
const middleware = applyMiddleware(...plugins)

const stelthStore = function (preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    middleware
  )
}

console.log('stelthstore', stelthStore)
export default stelthStore
