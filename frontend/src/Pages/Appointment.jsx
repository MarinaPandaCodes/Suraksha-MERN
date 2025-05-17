import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
import { AppContext } from '../context/AppContext';

const Appoinment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();

  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } =
    useContext(AppContext);

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  // Set selected doctor's info
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  // Generate 7 days of 30-min time slots starting from today
  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        // Display time in 12-hour format with AM/PM
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });

        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        const slotDate = day + '_' + month + '_' + year;
        const slotTime = formattedTime;

        const isSlotAvailable =
          docInfo?.slots_booked[slotDate] &&
          docInfo?.slots_booked[slotDate].includes(slotTime)
            ? false
            : true;

        if (isSlotAvailable) {
          // Any slot to array
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev => [...prev, timeSlots]);
    }
  };

  // Book an appointment for selected doctor and slot
  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book Appointment');
      return navigate('/login');
    }

    if (!docInfo.available) {
      toast.error('Doctor not available');
      return;
    }

    try {
      const date = docSlots[slotIndex][0].datetime;
      let slotDate = `${date.getDate()}_${
        date.getMonth() + 1
      }_${date.getFullYear()}`;

      const { data } = await axios.post(
        backendUrl + '/api/user/book-appointment',
        { docId, slotDate, slotTime },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getDoctorsData();
        navigate('/my-appointments');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Doctor Details */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Updated Image Container */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="relative pb-[125%] rounded-xl shadow-md overflow-hidden bg-gray-100">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={docInfo.image}
                alt={docInfo.name}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src =
                    assets.default_doctor_image ||
                    'https://via.placeholder.com/400x500';
                }}
              />
            </div>
          </div>

          <div className="lg:w-2/3 bg-white rounded-xl shadow-md p-6 -mt-16 lg:mt-0 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  {docInfo.name}
                  <img
                    className="w-5 h-5"
                    src={assets.verified_icon}
                    alt="Verified"
                  />
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-gray-600">
                    {docInfo.degree} - {docInfo.speciality}
                  </p>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full">
                    {docInfo.experience} years experience
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <img src={assets.info_icon} className="w-4 h-4" alt="About" />
                About
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {docInfo.about}
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700 font-medium">
                Appointment fee:{' '}
                <span className="text-blue-600 font-semibold">
                  {currencySymbol}
                  {docInfo.fees}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Booking slots */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Available Time Slots
          </h2>

          <div className="mb-8">
            <h3 className="text-md font-medium text-gray-700 mb-4">
              Select Date
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {docSlots.length &&
                docSlots.map((item, index) => (
                  <div
                    onClick={() => setSlotIndex(index)}
                    className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl cursor-pointer transition-all ${
                      slotIndex === index
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'border border-gray-200 hover:border-blue-300'
                    }`}
                    key={index}
                  >
                    <p className="text-sm font-medium">
                      {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                    </p>
                    <p className="text-lg font-semibold">
                      {item[0] && item[0].datetime.getDate()}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-md font-medium text-gray-700 mb-4">
              Select Time
            </h3>
            <div className="flex flex-wrap gap-3">
              {docSlots.length &&
                docSlots[slotIndex].map((item, index) => (
                  <button
                    onClick={() => setSlotTime(item.time)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      item.time === slotTime
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    key={index}
                  >
                    {item.time.toLowerCase()}
                  </button>
                ))}
            </div>
          </div>

          <button
            onClick={bookAppointment}
            disabled={!slotTime}
            className={`w-full sm:w-auto px-8 py-3 rounded-lg text-white font-medium shadow-md transition-all ${
              slotTime
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Book Appointment
          </button>
        </div>

        {/* Related doctors list */}
        <div className="mt-12">
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appoinment;
