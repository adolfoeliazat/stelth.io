import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import rootReducer from './Reducers'
import logger from 'redux-logger'

// ----------- Initialize Default State --------- //
const Initial_State = {
  greeting: 'Hey there cutie :D',
}

// -------------- Creating the store ------------ //

const store = createStore(
  rootReducer, 
  Initial_State,
  applyMiddleware(logger)
)

export default store
