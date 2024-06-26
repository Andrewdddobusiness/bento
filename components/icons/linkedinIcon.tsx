import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const LinkedInIcon: React.FC<{}> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    setIsMobile(
      Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      )
    );
  }, []);

  const handleInteraction = () => {
    window.location.href = "https://www.linkedin.com/in/andrewdddo/";
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-blue_p dark:bg-zinc-800 rounded-2xl overflow-hidden">
      <div className="h-full w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-125 rounded-full">
        <Link href="https://www.linkedin.com/in/andrewdddo/" passHref>
          <FaLinkedinIn
            size={50}
            className="text-white dark:text-blue_p hover:text-blue-100 dark:hover:text-blue_p dark:hover:opacity-50 cursor-pointer"
            onClick={!isMobile ? handleInteraction : undefined}
            onTouchStart={isMobile ? handleInteraction : undefined}
          />
        </Link>
      </div>
    </div>
  );
};

export default LinkedInIcon;
