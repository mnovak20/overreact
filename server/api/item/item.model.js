'use strict';

import mongoose, { Schema } from 'mongoose';

const ItemSchema = new Schema({
  text: String,
  completed: { type: Boolean, default: false }
});

export default mongoose.model('Item', ItemSchema);