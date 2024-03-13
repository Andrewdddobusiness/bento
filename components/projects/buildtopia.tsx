import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Buildtopia: React.FC<{}> = () => {
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
    window.location.href = "https://www.buildtopia.lol";
  };

  return (
    <div
      className="h-full w-full flex items-center justify-center bg-white"
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
        <Link href="https://www.buildtopia.lol" passHref>
          <Image
            src="/buildtopia-1.png"
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
