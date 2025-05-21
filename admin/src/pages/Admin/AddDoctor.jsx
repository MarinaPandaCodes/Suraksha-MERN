import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 Year');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('General physician');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async event => {
    event.preventDefault();
    try {
      if (!docImg) {
        return toast.error('Image Not Selected');
      }

      const formData = new FormData();
      formData.append('image', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', Number(fees));
      formData.append('about', about);
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {
        headers: { aToken },
      });

      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName('');
        setPassword('');
        setEmail('');
        setAddress1('');
        setAddress2('');
        setDegree('');
        setAbout('');
        setFees('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong while adding the doctor');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Doctor</h2>

      <form
        onSubmit={onSubmitHandler}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
      >
        {/* Image Upload Section */}
        <div className="flex flex-col items-center mb-8">
          <label htmlFor="doc-img" className="cursor-pointer group">
            <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100 group-hover:bg-gray-200 transition-colors">
              {docImg ? (
                <img
                  src={URL.createObjectURL(docImg)}
                  alt="Doctor preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
              )}
            </div>
            <p className="mt-3 text-center text-gray-600 font-medium">
              Click to upload doctor photo
            </p>
          </label>
          <input
            onChange={e => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            className="hidden"
            accept="image/*"
          />
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">Doctor Name</label>
              <input
                onChange={e => setName(e.target.value)}
                value={name}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="text"
                placeholder="Enter doctor name"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="email"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="password"
                placeholder="Create password"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">Experience</label>
              <select
                onChange={e => setExperience(e.target.value)}
                value={experience}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={`${i + 1} Year`}>
                    {i + 1} Year{i !== 0 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">Consultation Fees</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  ₹
                </span>
                <input
                  onChange={e => setFees(e.target.value)}
                  value={fees}
                  className="w-full pl-8 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  type="number"
                  placeholder="Enter consultation fees"
                  required
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">Speciality</label>
              <select
                onChange={e => setSpeciality(e.target.value)}
                value={speciality}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              >
                <option value="General physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatrician</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">Education</label>
              <input
                onChange={e => setDegree(e.target.value)}
                value={degree}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="text"
                placeholder="Enter degrees and qualifications"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-gray-700 font-medium">Address</label>
              <input
                onChange={e => setAddress1(e.target.value)}
                value={address1}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                type="text"
                placeholder="Address line 1"
                required
              />
              <input
                onChange={e => setAddress2(e.target.value)}
                value={address2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all mt-2"
                type="text"
                placeholder="Address line 2 (optional)"
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">About Doctor</label>
          <textarea
            onChange={e => setAbout(e.target.value)}
            value={about}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Write about the doctor's expertise, achievements, etc."
            rows={5}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
