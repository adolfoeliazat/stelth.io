const objection = require('objection');
const User = require('./models/User');
const DeadDrop = require('./models/DeadDrop');

module.exports = (app) => {
  app.get('/users', (req, res, next) => {
    var firstName, lastName
    req.query.firstName !== undefined ? firstName = '%' + req.query.firstName + '%' : firstName = undefined
    req.query.lastName !== undefined ? lastName = '%' + req.query.lastName + '%' : lastName = undefined
    User
      .query()
      .skipUndefined()
      .where('users.id', req.query.id)
      .where('users.firstName', 'like', firstName)
      .where('users.lastName', 'like', lastName)
      .where('users.authID', req.query.authID)
      .then(users => {
        res.send(users)
      })
      .catch(next);
  })

  app.post('/users', (req, res, next) => {
    console.log('what is being posted? ', req.body)
    console.log('what is being query? ', req.query)
    console.log('what is being params? ', req.params)
    User
      .query()
      .insertAndFetch(req.body)
      .then(user => {
        res.send(user)
      })
      .catch(next)
  })

  app.get('/deadDrops', (req, res, next) => {
    DeadDrop
      .query()
      .skipUndefined()
      .where('id', req.query.id)
      .where('ownerID', req.query.ownerID)
      .where('authID', req.query.authID)
      .where('receiverID', req.query.receiverID)      
      .then((deadDrops) => {
        res.send(deadDrops)
      })
      .catch(next);
  })

  app.post('/deadDrops', (req, res, next) => {
    console.log(req.body)
    // let _ownerID = parseInt(req.body.ownerID);
    // let _receiverID = parseInt(req.body.receiverID);
    let _lat = parseFloat(req.body.lat);
    let _lng = parseFloat(req.body.lng);
    console.log('lat and long in api', _lat, _lng)
    let formattedDrop = {
      title: req.body.title,
      file: req.body.file,
      message: req.body.message,
      lat: _lat,
      lng: _lng,
      ownerID: req.body.ownerID,
      receiverID: req.body.receiverID
    }
    DeadDrop
      .query()
      .insertAndFetch(formattedDrop)
      .then((deadDrops) => { res.send(deadDrops) })
      .catch(next);
  })

  app.delete('/deadDrops', (req, res, next) => {
    DeadDrop
      .query()
      .delete()
      .where('id', req.body.id)
      .then(deadDrops => {
        res.send('Drop has been deleted!')
      })
      .catch(next);
  })
}
