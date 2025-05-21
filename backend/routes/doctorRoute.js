import express from 'express';
import { doctorList, loginDoctor } from '../controllers/doctorController.js';

const doctorRouter = express.Router();

// Get list of doctors
doctorRouter.get('/list', doctorList);
doctorRouter.post('/login', loginDoctor);

export default doctorRouter;
