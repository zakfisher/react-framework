var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

const NODE_MODULES = path.join(__dirname, 'node_modules');
const LINT = path.join(__dirname, '.eslintrc.js');
const SERVER = path.join(__dirname, 'server.js');

module.exports = {

  entry: SERVER,

  output: {
    filename: 'server.bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  eslint: {
    configFile: LINT,
    emitError: true
  },

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(NODE_MODULES).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: SERVER
      }
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: NODE_MODULES, loaders: ['babel?cacheDirectory'] },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html$/, loader: 'html' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production') // eslint-disable-line quote-props
      }
    })
  ]

};
