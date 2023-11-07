import mongoose, { Schema } from 'mongoose';

const bookSchema = new Schema({
  bookId: {
    type: Number,
  },
  bookName: {
    type: String,
  },
  author: {
    type: String,
  },
  publish: {
    type:Number,
  },
});

export default mongoose.model('Books', bookSchema);