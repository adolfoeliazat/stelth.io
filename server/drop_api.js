const objection = require('objection');
const Drop = require('./models/Drop');

module.exports = (app) => {
  app.get('/drops', (req, res, next) => {
    Drop
      .query()
      .skipUndefined()
      .where('id', req.query.id)
      .where('ownerID', req.query.ownerID)
      .then((drops) => { res.send(drops) })
      .catch(next);
  })

  app.post('/drops', (req, res, next) => {
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
    Drop.query()
      .insertAndFetch(formattedDrop)
      .then((drops) => { res.send(drops) })
      .catch(next);
  })
}