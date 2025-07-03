import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-slate-50 rounded-xl shadow-lg mt-8">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-indigo-700 mb-2">About This App</h1>
        <hr className="border-indigo-300" />
      </div>
      <div className="text-slate-800 text-lg">
        This app is built using 
        <span className="font-semibold text-indigo-600"> React, Vite, Redux, TailwindCSS & Shadcn UI</span>.
        <br />
        It demonstrates basic CRUD functionality and a modern responsive UI.
      </div>
      <div className="mt-6 flex justify-center">
        <img 
          src="https://via.placeholder.com/300x200.png?text=Sample+Screenshot" 
          alt="Sample" 
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default About;
