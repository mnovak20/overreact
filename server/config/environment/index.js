'use strict';

import path from 'path';
import _ from 'lodash';

const all = {
  nodeEnv: process.env.NODE_ENV,

  port: process.env.PORT || 3000,

  webpackPort: 8080,

  root: path.normalize(__dirname + '../../..')
};

export default _.merge(all,
  require(`./${process.env.NODE_ENV}.js`) || {}
);