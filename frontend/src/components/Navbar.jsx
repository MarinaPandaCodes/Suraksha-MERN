import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-200 px-6 md:px-12 shadow-lg bg-white rounded-xl">
      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="Suraksha Logo"
        className="w-40 cursor-pointer"
      />
      <ul className="hidden md:flex items-center gap-8 font-semibold">
        <li className="py-1 group">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative pb-1 ${
                isActive
                  ? 'text-[#5F6FFF]'
                  : 'text-gray-700 hover:text-[#5F6FFF]'
              } transition-colors duration-300`
            }
          >
            HOME
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5F6FFF] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 [&.active]:scale-x-100" />
          </NavLink>
        </li>
        <li className="py-1 group">
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              `relative pb-1 ${
                isActive
                  ? 'text-[#5F6FFF]'
                  : 'text-gray-700 hover:text-[#5F6FFF]'
              } transition-colors duration-300`
            }
          >
            ALL DOCTORS
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5F6FFF] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 [&.active]:scale-x-100" />
          </NavLink>
        </li>
        <li className="py-1 group">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative pb-1 ${
                isActive
                  ? 'text-[#5F6FFF]'
                  : 'text-gray-700 hover:text-[#5F6FFF]'
              } transition-colors duration-300`
            }
          >
            ABOUT
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5F6FFF] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 [&.active]:scale-x-100" />
          </NavLink>
        </li>
        <li className="py-1 group">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative pb-1 ${
                isActive
                  ? 'text-[#5F6FFF]'
                  : 'text-gray-700 hover:text-[#5F6FFF]'
              } transition-colors duration-300`
            }
          >
            CONTACT
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5F6FFF] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 [&.active]:scale-x-100" />
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-6">
        {token ? (
          <div className="flex items-center gap-3 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt="profile pic"
              className="w-10 h-10 rounded-full border border-gray-300 shadow-sm hover:border-[#5F6FFF] transition-colors duration-300"
            />
            <img
              src={assets.dropdown_icon}
              alt="dropdown arrow"
              className="w-3 transition-transform duration-300 group-hover:rotate-180"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="min-w-48 bg-white shadow-xl rounded-lg flex flex-col gap-3 p-4 border border-gray-200">
                <p
                  onClick={() => navigate('my-profile')}
                  className="hover:text-[#5F6FFF] cursor-pointer transition-colors duration-300"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate('my-appointments')}
                  className="hover:text-[#5F6FFF] cursor-pointer transition-colors duration-300"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-[#5F6FFF] cursor-pointer transition-colors duration-300"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-[#5F6FFF] text-white px-6 py-2 rounded-full font-semibold hidden md:block shadow-md hover:bg-[#4e5edf] transition-colors duration-300"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        {/*-----------Mobile Menu ----------- */}
        <div
          className={` ${
            showMenu ? 'fixed w-full' : 'h-0 w-0'
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className={'px-4 py-2 rounded inline-block'}>HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className={'px-4 py-2 rounded inline-block'}>ALL DOCTORS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className={'px-4 py-2 rounded inline-block'}>ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className={'px-4 py-2 rounded inline-block'}>CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
