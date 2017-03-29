// Server starter-kit
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// DB stuff
const Model = require('objection').Model;
const Knex = require('knex');
const knexfile = require('../knexfile')
const drop_api = require('./drop_api');

// dotenv.load();

// Port application is running on
const PORT = process.env.PORT || 3000;

const knex = Knex(knexfile.development);
Model.knex(knex);

// Express initiation
const app = express()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(morgan('dev'))
    .use(express.static('/'));

drop_api(app)

// Error handler
app.use((err, req, res, next) => {
    if(err) {
        req.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
    } else {
        next();
    }
});

app.get('/', (res, req, next) => {
    console.log("HELLO WORLD!");
})

// Server listener
const server = app.listen(PORT, function() {
    console.log(`Stelth listening on port ${PORT}`);
});


