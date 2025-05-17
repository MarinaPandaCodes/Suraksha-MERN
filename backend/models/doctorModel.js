import mongoose from 'mongoose';

// Define doctor schema
const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Doctor's name
    email: { type: String, required: true, unique: true }, // Doctor's email (must be unique)
    password: { type: String, required: true }, // Hashed password
    image: { type: String, required: true }, // Profile image URL or path
    speciality: { type: String, required: true }, // Medical speciality
    degree: { type: String, required: true }, // Qualification
    experience: { type: String, required: true }, // Years of experience
    about: { type: String, required: true }, // About the doctor
    available: { type: Boolean, default: true }, // Availability status
    fees: { type: Number, required: true }, // Consultation fees
    address: { type: Object, required: true }, // Address object
    date: { type: Number, required: true }, // Timestamp or created date
    slots_booked: { type: Object, default: {} }, // Booked slots by date
  },
  { minimize: false }
); // Keeps empty objects in the document

// Use existing model if available, else create new one
const doctorModel =
  mongoose.models.doctor || mongoose.model('doctor', doctorSchema);

export default doctorModel;
