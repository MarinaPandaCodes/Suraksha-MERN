import React, { useContext, useEffect, useState } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfiledata, backendUrl } =
    useContext(DoctorContext);
  const { currency } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const updateProfile = async () => {
    try {
      const updateData = {
        fees: profileData.fees,
        available: profileData.available,
        address: profileData.address,
      };
      const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, {
        headers: { dToken },
      });
      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfiledata();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (dToken) {
      getProfiledata();
    }
  }, [dToken]);

  return (
    profileData && (
      <div className="p-5">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Doctor Image */}
          <div className="w-full md:w-64 flex-shrink-0">
            <img
              className="w-full h-64 md:h-auto object-cover rounded-lg shadow-md border border-gray-200"
              src={profileData.image}
              alt="Doctor profile"
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 border border-gray-200 p-6 bg-white rounded-lg shadow-sm">
            {/* Name and Title */}
            <div className="mb-4">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 flex items-center gap-2">
                {profileData.name}
              </h1>
              <div className="flex items-center gap-2 mt-2 text-gray-600">
                <p className="text-sm md:text-base">
                  {profileData.degree} - {profileData.speciality}
                </p>
                <span className="bg-gray-100 text-gray-800 text-xs md:text-sm rounded-full py-1 px-3">
                  {profileData.experience} years experience
                </span>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-800 mb-2">About</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {profileData.about}
              </p>
            </div>

            {/* Appointment Fee */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Appointment fee:</label>
              {isEdit ? (
                <input
                  type="number"
                  className="w-full max-w-xs border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={e => setProfileData(prev => ({ ...prev, fees: e.target.value }))}
                  value={profileData.fees}
                />
              ) : (
                <p className="text-gray-800 font-semibold">
                  {currency} {profileData.fees}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Address:</label>
              {isEdit ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e =>
                      setProfileData(prev => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                    value={profileData.address.line1}
                  />
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e =>
                      setProfileData(prev => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                    value={profileData.address.line2}
                  />
                </div>
              ) : (
                <p className="text-gray-600">
                  {profileData.address.line1}
                  <br />
                  {profileData.address.line2}
                </p>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  onChange={() =>
                    isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))
                  }
                  checked={profileData.available}
                  disabled={!isEdit}
                />
                <span className="ml-2 text-gray-700">Available for appointments</span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {isEdit ? (
                <button
                  onClick={updateProfile}
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="px-6 py-2 bg-white border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
