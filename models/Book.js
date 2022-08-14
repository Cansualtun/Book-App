import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema(
  {
    // book name
    bookName: {
      type: String,
      required: [true, 'Please provide book name'],
      maxlength: 50,
    },
    // book author
    bookAuthor: {
      type: String,
      required: [true, 'Please provide book author'],
      maxlength: 100,
    },
    // book status
    status: {
      type: String,
      enum: ['reading', 'finished', 'to be read'],
      default: 'reading',
    },
    // Book Type
    bookType: {
      type: String,
      enum: ['fiction', 'nonfiction', 'drama', 'poetry', 'folktale'],
      default: 'fiction',
    },
    // Book Page Number
    pageNumber: {
      type: Number,
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

export default mongoose.model('Book', BookSchema);
