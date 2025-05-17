import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { backendUrl, token } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);
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

  const slotDateFormat = slotDate => {
    const dateArray = slotDate.split('_');
    return (
      dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2]
    );
  };

  const navigate = useNavigate();

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/appointments', {
        headers: { token }, // Pass the auth token in headers
      });

      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-semibold text-zinc-700 mb-6 pb-3 border-b border-zinc-200">
        My Appointments
      </h2>

      <div className="space-y-6">
        {appointments.map((item, index) => (
          <div
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-zinc-100"
            key={index}
          >
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0">
                <img
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover bg-indigo-50 border border-zinc-200"
                  src={item.docData.image}
                  alt={item.docData.name}
                />
              </div>

              <div className="flex-grow">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-800">
                    {item.docData.name}
                  </h3>
                  <p className="text-sm text-zinc-600">
                    {item.docData.speciality}
                  </p>

                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-zinc-700">
                      Address:
                    </h4>
                    <p className="text-sm text-zinc-600">
                      {item.docData.address.line1}
                    </p>
                    <p className="text-sm text-zinc-600">
                      {item.docData.address.line2}
                    </p>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-medium text-neutral-700">
                      Date & Time:
                    </p>
                    <p className="text-sm text-zinc-600">
                      {slotDateFormat(item.slotDate)} | {item.slotTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col gap-3 sm:w-48">
                <button className="px-4 py-2 text-sm font-medium text-stone-500 border border-stone-300 rounded-md hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                  Pay Online
                </button>
                <button className="px-4 py-2 text-sm font-medium text-stone-500 border border-stone-300 rounded-md hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
                  Cancel Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
