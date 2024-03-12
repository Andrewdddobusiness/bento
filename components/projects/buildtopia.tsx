import Link from "next/link";
import Image from "next/image";

const Buildtopia: React.FC<{}> = () => {
  return (
    <div
      className="h-full w-full flex items-center justify-center bg-white"
      style={{
        overflow: "hidden",
        borderRadius: "20px",
      }}
    >
      <div className="h-full w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110 rounded-full">
        <Link href="https://www.buildtopia.lol" passHref>
          <Image
            src="/buildtopia-1.png"
            alt="Buildtopia\"
            width={650}
            height={450}
            className="text-white hover:text-blue-800"
          />
        </Link>
      </div>
    </div>
  );
};

export default Buildtopia;
