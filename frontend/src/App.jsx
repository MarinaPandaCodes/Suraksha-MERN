import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Appointment from './Pages/Appointment';
import Contact from './Pages/Contact';
import Doctors from './Pages/Doctors';
import Home from './Pages/Home';
import Login from './Pages/Login';
import MyAppointments from './Pages/MyAppointments';
import MyProfile from './Pages/MyProfile';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
    <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
