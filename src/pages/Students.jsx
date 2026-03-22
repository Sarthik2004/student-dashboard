import React from "react";
import Studentcard from "../components/Studentcard";
import studentdata from "../data/Studentdata";

const Students = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center bg-gray-900">
        {studentdata.map((item) => {
          return (
            <Studentcard
              name={item.name}
              age={item.age}
              course={item.course}
              email={item.email}
              city={item.city}
              image={item.image}
              about={item.about}
            />
          );
        })}
      </div>
    </>
  );
};

export default Students;
