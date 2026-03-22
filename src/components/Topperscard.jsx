import React from "react";

const Topperscard = (props) => {
  return (
    <div className="bg-gray-900 text-white w-70 text-center p-18 rounded-2xl m-2.5">
      <img
        src={props.image}
        alt={props.name}
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h1 className="text-2xl font-bold mb-1">{props.name}</h1>
      <p className="font-semibold">course : {props.course} </p>
      <p className="font-semibold">year : {props.year} </p>
      <p className="font-semibold">Cgpa : {props.cgpa}</p>
      <p className="font-semibold">College : {props.college}</p>
    </div>
  );
};

export default Topperscard;
