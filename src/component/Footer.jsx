import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex flex-row align-center justify-between text-center px-4 py-2 text-sm shadow-lg z-50">
      <h6 className="pt-1.5">© 2025 Riya Kaushik. All rights reserved.</h6>
      <p className="mt-1">
        <a 
          href="mailto:riyakaushik6410@email.com" 
          className="text-white no-underline hover:text-yellow-200"
        >
          Contact Me
        </a> | 
        <a 
          href="https://github.com/riya1807pro" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white no-underline hover:text-yellow-200 ml-1"
        >
          GitHub
        </a> | 
        <a 
          href="https://www.linkedin.com/in/riyakaushik-webdev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white no-underline hover:text-yellow-200 ml-1"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
