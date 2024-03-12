import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const LinkedInIcon: React.FC<{}> = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-blue_p rounded-2xl overflow-hidden">
      <div className="h-full w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-125 rounded-full">
        <Link href="https://www.linkedin.com/in/andrewdddo/" passHref>
          <FaLinkedinIn size={50} className="text-white hover:text-blue-100" />
        </Link>
      </div>
    </div>
  );
};

export default LinkedInIcon;
