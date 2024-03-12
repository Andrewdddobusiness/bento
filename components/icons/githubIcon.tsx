import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const GitHubIcon: React.FC<{}> = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-900 rounded-2xl overflow-hidden">
      <div className="h-full w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-125 rounded-full">
        <Link href="https://github.com/your-profile-link" passHref>
          <FaGithub
            size={32}
            className="text-white hover:text-gray-700 cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default GitHubIcon;
