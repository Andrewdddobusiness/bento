import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image"; // Import Image component from Next.js

const HeadStart: React.FC<{}> = () => {
  return (
    <div
      className="h-full w-full flex items-center justify-center bg-gradient-to-r from-zinc-900 to-zinc-950"
      style={{
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <div className="h-full w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110 rounded-full">
        <Link href="https://headstart-kohl.vercel.app/" passHref>
          {/* Next.js Image component */}
          <Image
            src="/headstart-1.png"
            alt="Headstart"
            width={650}
            height={450}
            className="text-white hover:text-blue-800"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeadStart;
