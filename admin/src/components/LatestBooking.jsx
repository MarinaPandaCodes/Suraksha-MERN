import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

const LatestBookings = ({
  bookings,
  cancelAppointment,
  completeAppointment,
  isDoctorView = false,
}) => {
  const { slotDateFormat } = useContext(AppContext);

  return (
    <div>
      <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-gray-800">Latest Bookings</h3>
      </div>

      {bookings.length > 0 ? (
        <div className="divide-y divide-gray-100">
          {bookings.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <img
                className="rounded-full w-10 h-10 object-cover border-2 border-white shadow-sm"
                src={isDoctorView ? item.userData.image : item.docData.image}
                alt={isDoctorView ? item.userData.name : item.docData.name}
              />
              <div className="flex-1 min-w-0">
                <p className="text-gray-800 font-medium truncate">
                  {isDoctorView ? item.userData.name : item.docData.name}
                </p>
                <p className="text-gray-500 text-sm">
                  {slotDateFormat(item.slotDate)}, {item.slotTime}
                </p>
              </div>

              {item.cancelled ? (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Cancelled
                </span>
              ) : item.isCompleted ? (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Completed
                </span>
              ) : (
                <div className="flex gap-2">
                  {!isDoctorView && (
                    <button
                      onClick={() => cancelAppointment(item._id)}
                      className="flex items-center justify-center w-9 h-9 bg-red-50 hover:bg-red-100 text-red-600 rounded-full transition-colors duration-200 shadow-sm hover:shadow"
                      title="Cancel Appointment"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                  {isDoctorView && !item.isCompleted && (
                    <button
                      onClick={() => completeAppointment(item._id)}
                      className="flex items-center justify-center w-9 h-9 bg-green-50 hover:bg-green-100 text-green-600 rounded-full transition-colors duration-200 shadow-sm hover:shadow"
                      title="Complete Appointment"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <p className="text-gray-500">No bookings found</p>
        </div>
      )}
    </div>
  );
};

export default LatestBookings;
