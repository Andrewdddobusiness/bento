import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeadStart: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode(); // Check on initial render

    const observer = new MutationObserver(() => checkDarkMode());
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const handleInteraction = () => {
    window.location.href = "https://headstart-kohl.vercel.app/";
  };

  return (
    <div
      className="h-full w-full flex items-center justify-center bg-gradient-to-r from-zinc-900 to-zinc-950"
      style={{
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <div
        className="h-full w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110 rounded-full"
        onClick={!isMobile ? handleInteraction : undefined}
        onTouchStart={isMobile ? handleInteraction : undefined}
      >
        <Link href="https://headstart-kohl.vercel.app/" passHref>
          <Image
            src={isDarkMode ? "/headstart-dark.png" : "/headstart-1.png"}
            alt="HeadStart"
            width={650}
            height={450}
            className="text-white hover:text-blue-800 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeadStart;
