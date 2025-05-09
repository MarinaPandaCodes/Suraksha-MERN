import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectCloudinary from './config/cloudinary.js';
import connectDB from './config/mongodb.js';
import adminRouter from './routes/adminRoute.js';

dotenv.config();
//app config
const app = express();
const port = process.env.PORT || 5173;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json()); 
app.use(cors());

//api endpoints
app.use('/api/admin', adminRouter);
// localhost:5173/api/admin/add-doctor

app.get('/', (req, res) => {
  res.send('API WORKING ');
});

app.listen(port, () => console.log('Server Started', port));
