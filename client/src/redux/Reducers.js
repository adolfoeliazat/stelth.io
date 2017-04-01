import { combineReducers } from 'redux'

// ------------------ Action Names ----------------- //

const types = {
  SAY_HELLO: 'SAY_HELLO',
  SAY_GOODBYE: 'SAY_GOODBYE', 
  CHANGE_NAME: 'CHANGE_NAME'
}

// ------------------- Reducers ------------------- //

const greetingReducer = (state='', action) => {
  switch (action.type) {
    case types.SAY_HELLO: return 'Hello '
    case types.SAY_GOODBYE: return 'Goodbye'
  }
  return state
}

const nameReducer = (state='Regina', action) => {
  switch(action.type) {
    case types.CHANGE_NAME: return 'Joel'
  }
  return state
}

// ----------------- Root Reducer ---------------- //

const rootReducer = combineReducers({
  greeting: greetingReducer,
  name: nameReducer
})

export default rootReducer
