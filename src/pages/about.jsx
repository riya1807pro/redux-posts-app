import { Loader } from '@/component/loading';
import React, { useEffect, useState } from 'react';

export default function About() {
   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="w-full max-w-sm p-10 rounded-lg animate-pulse h-80">
            <Loader />
          </div>
        </div>
      );
    }
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                      animate-gradient-x opacity-30 blur-3xl" ></div>

      <div className="relative z-10 max-w-2xl p-8 rounded-2xl shadow-2xl bg-black/60 mt-30 backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-4 text-center">About This Project 🚀</h1>
        <p className="mb-4 text-lg text-center">
          This is a simple CRUD web app built with React, Redux Toolkit, and Tailwind CSS. 
          You can create, edit, delete, and mark posts as favorite. It also supports dark mode 
          and is fully responsive.
        </p>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">✅ Features:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Create, Edit, Delete posts</li>
            <li>Mark posts as favorite</li>
            <li>View favorite posts separately</li>
            <li>Dark & light theme</li>
            <li>Responsive on mobile and desktop</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">🚀 Technologies used:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>React</li>
            <li>Redux Toolkit</li>
            <li>Tailwind CSS</li>
            <li>Shadcn UI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
