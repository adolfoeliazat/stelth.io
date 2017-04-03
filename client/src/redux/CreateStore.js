import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import rootReducer from './Reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// ----------- Initialize Default State --------- //
const Initial_State = {
  greeting: 'Hey there cutie :D',
}

// -------------- Creating the store ------------ //

const store = createStore(
  rootReducer, 
  Initial_State,
  applyMiddleware(thunk, logger)
)

export default store
