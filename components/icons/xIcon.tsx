import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { TbDeviceDesktopPlus } from "react-icons/tb";

const TwitterIcon: React.FC<{}> = () => {
  return (
    <div className="h-full w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-125 rounded-2xl overflow-hidden">
      <Link href="https://twitter.com/your-profile-link" passHref>
        <FaXTwitter
          size={32}
          className="text-blue-500 hover:text-blue-700 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default TwitterIcon;
