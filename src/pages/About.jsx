import React from "react";

const About = () => {
  return <>
    <div className=" bg-gray-200 flex flex-col items-center justify-center px-4 py-10 m-20">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Student Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Welcome to our Student Dashboard! This platform allows you to view and search
          through the list of students effortlessly. You can find student details, search
          for specific students, and explore their profiles with ease.
        </p>
        <p className="text-gray-600 mb-6">
          This dashboard is built using <span className="font-semibold">React.js</span> and
          styled with <span className="font-semibold">TailwindCSS</span> for a modern and
          responsive design. The goal is to make student management simple and efficient.
        </p>
        <p className="text-gray-600">
          We hope this dashboard helps you organize and access student information quickly
          and effectively. Enjoy exploring the features and improving your workflow!
        </p>
      </div>
      </div>
  </>
};

export default About;
