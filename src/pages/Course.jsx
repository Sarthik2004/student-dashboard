import React from "react";
import Coursecard from "../components/Coursecard";
import { studentCourses } from "../data/Stdentcourse";

const Course = () => {
  return (
    <>
    
    <div className="bg-gray-900 text-white p-4 w-7xl shadow-md rounded-3xl text-center my-5 mx-30">
        <h1 className="text-xl font-semibold font-serif">Cources Details</h1>
      </div>
    <div className="flex flex-wrap justify-around ">
      {studentCourses.map((item) => {
        return (
          <Coursecard
            title={item.title}
            teacherImage={item.teacherImage}
            experience={item.experience}
            instructor={item.instructor}
            duration={item.duration}
            fees={item.fees}
          />
        );
      })}
    </div>
    </>
  );
};

export default Course;
