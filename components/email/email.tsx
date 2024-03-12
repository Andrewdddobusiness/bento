import React from "react";
import Image from "next/image";
import Contact from "@/public/contact.png";

const Email = () => {
  const emailAddress = "andrewdddobusiness@gmail.com";

  const handleSendEmail = (e: any) => {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div
      className="relative h-full w-full bg-white flex items-center justify-center overflow-hidden rounded"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Want to reach out?
        </h2>
        <button
          className="bg-white hover:bg-red_p text-dark_grey_p text-sm hover:text-white px-4 py-2 rounded-full transition-colors duration-300"
          onClick={handleSendEmail}
        >
          Contact Me
        </button>
      </div>
      <div className="absolute inset-0">
        <Image
          src={Contact}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Email;
