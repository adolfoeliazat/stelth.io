const objection = require('objection');
const User = require('./models/User');
const DeadDrop = require('./models/DeadDrop');

module.exports = (app) => {
  app.get('/users', (req, res, next) => {
    User
      .query()
      .skipUndefined()
      .where('users.id', req.query.id)
      .then(users => {
        res.send(users)
      })
      .catch(next);
  })

  app.post('/users', (req, res, next) => {
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
      .then((deadDrops) => {
        res.send(deadDrops)
      })
      .catch(next);
  })

  app.post('/deadDrops', (req, res, next) => {
    let _ownerID = parseInt(req.body.ownerID);
    let _receiverID = parseInt(req.body.receiverID);
    let _lat = parseFloat(req.body.lat);
    let _lng = parseFloat(req.body.lng);
    let formattedDrop = {
      title: req.body.title,
      file: req.body.file,
      message: req.body.message,
      lat: _lat,
      lng: _lng,
      ownerID: _ownerID,
      receiverID: _receiverID
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
        console.log('this the the deadDrops in delete ', deadDrops)
        res.send('Drop has been deleted!')
      })
      .catch(next);
  })  
}