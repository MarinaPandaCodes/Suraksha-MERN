import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { assets } from '../../assets/assets.js';
import { AppContext } from '../../context/AppContext';
import DashboardCard from '../../Components/DashboardCard';
import LatestBookings from '../../components/LatestBooking.jsx';


const DoctorDashboard = () => {

  const {cancelAppointments,dToken,dashData,setDashData,getDashData,loading,} = useContext(DoctorContext)
  const { currency } = useContext(AppContext);
 

   useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);




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
        icon: assets.earning_icon,
        value: currency + dashData?.earnings ,
        label: 'Earnings',
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


  

  return dashData &&  (
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
          isDoctorView={true}
        />
      </div>
    </div>
      
    )
}

export default DoctorDashboard