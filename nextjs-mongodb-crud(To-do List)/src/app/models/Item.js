// models/Item.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false
  }
});

export default mongoose.models.Item || mongoose.model('Item', ItemSchema);