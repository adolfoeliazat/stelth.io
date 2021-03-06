const webpack = require('webpack');
const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, 'client/src');
const PUBLIC_DIR = path.resolve(__dirname, 'client/public');
const BUILD_DIR = path.resolve(__dirname, 'client/build');

const config = {
  entry: {
    main: path.resolve(SRC_DIR, 'index.jsx'),
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'react-hot-loader',
        test: SRC_DIR,  //.js work?
      },
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: SRC_DIR,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: { limit: 100000 }
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.jpg$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: { limit: 8192, name: 'fonts/[name].[ext]?[hash]' },
      }],
  },
  plugins: [
    new CopyWebpackPlugin([{ from: PUBLIC_DIR }]),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    // new DotenvPlugin({
    //   sample: './.env.example',
    //   path: './.env',
    // }),
  ],
  watch: true,
  stats: { colors: true },
  devtool: 'inline-sourcemap'
};

module.exports = config;
