import Link from "next/link";
import React from "react";

const BranchingTimeline = () => {
  return (
    <div className="relative w-full h-full bg-green_p overflow-hidden rounded-2xl text-center">
      <Link href="https://www.linkedin.com/your-profile-link" passHref>
        <p className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 text-4xl font-bold text-zinc-700 transition duration-300 ease-in-out  hover:scale-110 z-50">
          Timeline
        </p>
      </Link>

      <svg
        className="absolute top-0 left-0 w-full h-full z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-20,80 Q30,60 60,80 Q90,100 120,80 Q150,60 180,80 Q210,100 240,80 Q270,60 300,80 Q330,100 360,80 Q390,60 420,80 Q450,100 480,80 Q510,60 540,80 Q570,100 600,80 Q630,60 660,80 Q690,100 720,80 Q750,60 780,80 Q810,100 840,80 Q870,60 910,80"
          className="stroke-current text-white fill-none"
          strokeWidth="20"
        />
      </svg>
    </div>
  );
};

export default BranchingTimeline;
