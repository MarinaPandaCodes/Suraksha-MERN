import { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';

const MyProfile = () => {
  const { userData, setUserData } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  return (
    userData && (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-start gap-6">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
            src={userData.image}
            alt="Profile"
          />
          <div className="flex-1">
            {isEdit ? (
              <input
                className="w-full bg-gray-50 text-3xl font-semibold text-gray-800 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                value={userData.name}
                onChange={e =>
                  setUserData(prev => ({ ...prev, name: e.target.value }))
                }
              />
            ) : (
              <h1 className="font-semibold text-3xl text-gray-800">
                {userData.name}
              </h1>
            )}
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-4 pb-2 border-b border-gray-100">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-4 mt-3 text-gray-700">
              <div className="font-medium text-gray-600">Email:</div>
              <div className="text-blue-600 hover:text-blue-800">
                {userData.email}
              </div>

              <div className="font-medium text-gray-600">Phone:</div>
              {isEdit ? (
                <input
                  className="w-full max-w-xs bg-gray-50 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={userData.phone}
                  onChange={e =>
                    setUserData(prev => ({ ...prev, phone: e.target.value }))
                  }
                />
              ) : (
                <div className="text-blue-500">{userData.phone}</div>
              )}

              <div className="font-medium text-gray-600">Address:</div>
              {isEdit ? (
                <div className="space-y-2">
                  <input
                    className="w-full bg-gray-50 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e =>
                      setUserData(prev => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                    value={userData.address.line1}
                    type="text"
                  />
                  <input
                    className="w-full bg-gray-50 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={e =>
                      setUserData(prev => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                    value={userData.address.line2}
                    type="text"
                  />
                </div>
              ) : (
                <div className="text-gray-600">
                  <p>{userData.address.line1}</p>
                  <p>{userData.address.line2}</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-4 pb-2 border-b border-gray-100">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-4 mt-3 text-gray-700">
              <div className="font-medium text-gray-600">Gender:</div>
              {isEdit ? (
                <select
                  className="w-full max-w-xs bg-gray-50 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={e =>
                    setUserData(prev => ({ ...prev, gender: e.target.value }))
                  }
                  value={userData.gender}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              ) : (
                <div className="text-gray-600">{userData.gender}</div>
              )}

              <div className="font-medium text-gray-600">Birthday:</div>
              {isEdit ? (
                <input
                  className="w-full max-w-xs bg-gray-50 p-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="date"
                  onChange={e =>
                    setUserData(prev => ({ ...prev, dob: e.target.value }))
                  }
                  value={userData.dob}
                />
              ) : (
                <div className="text-gray-600">{userData.dob}</div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          {isEdit ? (
            <button
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => setIsEdit(false)}
            >
              Save Changes
            </button>
          ) : (
            <button
              className="px-6 py-2 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => setIsEdit(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default MyProfile;
