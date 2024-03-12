import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const InstagramIcon: React.FC<{}> = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-red_p rounded-2xl overflow-hidden">
      <div
        className="h-full w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-125 rounded-full"
        style={{
          overflow: "hidden",
        }}
      >
        <Link href="https://www.instagram.com/andrewdddo/" passHref>
          <FaInstagram size={50} className="text-white hover:text-pink_p" />
        </Link>
      </div>
    </div>
  );
};

export default InstagramIcon;
