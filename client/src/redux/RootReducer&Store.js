import { createStore, combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
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

// const middleware = applyMiddleware(
//   createLogger()
// )


const store = createStore(
  rootReducer, 
  applyMiddleware(logger)
)


// const store = function (preloadedState) {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     middleware
//   )
// }

console.log('store', store)
export default store
