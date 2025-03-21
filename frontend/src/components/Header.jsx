import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#577CFF] rounded-lg px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden shadow-xl">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 py-8 md:py-12 lg:py-16 text-white text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-[3.5vw] lg:text-5xl xl:text-6xl font-bold leading-[1.1] max-w-[600px]">
          Book Appointment <br className="hidden xs:block" />
          With{' '}
          <span className="text-[#FDDE59] relative inline-block before:absolute before:-inset-2 before:skew-y-2 before:bg-[#fdde5933] before:rounded-lg">
            Trusted
          </span>{' '}
          Doctors
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 text-sm sm:text-base font-light mt-2 sm:mt-4">
          <img
            className="w-24 sm:w-28 md:w-32 shrink-0"
            src={assets.group_profiles}
            alt="Group Profiles"
            loading="lazy"
          />
          <p className="max-w-[300px] sm:max-w-none opacity-90 leading-relaxed">
            Easily explore our comprehensive list of expert doctors, and book
            your visit seamlessly.
          </p>
        </div>

        <a
          href="#speciality"
          className="flex gap-2 items-center justify-center bg-white text-gray-800 rounded-full px-6 py-3 sm:px-8 sm:py-4 min-w-[180px] sm:min-w-[200px] text-sm sm:text-base font-semibold hover:scale-105 hover:shadow-md active:scale-95 transition-transform duration-200 ease-in-out group"
        >
          Book appointment
          <img
            className="w-4 sm:w-5 transition-transform group-hover:translate-x-1"
            src={assets.arrow_icon}
            alt="Arrow Icon"
          />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative mt-6 md:mt-0 min-h-[300px] sm:min-h-[400px] md:min-h-0">
        <img
          className="w-full h-full md:absolute bottom-0 object-contain object-center rounded-lg md:scale-125 lg:scale-110 xl:scale-100"
          src={assets.header_img}
          alt="Happy doctor and patient"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Header;
