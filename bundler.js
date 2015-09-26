'use strict';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';

const productionConfig = {
  devtool: 'source-map',

  entry: path.join(__dirname, 'client/app/index.js'),

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },

  output: {
    path: path.join(__dirname, 'client/build'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

const developmentConfig = {
  entry: [
    // Hot reload
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',

    // App entry
    path.join(__dirname, 'client/app/index.js')
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },

  output: {
    path: path.join(__dirname, 'client/build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  // Hot module replacement
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

if (process.env.NODE_ENV === 'production') {
  webpack(productionConfig)
    .run(function(err) {
    if (err) throw err;
    console.log("Webpack bundled successfully");
  });
}


if (process.env.NODE_ENV === 'development') {
  new WebpackDevServer(webpack(developmentConfig), {
    /**
     * Proxying bundled application from the build path
     * http://localhost:3000/build -> http://localhost:8080/build
     */
    publicPath: '/build/',

    /**
     * Hot module replacement
     * this is different from hot reload
     * Hot reload = full page reload
     * Hot module replacement = only reload changed modules
     */
    hot: true,

    // Terminal configurations
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  })
  .listen(8080, 'localhost', (err) => {
    if (err) throw err;
    console.log('Webpack is live on port 8080');
  });
}
