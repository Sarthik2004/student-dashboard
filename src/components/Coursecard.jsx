import React from "react";

const Coursecard = (props) => {
  return (
    <>
      <div className="bg-gray-900 text-white w-100 text-center p-18 rounded-2xl m-2.5 transform transition duration-300 hover:-translate-y-2">
        <h1 className="text-2xl font-bold mb-1">{props.title}</h1>
        <p className="font-semibold">Instructor : {props.instructor} </p>
        <p className="font-semibold">Experience : {props.experience}</p>
        <p className="font-semibold">Duration : {props.duration} </p>
        <p className="font-semibold">Fees : {props.fees}</p>
      </div>
    </>
  );
};

export default Coursecard;
