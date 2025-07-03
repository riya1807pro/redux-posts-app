import React from "react";

const Navbar = ()=>{
    return(
        <>
    <div className="w-full min-h-16 p-2 bg-slate-100 flex flex-row items-center justify-between mb-4 shadow">
  <div className="mb-2 mr-7 p-1 flex flex-col justify-evenly">
    <h1 className="text-2xl font-bold text-teal-700">Logo</h1>
  </div>
  <div className="flex flex-wrap justify-evenly items-center w-full min-w-screen">
    <a 
      href="/" 
      className="text-slate-700 hover:text-teal-700 active:text-teal-900 px-3 py-1 transition-colors duration-200"
    >
      Home
    </a>
    <a 
      href="/about" 
      className="text-slate-700 hover:text-teal-700 active:text-teal-900 px-3 py-1 transition-colors duration-200"
    >
      About
    </a>
    <a 
      href="/create" 
      className="text-slate-700 hover:text-teal-700 active:text-teal-900 px-3 py-1 transition-colors duration-200"
    >
      Create
    </a>
  </div>
</div>

        </>
    )
}
export default Navbar 