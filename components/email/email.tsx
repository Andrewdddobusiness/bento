import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactLight from "@/public/contact.png"; // Image for light mode
import ContactDark from "@/public/contact-dark.png"; // Image for dark mode

const Email = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode(); // Initial check on component mount

    const observer = new MutationObserver(() => checkDarkMode());
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const emailAddress = "andrewdddobusiness@gmail.com";

  const handleSendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    handleSendEmail(e as any);
  };

  return (
    <div
      className="relative h-full w-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden rounded"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Want to reach out?
        </h2>
        <button
          className="bg-white dark:bg-gray-700 hover:bg-red_p text-dark_grey_p dark:text-white text-sm hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
          onClick={handleSendEmail}
          onTouchStart={handleTouchStart}
        >
          Contact Me
        </button>
      </div>
      <div className="absolute inset-0">
        <Image
          src={isDarkMode ? ContactDark : ContactLight}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Email;
