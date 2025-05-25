import React, { useEffect, useContext } from 'react';
import { createContext, useState } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const DoctorAppointments = () => {
  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } =
    useContext(DoctorContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Appointments</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Row */}
        <div className="hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] gap-4 py-4 px-6 bg-gray-50 border-b border-gray-200 font-medium text-gray-600 uppercase tracking-wider text-xs">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        {/* Data Rows */}
        {appointments.length > 0 ? (
          appointments.reverse().map((item, index) => (
            <div
              className="grid grid-cols-2 sm:grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] gap-4 items-center py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150"
              key={index}
            >
              {/* Index */}
              <div className="max-sm:hidden sm:block text-gray-500 font-medium">{index + 1}</div>

              {/* Patient */}
              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <img
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                  src={item.userData.image}
                  alt="Patient"
                />
                <p className="font-medium text-gray-800">{item.userData.name}</p>
              </div>

              {/* Payment */}
              <div className="text-gray-600">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.payment ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {item.payment ? 'Online' : 'Cash'}
                </span>
              </div>

              {/* Age - hidden on mobile */}
              <div className="max-sm:hidden sm:block text-gray-600">
                {calculateAge(item.userData.dob)}
              </div>

              {/* Date & Time */}
              <div className="text-gray-700">
                {slotDateFormat(item.slotDate)},{' '}
                <span className="text-gray-600">{item.slotTime}</span>
              </div>

              {/* Fees */}
              <div className="font-medium text-gray-800">
                {currency}
                {item.amount}
              </div>

              {/* Actions */}
              <div className="flex justify-end sm:block">
                {item.cancelled ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                  </span>
                ) : (
                  <div className="flex gap-2">
                    <button
                      className="flex items-center justify-center w-9 h-9 bg-red-50 hover:bg-red-100 text-red-600 rounded-full transition-colors duration-200 shadow-sm hover:shadow"
                      title="Cancel Appointment"
                      onClick={() => cancelAppointment(item._id)}
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
                    <button
                      className="flex items-center justify-center w-9 h-9 bg-green-50 hover:bg-green-100 text-green-600 rounded-full transition-colors duration-200 shadow-sm hover:shadow"
                      title="Complete Appointment"
                      onClick={() => completeAppointment(item._id)}
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
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="py-12 text-center">
            <p className="text-gray-500">No appointments found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointments;
