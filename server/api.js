const objection = require('objection');
const User = require('./models/User');

module.exports = (app) => {
    app.get('/users', (req, res, next) => {
      User
        .query()
        .skipUndefined()
        .where('users.id', req.query.id)
        .then(users => {
            if(users.length === 0) {
                User
                .query()
                .insertAndFetch({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    publicKey: req.body.publicKey
                })
                .then(user => {
                    res.send(user)
                })
                .catch(err => {
                    console.log("this shit is not working properly foo", err)
                    next(err)
                })
            } else {
                res.send(users)
            }
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
}   