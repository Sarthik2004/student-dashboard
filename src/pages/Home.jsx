import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-gray-900 text-white p-4 w-7xl shadow-md rounded-3xl text-center my-5 mx-30">
        <h1 className="text-xl font-semibold">Welcome to Student Dashboard</h1>
      </div>

      <div className="flex justify-around mx-4 shadow-md border border-gray-500 p-5 rounded-2xl bg-gray-900">
        <div className="bg-white p-5 border border-gray-200 rounded-xl shadow hover:shadow-lg transition hover:animate-bounce">
          <h3 className="text-3xl font-bold text-blue-600 ">120</h3>
          <p className="text-gray-500">Students</p>
        </div>

        <div className="bg-white p-6 border border-gray-200 rounded-xl shadow hover:shadow-lg transition hover:animate-bounce">
          <h3 className="text-3xl font-bold text-green-600">5</h3>
          <p className="text-gray-500">Courses</p>
        </div>

        <div className="bg-white p-8 border border-gray-200 rounded-xl shadow hover:shadow-lg transition hover:animate-bounce">
          <h3 className="text-3xl font-bold text-purple-600">10</h3>
          <p className="text-gray-500">Cities</p>
        </div>

        <div className="bg-white p-7.5 border border-gray-200 rounded-xl shadow hover:shadow-lg transition hover:animate-bounce">
          <h3 className="text-3xl font-bold text-red-500">95</h3>
          <p className="text-gray-500">Active</p>
        </div>
      </div>

      <div className="mt-8 bg-gray-900 text-white p-6 rounded-xl shadow mx-100 border border-gray-400">
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
    </>
  );
};

export default Home;
