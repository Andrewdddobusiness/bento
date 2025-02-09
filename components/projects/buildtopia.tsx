import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Buildtopia = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Set isMobile state
  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    setIsMobile(Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)));
  }, []);

  // Observe changes to dark mode
  useEffect(() => {
    // Function to check if dark mode is active
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    // Run initially to set the initial state
    checkDarkMode();

    // Use a MutationObserver to watch for changes in the class list of the <html> element
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []); // Empty dependency array to ensure this effect runs once on component mount

  const handleInteraction = () => {
    window.location.href = "https://www.buildtopia.website";
  };

  return (
    <div
      className="h-full w-full flex items-center justify-center bg-light_grey_p dark:bg-[#1a1a1a]"
      style={{
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <div
        className="h-full w/full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110 rounded-full"
        onClick={!isMobile ? handleInteraction : undefined}
        onTouchStart={isMobile ? handleInteraction : undefined}
      >
        <Link href="https://www.buildtopia.website" passHref>
          <Image
            src={isDarkMode ? "/buildtopia-dark.png" : "/buildtopia-1.png"}
            alt="Buildtopia"
            width={650}
            height={450}
            className="text-white hover:text-blue-800 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Buildtopia;
