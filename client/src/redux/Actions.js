// ------------------ Action Names ----------------- //

const types = {
  SAY_HELLO: 'SAY_HELLO',
  SAY_GOODBYE: 'SAY_GOODBYE', 
  CHANGE_NAME: 'CHANGE_NAME'
}


// -------------- Action Creators ------------ //
const actions = {
  changeName: () => { 
    return { type: types.CHANGE_NAME }
  },
  hello: () => { return { type: 'SAY_HELLO' }},
  goodbye: () => { return { type: 'SAY_GOODBYE' }}
}

module.exports = {
  types,
  actions
}
