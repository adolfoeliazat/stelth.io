import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import rootReducer from './Reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// ----------- Initialize Default State --------- //
const Initial_State = {
  // greeting: "Hello earthlings"
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// -------------- Creating the store ------------ //

const store = createStore(
  rootReducer, 
  Initial_State,
  composeEnhancers(
    applyMiddleware(thunk, logger)
  ),
)

export default store
