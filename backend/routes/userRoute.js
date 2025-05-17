import express from 'express';
import {
  bookAppointment,
  cancelAppointment,
  getProfile,
  listAppointments,
  loginUser,
  registerUser,
  updateProfile,
} from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js';

const userRouter = express.Router();

// Register a new user
userRouter.post('/register', registerUser);

// Log in a user
userRouter.post('/login', loginUser);

// Get user profile (requires authentication)
userRouter.get('/get-profile', authUser, getProfile);

// Update user profile with image upload (requires authentication)
userRouter.post(
  '/update-profile',
  upload.single('image'),
  authUser,
  updateProfile
);

// Route to list the user's appointments
userRouter.get('/appointments', authUser, listAppointments);

// Route to delete appoinment
userRouter.post('/cancel-appointment', authUser, cancelAppointment);

// Book an appointment (requires authentication)
userRouter.post('/book-appointment', authUser, bookAppointment);

export default userRouter;
