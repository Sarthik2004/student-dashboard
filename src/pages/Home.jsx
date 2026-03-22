import React from "react";
import Topperscard from "../components/Topperscard";
import { Toppers } from "../data/Toppersstudent";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-gray-900 text-white p-4 w-7xl shadow-md rounded-3xl text-center my-5 mx-30">
        <h1 className="text-xl font-semibold font-serif">Welcome to Student Dashboard</h1>
      </div>

      <div className="flex justify-around mx-4 shadow-md border border-gray-500 p-5 rounded-2xl bg-gray-900">
        <div className="bg-white p-5 border border-gray-200 rounded-xl shadow transform transition duration-300 hover:scale-105">
          <h3 className="text-3xl font-bold text-blue-600 ">120</h3>
          <p className="text-gray-500">Students</p>
        </div>

        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow transform transition duration-300 hover:scale-105">
          <h3 className="text-3xl font-bold text-green-600">5</h3>
          <p className="text-gray-500">Courses</p>
        </div>

        <div className="bg-white p-8 border border-gray-200 rounded-xl shadow transform transition duration-300 hover:scale-105">
          <h3 className="text-3xl font-bold text-purple-600">10</h3>
          <p className="text-gray-500">Cities</p>
        </div>

        <div className="bg-white p-7.5 border border-gray-200 rounded-xl shadow transform transition duration-300 hover:scale-105">
          <h3 className="text-3xl font-bold text-red-500">95</h3>
          <p className="text-gray-500">Active</p>
        </div>
      </div>

      <div>
        <h1 className="text-center text-2xl font-bold p-4 bg-gray-900 text-white mt-2.5 mx-3 rounded-2xl font-serif">
          Toppers
        </h1>
        <div className="flex justify-between flex-wrap">
          {" "}
          {Toppers.map((item) => {
            return (
              <Topperscard
                name={item.name}
                course={item.course}
                year={item.year}
                cgpa={item.cgpa}
                image={item.image}
                college={item.college}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-4 bg-gray-900 text-white p-6 rounded-xl shadow mx-100 border border-gray-400">
        <h3 className="text-lg font-semibold mb-4"> Students per Course </h3>
        <div className="flex items-end justify-around h-52">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 w-12 h-40 rounded-t-lg"></div>
            <p className="mt-2">BCA</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-orange-500 w-12 h-32 rounded-t-lg"></div>
            <p className="mt-2">MCA</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 w-12 h-24 rounded-t-lg"></div>
            <p className="mt-2">BBA</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 h-50 mt-5 rounded text-center text-white p-8">
        <h1 className="text-3xl font-bold font-serif mb-10">
          Know More About Dasboard
        </h1>
        <Link
          to="/about"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
          Know More
        </Link>
      </div>
    </>
  );
};

export default Home;
