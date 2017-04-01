// ------------------ Action Names ----------------- //

const types = {
  CHANGE_NAME: 'CHANGE_NAME'
}


// -------------- Action Creators ------------ //
const actions = {
  changeName: () => { return { type: types.CHANGE_NAME }},
}

module.exports = {
  types,
  actions
}
