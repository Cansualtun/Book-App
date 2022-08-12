import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    // book name
    company: {
      type: String,
      required: [true, 'Please provide company'],
      maxlength: 50,
    },
    // book author
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 100,
    },
    // book status
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    // Book Type
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },
    // Book Language
    jobLocation: {
      type: String,
      default: 'my-city',
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
