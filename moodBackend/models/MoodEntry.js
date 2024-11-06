import mongoose from 'mongoose';

const moodEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
    index: true // Indexing for faster lookups by userId
  },
  mood: {
    type: String,
    enum: {
      values: ['amazing', 'good', 'okay', 'bad', 'terrible'],
      message: '{VALUE} is not a valid mood' // Custom validation message
    },
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

export default mongoose.model('MoodEntry', moodEntrySchema);
