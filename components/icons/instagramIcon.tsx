import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

const InstagramIcon: React.FC<{}> = () => {
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
    window.location.href = "https://www.instagram.com/andrewdddo/";
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-red_p rounded-2xl overflow-hidden">
      <div
        className="h-full w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-125 rounded-full"
        style={{
          overflow: "hidden",
        }}
      >
        <Link href="https://www.instagram.com/andrewdddo/" passHref>
          <FaInstagram
            size={50}
            className="text-white hover:text-pink_p cursor-pointer"
            onClick={!isMobile ? handleInteraction : undefined}
            onTouchStart={isMobile ? handleInteraction : undefined}
          />
        </Link>
      </div>
    </div>
  );
};

export default InstagramIcon;
