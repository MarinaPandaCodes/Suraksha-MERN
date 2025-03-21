import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../assets/assets';

const SpeciallityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800 mx-4 md:mx-12"
    >
      <h1 className="text-3xl font-medium">Explore by Specialization</h1>
      <p className="w-1/2 sm:w-1/3 text-sm text-center">
        Browse our curated selection of experienced doctors and book your
        consultation effortlessly.
      </p>
      <div className="flex flex-wrap justify-center overflow-auto gap-8 pt-5 w-full max-w-full">
        {specialityData.map((item, index) => (
          <div key={index} className="flex sm:flex-col">
            <Link
              onClick={() => scrollTo(0, 0)}
              className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
              to={`/doctors/${item.speciality}`}
            >
              <img
                className="w-16 sm:w-24 mb-2"
                src={item.image}
                alt={item.speciality}
              />
              <p>{item.speciality}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeciallityMenu;
