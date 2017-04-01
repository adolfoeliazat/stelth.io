
// ------------------ Action Names ----------------- //

export const types = {
  SAY_HELLO: 'SAY_HELLO',
  SAY_GOODBYE: 'SAY_GOODBYE', 
  CHANGE_NAME: 'CHANGE_NAME'
}

// // ----------- Initialize Default State --------- //
// const Initial_State = {
//   greeting: 'Hey there cutie :D',
// }

// ------------------- Reducers ------------------- //

export const greetingReducer = (state='', action) => {
  console.log('sup im the greeting reducer')
  switch (action.type) {
    case types.SAY_HELLO: return 'Hello '
    case types.SAY_GOODBYE: return 'Goodbye'
  }
  return state
}

export const nameReducer = (state='Regina', action) => {
  console.log('state before namereducer', state)
  console.log('action in name reducer', action)
  switch(action.type) {
    case types.CHANGE_NAME: return 'Joel'
  }
  return state
}

// -------------- Action Creators ------------ //
export const actions = {
  changeName: () => { 
    console.log('firing in change name')
    return { type: types.CHANGE_NAME }
  },
  hello: () => { return { type: 'SAY_HELLO' }},
  goodbye: () => { return { type: 'SAY_GOODBYE' }}
}
