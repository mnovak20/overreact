'use strict';

import path from 'path';

export default {
  nodeEnv: process.env.NODE_ENV,

  port: process.env.PORT || 3000,

  webpackPort: 8080,

  root: path.normalize(__dirname + '../../..'),

  mongo: {
    uri: 'mongodb://localhost/overreact'
  },

  seedDB: true
};
