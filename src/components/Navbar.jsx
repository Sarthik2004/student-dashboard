import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white px-10 py-3 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold tracking-wide">Student Dasboard</h1>
        <ul className="flex gap-13 items-center">
          <NavLink to="/">
            <li className="hover:text-yellow-400">Home</li>
          </NavLink>
          <NavLink to="/student">
            {" "}
            <li className="hover:text-yellow-400">Students</li>
          </NavLink>
          <NavLink to="/about">
            {" "}
            <li className="hover:text-yellow-400">About</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="hover:text-yellow-400">Contact</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
