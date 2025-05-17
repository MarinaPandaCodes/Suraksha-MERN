import axios from 'axios';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formdata = new FormData();
      formdata.append('name', userData.name);
      formdata.append('phone', userData.phone);
      formdata.append('address', JSON.stringify(userData.address));
      formdata.append('gender', userData.gender);
      formdata.append('dob', userData.dob);
      image && formdata.append('image', image);

      const { data } = await axios.post(
        backendUrl + '/api/user/update-profile',
        formdata,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    userData && (
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col gap-6">
          {isEdit ? (
            <label htmlFor="image" className="cursor-pointer">
              <div className="relative inline-block group">
                <img
                  src={image ? URL.createObjectURL(image) : userData.image}
                  alt="Profile"
                  className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md group-hover:opacity-80 transition-opacity"
                />
                {!image && (
                  <div className="absolute inset-0 rounded-full bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <img
                      src={assets.upload_icon}
                      alt="Upload"
                      className="w-10 h-10"
                    />
                  </div>
                )}
              </div>
              <input
                onChange={e => setImage(e.target.files[0])}
                type="file"
                id="image"
                hidden
              />
            </label>
          ) : (
            <img
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md mx-auto"
              src={userData.image}
              alt="Profile"
            />
          )}

          {isEdit ? (
            <input
              className="bg-gray-50 text-3xl font-semibold text-gray-800 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              type="text"
              value={userData.name}
              onChange={e =>
                setUserData(prev => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <h1 className="font-semibold text-3xl text-gray-800 text-center">
              {userData.name}
            </h1>
          )}

          <div className="border-t border-gray-200 my-2"></div>

          <div className="space-y-4">
            <h2 className="text-gray-500 uppercase text-sm font-medium tracking-wider">
              Contact Information
            </h2>
            <div className="grid grid-cols-[1fr_3fr] gap-y-4 text-gray-700">
              <p className="font-medium text-gray-600">Email:</p>
              <p className="text-primary">{userData.email}</p>

              <p className="font-medium text-gray-600">Phone:</p>
              {isEdit ? (
                <input
                  className="bg-gray-50 px-3 py-1 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
                  type="text"
                  value={userData.phone}
                  onChange={e =>
                    setUserData(prev => ({ ...prev, phone: e.target.value }))
                  }
                />
              ) : (
                <p className="text-primary">{userData.phone}</p>
              )}

              <p className="font-medium text-gray-600">Address:</p>
              {isEdit ? (
                <div className="space-y-2">
                  <input
                    className="w-full bg-gray-50 px-3 py-1 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
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
                    className="w-full bg-gray-50 px-3 py-1 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
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
                <p className="text-gray-600">
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-gray-500 uppercase text-sm font-medium tracking-wider">
              Basic Information
            </h2>
            <div className="grid grid-cols-[1fr_3fr] gap-y-4 text-gray-700">
              <p className="font-medium text-gray-600">Gender:</p>
              {isEdit ? (
                <select
                  className="bg-gray-50 px-3 py-1 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
                  onChange={e =>
                    setUserData(prev => ({ ...prev, gender: e.target.value }))
                  }
                  value={userData.gender}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              ) : (
                <p className="text-gray-600 capitalize">{userData.gender}</p>
              )}

              <p className="font-medium text-gray-600">Birthday:</p>
              {isEdit ? (
                <input
                  className="bg-gray-50 px-3 py-1 rounded border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
                  type="date"
                  onChange={e =>
                    setUserData(prev => ({ ...prev, dob: e.target.value }))
                  }
                  value={userData.dob}
                />
              ) : (
                <p className="text-gray-600">{userData.dob}</p>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            {isEdit ? (
              <button
                className="bg-primary text-white px-8 py-2.5 rounded-full hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg font-medium"
                onClick={updateUserProfileData}
              >
                Save Information
              </button>
            ) : (
              <button
                className="border-2 border-primary text-primary px-8 py-2.5 rounded-full hover:bg-primary hover:text-white transition-colors font-medium"
                onClick={() => setIsEdit(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default MyProfile;
