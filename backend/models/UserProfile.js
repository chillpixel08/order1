import mongoose from 'mongoose';

const UserProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  name: String,
  email: String,
  phone: String,
  address: String,
  country: String,
  photoURL: String
});

export default mongoose.model('UserProfile', UserProfileSchema);
