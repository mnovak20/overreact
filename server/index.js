'use strict';

import mongoose from 'mongoose';
import app from './express';
import { env } from './config';

// Connect to database
mongoose.connect(env.mongo.uri);

export default app;