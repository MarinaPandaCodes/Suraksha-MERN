import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { assets } from '../../assets/assets.js';
import DashboardCard from '../../Components/DashboardCard';
import LatestBookings from '../../components/LatestBooking.jsx';

const Dashboard = () => {
  const { cancelAppointments, aToken, dashData, getDashboardData, loading } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getDashboardData();
    }
  }, [aToken]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!dashData) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 text-lg">No data available</p>
      </div>
    );
  }

  const cards = [
    {
      icon: assets.doctor_icon,
      value: dashData?.doctors,
      label: 'Doctors',
      color: 'bg-blue-50',
    },
    {
      icon: assets.appointments_icon,
      value: dashData?.appointments,
      label: 'Appointments',
      color: 'bg-purple-50',
    },
    {
      icon: assets.patients_icon,
      value: dashData?.patients,
      label: 'Patients',
      color: 'bg-green-50',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {cards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <LatestBookings
          bookings={dashData.latestAppointments}
          cancelAppointment={cancelAppointments}
          isDoctorView={false}
        />
      </div>
    </div>
  );
};

export default Dashboard;
