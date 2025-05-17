import mongoose from 'mongoose';

// Define appointment schema
const appointmentSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // ID of the user booking the appointment
  docId: { type: String, required: true }, // ID of the doctor
  slotTime: { type: String, required: true }, // Time slot for the appointment
  slotDate: { type: String, required: true }, // Date of the appointment
  userData: { type: Object, required: true }, // Snapshot of user details
  docData: { type: Object, required: true }, // Snapshot of doctor details
  amount: { type: Number, required: true }, // Appointment fee
  date: { type: Number, required: true }, // Timestamp or created date
  cancelled: { type: Boolean, default: false }, // Whether appointment was cancelled
  payment: { type: Boolean, default: false }, // Whether payment is completed
  isCompleted: { type: Boolean, default: false }, // Whether appointment is completed
});

// Use existing model if available, else create new one
const appointmentModel =
  mongoose.models.appointment ||
  mongoose.model('appointment', appointmentSchema);

export default appointmentModel;
