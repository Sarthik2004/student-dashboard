import React from "react";

const About = () => {
  return <>
  
  <div className="bg-gray-900 max-h-100">
    <div className=" bg-gray-900 flex flex-col items-center justify-center px-4 py-10 h-167.75">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-100 mb-6 text-center">
          🎓 About Student Dashboard
        </h1>
        <p className="text-gray-100 text-lg mb-6 leading-relaxed text-center">
          Welcome to the <span className="font-semibold text-blue-600">Student Dashboard</span> — 
          a modern and user-friendly platform designed to simplify student management 
          and enhance productivity. This dashboard allows users to easily explore, 
          manage, and track student information in an organized and efficient way.
        </p>

  <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          <div className="bg-gray-50 p-5 rounded-xl transform transition duration-300 hover:-translate-y-2">
            <h2 className="font-semibold text-lg mb-2 text-gray-800">Smart Search</h2>
            <p className="text-gray-600 text-sm">
              Quickly find students using the search functionality and access their 
              details without any hassle.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl transform transition duration-300 hover:-translate-y-2">
            <h2 className="font-semibold text-lg mb-2 text-gray-800">Course Tracking</h2>
            <p className="text-gray-600 text-sm">
              Monitor student progress, enrolled courses, and performance metrics 
              in a clean dashboard view.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl transform transition duration-300 hover:-translate-y-2">
            <h2 className="font-semibold text-lg mb-2 text-gray-800">Fast & Responsive</h2>
            <p className="text-gray-600 text-sm">
              Built with <span className="font-medium">React.js</span> and styled using 
              <span className="font-medium"> Tailwind CSS</span> for smooth and responsive performance.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl transform transition duration-300 hover:-translate-y-2">
            <h2 className="font-semibold text-lg mb-2 text-gray-800">Easy to Use</h2>
            <p className="text-gray-600 text-sm">
              Simple interface designed for students and administrators to manage 
              information without complexity.
            </p>
          </div>
        </div>

       
      </div>
      </div>
      </div>
  </>
};

export default About;
