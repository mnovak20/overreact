'use strict';

import mongoose, { Schema } from 'mongoose';

mongoose.Promise = Promise;

const ItemSchema = new Schema({
  title: String,
  description: String
});

export default mongoose.model('Item', ItemSchema);