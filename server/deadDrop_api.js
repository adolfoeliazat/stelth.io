const objection = require('objection');
const DeadDrop = require('./models/DeadDrop');

module.exports = (app) => {
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
      data: req.body.data,
      lat: _lat,
      lng: _lng,
      ownerID: _ownerID,
      receiverID: _receiverID
    }
    DeadDrop.query()
      .insertAndFetch(formattedDrop)
      .then((deadDrops) => { res.send(deadDrops) })
      .catch(next);
  })
}
