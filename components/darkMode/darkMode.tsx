import React, { useState, useEffect } from "react";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize the state based on localStorage value
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []); // Run this effect once when the component mounts

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme); // Update local storage
    document.documentElement.classList.toggle("dark", !isDarkMode); // Toggle the 'dark' class
  };

  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-zinc-800 overflow-hidden rounded-2xl relative items-center justify-center">
      <div
        className={`bg-light_grey_p dark:bg-zinc-700 w-20 h-12 rounded-full p-1 flex items-center cursor-pointer transition-colors duration-300 justify-start z-50`}
        onClick={toggleDarkMode}
      >
        <div
          className={`w-8 h-8 bg-white dark:bg-gray-700 rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-10" : "translate-x-0"
          }`}
        >
          {/* Moon */}
          <div
            className={`w-8 h-8 absolute top-0 left-0 bg-dark_grey_p  dark:bg-[#1a1a1a] rounded-full flex items-center justify-center text-xs font-bold opacity-${
              isDarkMode ? "0" : "1"
            } transition-opacity duration-300`}
          >
            🌙
          </div>
          {/* Sun */}
          <div
            className={`w-8 h-8 absolute top-0 left-0 bg-dark_grey_p dark:bg-[#1a1a1a] rounded-full flex items-center justify-center text-xs font-bold opacity-${
              isDarkMode ? "1" : "0"
            } transition-opacity duration-300`}
          >
            ☀️
          </div>
        </div>
      </div>
      <div className="text-xl my-5 text-yellow_p">coming soon.</div>
    </div>
  );
};

export default DarkModeSwitch;
