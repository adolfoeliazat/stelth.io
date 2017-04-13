// Server starter-kit
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

// DB stuff
const registerApi = require('./api');
const Model = require('objection').Model;
const Knex = require('knex');
const knexfile = require('../knexfile');
const knex = Knex(knexfile.development);
Model.knex(knex);

//AWS stuff
// import { bucketName, AWSConfigRegion } from '../config'

// Port application is running on
const PORT = 3000;

console.log(path.join(__dirname, '/../client/build'))

// Express initiation
const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(morgan('dev'))
  .use(express.static(path.join(__dirname, '/../client/build')))

// Pull server into API context
registerApi(app);

// app.use('/s3', require('react-s3-uploader/s3router')({
//     bucket: bucketName,
//     region: AWSConfigRegion, //optional
//     // headers: {'Access-Control-Allow-Origin': '*'}, // optional
//     ACL: 'private', // this is default
//     uniquePrefix: true // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
// }));

// Error handler
app.use((err, req, res, next) => {
  if (err) {
    res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
  } else {
    next();
  }
});

// app.get('/', (req, res, next) => {
//   console.log("HELLO WORLD!");
// })

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
})

// Server listener
const server = app.listen(PORT, function () {
  console.log(`Stelth listening on port ${PORT}`);
});


