import mongoose, { Schema } from 'mongoose';

const laptopSchema = new Schema({
  SSN: {
    type: Number,
  },
  model: {
    type: String,
  },
  config: {
    type: String,
  },
  year: {
    type:Number,
  },
});

export default mongoose.model('Laptop', laptopSchema);