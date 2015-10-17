'use strict';

import mongoose from 'mongoose';
import app from './express';
import { seedDB, mongo } from './config';

// Connect to database
mongoose.connect(mongo.uri);

if (seedDB) {
  require('./config/seed')();
}

export default app;