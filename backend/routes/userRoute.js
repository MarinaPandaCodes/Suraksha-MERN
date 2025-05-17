import express from 'express';
import {
  bookAppointment,
  getProfile,
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

// Book an appointment (requires authentication)
userRouter.post('/book-appointment', authUser, bookAppointment);

export default userRouter;
