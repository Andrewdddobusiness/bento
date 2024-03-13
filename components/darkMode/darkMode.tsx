import React, { useState } from "react";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [moonOpacity, setMoonOpacity] = useState(1);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setMoonOpacity(0); // Fade out the moon
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setMoonOpacity(1); // Fade in the moon
    }
  };

  const handleTouchStart = () => {
    toggleDarkMode();
  };

  return (
    <div className="flex flex-col w-full h-full bg-white overflow-hidden rounded-2xl relative items-center justify-center">
      <div
        className={`bg-light_grey_p dark:bg-gray-800 w-20 h-12 rounded-full p-1 flex items-center cursor-pointer transition-colors duration-300 justify-start z-50
        `}
        onClick={toggleDarkMode}
        onTouchStart={handleTouchStart}
      >
        <div
          className={`w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-10" : "translate-x-0"
          } animate-switch`}
        >
          {/* Moon */}
          <div
            className={`w-8 h-8 absolute top-0 left-0 bg-dark_grey_p dark:bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold opacity-${moonOpacity} transition-opacity duration-300`}
          >
            🌙
          </div>
          {/* Sun */}
          <div
            className={`w-8 h-8 absolute top-0 left-0 bg-dark_grey_p dark:bg-dark_grey_p rounded-full flex items-center justify-center text-xs font-bold opacity-${
              1 - moonOpacity
            } transition-opacity duration-300`}
          >
            ☀️
          </div>
        </div>
      </div>
      <div className={"text-xl my-5 text-yellow_p"}>coming soon.</div>
    </div>
  );
};

export default DarkModeSwitch;
