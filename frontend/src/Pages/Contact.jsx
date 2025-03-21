import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="container mx-auto px-6 sm:px-12 md:px-20 lg:px-32 py-20">
      <div className="text-center text-4xl font-bold text-gray-900">
        <p>
          CONTACT <span className="text-blue-600">US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-16 mt-16">
        <img
          className="w-full max-w-md rounded-xl shadow-xl"
          src={assets.contact_image}
          alt="Contact Us"
        />

        <div className="flex flex-col gap-8 text-gray-800">
          <div>
            <h3 className="text-xl font-semibold">Our Office</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              15, Station Road <br /> Haldia, West Bengal, India - 721657
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Tel: +91 98765 43210 <br /> Email: support@suraksha.in
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Careers at Suraksha</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Explore opportunities to be a part of our growing family.
            </p>
          </div>

          <button className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all text-lg font-medium">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
