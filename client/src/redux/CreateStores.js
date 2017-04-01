import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './RootReducer'

export default (rootReducer) => {
  const plugins = [ createLogger() ]
  const middleware = applyMiddleware(...plugins)
  const store = createStore(rootReducer, middleware)
  return store
}

// const Initial_State = {
//   greeting: 'Wussup bro'
// }

// const store = createStore({
//   rootReducer,
//   Initial_State
// })

// export default store
