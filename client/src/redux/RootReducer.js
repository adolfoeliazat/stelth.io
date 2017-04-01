// import { combineReducers } from 'redux'

import { applyMiddleware, createStore, combineReducers } from 'redux'
import { greetingReducer, nameReducer } from './Reducers'
import { createLogger } from 'redux-logger'

const rootReducer = combineReducers({
  greeting: greetingReducer,
  name: nameReducer
})

const plugins = [createLogger()]
const middleware = applyMiddleware(...plugins)
const stelthStore = createStore(rootReducer, {greeting: 'wussup'}, middleware)
console.log(stelthStore)

export default stelthStore

// import reducer from './Reducer'

// export default () => {
//   const rootReducer = combineReducers({ reducer })
//   return configureStore(rootReducer)
// }