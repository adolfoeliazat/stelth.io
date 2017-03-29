const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

const config = {
 entry: `${SRC_DIR}/app.js`,
 output: {
   path: PUBLIC_DIR,
   filename: 'bundle.js',
 },
 module: {
   loaders: [{
     include: SRC_DIR,
     loader: 'babel-loader',
   }],
 },
};

module.exports = config;