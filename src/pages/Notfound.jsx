import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40 bg-gray-100 px-4 text-center">
      
      <h1 className="text-9xl font-extrabold text-red-500 animate-bounce">404</h1>
      
      <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>
      
      <p className="mt-3 text-gray-600 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
      
    </div>
  );
};

export default NotFound;