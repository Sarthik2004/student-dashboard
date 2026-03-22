import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white px-10 py-3 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-white">🎓 Student Dasboard</h1>

        <ul className="flex gap-13 items-center">
          <NavLink to="/">
            <li className="hover:text-yellow-400 font-medium px-3 py-2 rounded-lg transition-colors">
              Dashboard
            </li>
          </NavLink>
          <NavLink to="/student">
            <li className="hover:text-yellow-400 font-medium px-3 py-2 rounded-lg transition-colors">
              Students
            </li>
          </NavLink>
          <NavLink to="/course">
            <li className="hover:text-yellow-400 font-medium px-3 py-2 rounded-lg transition-colors">
              Course
            </li>
          </NavLink>
          <NavLink to="/about">
            <li className="hover:text-yellow-400 font-medium px-3 py-2 rounded-lg transition-colors">
              About
            </li>
          </NavLink>
        </ul>
        <input
          type="text"
          placeholder="Search here"
          className="bg-white text-black w-100 p-1 rounded-xl  pl-12 pr-4 py-1.5"
        />
      </nav>
    </>
  );
};

export default Navbar;
