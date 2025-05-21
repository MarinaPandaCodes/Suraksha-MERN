import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);

  // Month abbreviations for date formatting
  const months = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Format date from "DD_MM_YYYY" to "DD Mon YYYY"
  const slotDateFormat = slotDate => {
    const dateArray = slotDate.split('_');
    return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`;
  };

  // Load payment status from localStorage when appointments are fetched
  useEffect(() => {
    if (appointments.length > 0) {
      const storedPayments = localStorage.getItem('appointmentPayments');
      if (storedPayments) {
        const paymentStatus = JSON.parse(storedPayments);
        setAppointments(prev =>
          prev.map(app => ({
            ...app,
            paymentDone: paymentStatus[app._id] || false,
          }))
        );
      }
    }
  }, [appointments.length]);

  // Cancel appointment
  const cancelAppointment = async appointmentId => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/cancel-appointment`,
        { appointmentId },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        setAppointments(prev =>
          prev.map(app => (app._id === appointmentId ? { ...app, cancelled: true } : app))
        );
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Handle pay online - stores in localStorage
  const handlePayOnline = appointmentId => {
    // Update localStorage
    const storedPayments = localStorage.getItem('appointmentPayments');
    const paymentStatus = storedPayments ? JSON.parse(storedPayments) : {};
    paymentStatus[appointmentId] = true;
    localStorage.setItem('appointmentPayments', JSON.stringify(paymentStatus));

    // Update state
    setAppointments(prev =>
      prev.map(app => (app._id === appointmentId ? { ...app, paymentDone: true } : app))
    );
    toast.success('Payment status updated');
  };

  // Fetch appointments
  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
        headers: { token },
      });

      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) getUserAppointments();
  }, [token]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-zinc-800 mb-8 pb-4 border-b border-zinc-100">
        My Appointments
      </h2>

      {appointments.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <p className="text-zinc-600">You don't have any appointments yet.</p>
        </div>
      ) : (
        <div className="space-y-5">
          {appointments.map((item, index) => (
            <div
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-zinc-100"
              key={index}
            >
              <div className="p-6 flex flex-col sm:flex-row gap-6">
                {/* Doctor Image */}
                <div className="flex-shrink-0">
                  <img
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover bg-indigo-50 border border-zinc-200"
                    src={item.docData.image}
                    alt={item.docData.name}
                  />
                </div>

                {/* Appointment Info */}
                <div className="flex-grow">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-800">{item.docData.name}</h3>
                      <p className="text-sm text-zinc-500 font-medium">{item.docData.speciality}</p>
                    </div>

                    <div className="mt-2 space-y-1">
                      <h4 className="text-sm font-semibold text-zinc-700">Address</h4>
                      <p className="text-sm text-zinc-600">{item.docData.address.line1}</p>
                      <p className="text-sm text-zinc-600">{item.docData.address.line2}</p>
                    </div>

                    <div className="mt-2">
                      <p className="text-sm font-semibold text-zinc-700">Date & Time</p>
                      <p className="text-sm text-zinc-600">
                        {slotDateFormat(item.slotDate)} | {item.slotTime}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex-shrink-0 flex flex-col gap-3 sm:w-48">
                  {item.paymentDone ? (
                    <span className="px-4 py-2.5 text-sm font-medium rounded-lg bg-green-100 text-green-700 text-center">
                      Payment Done
                    </span>
                  ) : item.cancelled ? (
                    <span className="px-4 py-2.5 text-sm font-medium rounded-lg bg-zinc-100 text-zinc-500 text-center">
                      Appointment Cancelled
                    </span>
                  ) : (
                    <>
                      <button
                        className="px-4 py-2.5 text-sm font-medium rounded-lg bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 shadow-sm"
                        onClick={() => handlePayOnline(item._id)}
                      >
                        Pay Online
                      </button>
                      <button
                        className="px-4 py-2.5 text-sm font-medium rounded-lg bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 shadow-sm"
                        onClick={() => cancelAppointment(item._id)}
                      >
                        Cancel Appointment
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
