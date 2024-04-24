import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const Profile: React.FC<{}> = () => {
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

  const profileImage = isDarkMode ? "/profile-dark.png" : "/profile.png";

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-2xl overflow-hidden p-10"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="h-32 w-32 overflow-hidden mb-4">
          <Image
            src={"/profile-7.png"}
            alt="Profile Picture"
            className="h-full w-full object-cover"
            width={400}
            height={400}
          />
        </div>
        <div className="text-center text-white p-10">
          <h2 className="text-darkGrey_p dark:text-white text-3xl font-extrabold mb-2">
            andrew.
          </h2>
          <p className="text-white font-light">
            ~hey team!~ <br />
            i'm a <span className="font-bold">Full-Stack Engineer</span> &{" "}
            <span className="font-bold">Cinematic Storyteller</span>.<br />
            <br />
            i'm passionate about Startups, Content Creation & building cool
            sh*t.
          </p>
          <br />
        </div>
      </div>
      <div className="absolute inset-0">
        <Image
          className="rounded-2xl"
          src={profileImage} // Also change the background image
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Profile;
