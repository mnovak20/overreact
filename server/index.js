'use strict';

import mongoose from 'mongoose';
import bluebird from 'bluebird';
import app from './express';
import { seedDB, mongo } from './config/environment';

// Connect to database and set up bluebird promise
mongoose.connect(mongo.uri);
mongoose.Promise = bluebird;

// Setting up global Promise as bluebird promise
Promise = bluebird;

if (seedDB) {
  require('./config/environment/seed')();
}

export default app;