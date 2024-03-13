import Link from "next/link";
import React, { useEffect, useState } from "react";

const Subs: React.FC<{
  currentSubscribers: number;
  goalSubscribers: number;
}> = ({ currentSubscribers, goalSubscribers }) => {
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
    window.location.href =
      "https://www.youtube.com/channel/UCLPAUfytUgzLdPZqCo_xPiA";
  };

  // Calculate the percentage of progress
  const progress = (currentSubscribers / goalSubscribers) * 100;

  // Round the currentSubscribers to the nearest thousand
  const roundedSubscribers = Math.round(currentSubscribers / 1000) * 1000;

  return (
    <div className="flex flex-col w-full h-full bg-white overflow-hidden rounded-2xl relative">
      <div className="flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div
            className="transition duration-300 ease-in-out transform hover:scale-125"
            onClick={!isMobile ? handleInteraction : undefined}
            onTouchStart={isMobile ? handleInteraction : undefined}
          >
            <Link
              href="https://www.youtube.com/channel/UCLPAUfytUgzLdPZqCo_xPiA"
              passHref
            >
              <>
                <p className="text-4xl font-extrabold text-dark_grey_p">
                  {roundedSubscribers / 1000}k subs
                </p>
                <p className="text-zinc-500 font-light">100k goal</p>
                <p className="text-zinc-500 text-sm font-light">@andrewdddo</p>
              </>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full bg-red_p" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default Subs;
