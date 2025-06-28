// models/Blog.js
import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  period: {
    type: String,
    default: ''
  },
  img_url: {
    type: String,
    default: ''
  }
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);