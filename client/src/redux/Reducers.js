
// ------------------ Action Names ----------------- //

export const types = {
  SAY_HELLO: 'SAY_HELLO',
  SAY_GOODBYE: 'SAY_GOODBYE'
}

// export const types = {
//   MOUNT_APP: 'MOUNT_APP'
// }

// ----------- Initialize Default State --------- //
const Initial_State = {
  greeting: 'Wussup bro'
}

// const Initial_State = {
//   mounted: false
// }

// ------------------- Reducers ------------------- //

export const greetingReducer = (state='', action) => {
  switch (action.type) {
    case types.SAY_HELLO: return 'Hello '
    case types.SAY_GOODBYE: return 'Goodbye'
  }
  return state
}

export const nameReducer = (state='Regina', action) => {
  switch(action.type) {
    case 'CHANGE_NAME': return 'Joel'
  }
  return state
}

// export default (state = Initial_State, action) => {
//   switch (action.type) {
//     case types.MOUNT_APP:
//       return { ...state, mounted: action.payload }
      
//     default:
//       return state
//   }
// }

// -------------- Action Creators ------------ //
export const actions = {
  changeName: () => { return { type: 'CHANGE_NAME' }},
  hello: () => { return { type: 'SAY_HELLO' }},
  goodbye: () => { return { type: 'SAY_GOODBYE' }}
  // dispatchMountAction: (val) => ({ type: types.MOUNT_APP, payload: val })
}
