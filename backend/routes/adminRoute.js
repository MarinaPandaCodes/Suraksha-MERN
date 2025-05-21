import express from 'express';
import {
  addDoctor,
  allDoctors,
  loginAdmin,
  appointmentsAdmin,
  appointmentCancel,
} from '../controllers/adminController.js';
import { changeAvailability } from '../controllers/doctorController.js';
import authAdmin from '../middlewares/authAdmin.js';
import upload from '../middlewares/multer.js';

const adminRouter = express.Router();

// Add a new doctor (requires admin auth and image upload)
adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);

// Admin login
adminRouter.post('/login', loginAdmin);

// Get all doctors (requires admin auth)
adminRouter.post('/all-doctors', authAdmin, allDoctors);

// Change doctor availability (requires admin auth)
adminRouter.post('/change-availability', authAdmin, changeAvailability);

// Get all appointments (requires admin auth)
adminRouter.get('/appointments', authAdmin, appointmentsAdmin);

// Cancel an appointment (requires admin auth)
adminRouter.post('/appointment-cancel', authAdmin, appointmentCancel);

export default adminRouter;
