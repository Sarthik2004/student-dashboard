import React, { useState } from "react";

const Studentcard = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="bg-white p-6 m-6 w-80 rounded-xl shadow-md border border-gray-4x00 hover:shadow-lg transition-shadow ">
        <div className="flex justify-center mb-6">
          <img
            src={props.image}
            alt={props.name}
            className="w-12 h-12 rounded-full object-cover ring-4 ring-gray-100"
          />
        </div>
        <h3 className="text-xl font-bold tracking-wide">{props.name}</h3>
        <p className="font-semibold">Age: {props.age}</p>
        <p className="font-semibold">Course: {props.course}</p>
        <p className="font-semibold">Email: {props.email}</p>
        <p className="font-semibold">City: {props.city}</p>
        <div className="text-center mt-5">
          <button
            onClick={() => setShowDetails(true)}
            className="bg-black text-white p-2 rounded-2xl text-xs cursor-pointer"
          >
            See More Details
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white p-18 rounded-2xl w-96 text-center shadow-lg border border-gray-400">
            <img
              src={props.image}
              alt={props.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />

            <h2 className="text-2xl font-bold">{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
            <p>Email: {props.email}</p>
            <p>City: {props.city}</p>
            <p className="text-20 font-bold">About: {props.about}</p>

            <button
              onClick={() => setShowDetails(false)}
              className="mt-4 bg-black text-white px-4 py-2 rounded-xl cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Studentcard;
