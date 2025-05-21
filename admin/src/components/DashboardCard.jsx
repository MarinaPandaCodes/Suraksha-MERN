import React from 'react';

const DashboardCard = ({ icon, value, label, color = 'bg-white' }) => (
  <div
    className={`flex items-center p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md ${color}`}
  >
    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-white shadow-sm border border-gray-100">
      <img className="w-8 h-8" src={icon} alt={label} />
    </div>
    <div className="ml-4">
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-gray-500 text-sm font-medium">{label}</p>
    </div>
  </div>
);

export default DashboardCard;
