import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 py-12 overflow-x-hidden">
      {/* Heading */}
      <div className="text-center text-3xl font-semibold text-gray-800">
        <p>
          ABOUT <span className="text-primary">US</span>
        </p>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 my-10">
        <img
          className="w-full max-w-sm rounded-lg shadow-lg"
          src={assets.about_image}
          alt="About us"
        />
        <div className="flex flex-col gap-6 text-gray-700 md:w-1/2">
          <p className="leading-relaxed">
            Namaste! Welcome to <span className="font-semibold">Suraksha</span>,
            your trusted companion in managing your healthcare with ease and
            efficiency. Just like Ayurveda has been healing us for centuries, we
            bring a modern yet deeply rooted approach to simplify healthcare
            access for everyone.
          </p>
          <p className="leading-relaxed">
            At Suraksha, we combine tradition with technology, ensuring that you
            get the best healthcare solutions without any hassle. Whether it's
            scheduling doctor appointments or keeping track of medical records,
            we are here to make your health journey smooth and stress-free.
          </p>
          <h3 className="text-lg font-bold text-gray-900">Our Vision</h3>
          <p className="leading-relaxed">
            Inspired by the philosophy of "Seva Parmo Dharma" (Service is the
            highest duty), our vision is to make healthcare accessible to every
            Indian. We strive to bridge the gap between patients and doctors,
            ensuring that quality healthcare is just a click away.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center text-2xl font-semibold text-gray-800 my-8">
        <p>
          Why <span className="text-primary">Choose Us</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
        {[
          {
            title: 'Simplicity & Speed',
            desc: 'Book doctor appointments and manage health records in just a few taps.',
          },
          {
            title: 'Trusted Network',
            desc: 'Connect with experienced and verified healthcare professionals across India.',
          },
          {
            title: 'Personalized Care',
            desc: 'Tailored health recommendations and timely reminders for your well-being.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border p-8 text-center rounded-lg shadow-sm hover:bg-primary hover:text-white transition-all duration-300"
          >
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p className="mt-2 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
