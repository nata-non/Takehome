import Logo from "../../public/assets/logo";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex fixed top-0 min-w-full justify-between bg-white py-4 z-50">
      <div className="flex gap-2 cursor-pointer m-auto">
        <div>
          <Image
            src="/assets/searchIcon.webp"
            alt="Vercel Logo"
            width={32}
            height={32}
            priority
          />
        </div>

        <h1 className="text-[21.69px] font-semibold mb-4">Bangkok Asset</h1>
      </div>
      <div className="flex m-auto">
        <button className="bg-[#fd5631] hover:bg-[#fd390e] hover:shadow-lg hover:shadow-[#fd5631]/30 text-white font-medium py-[6.8px] px-4 rounded transition-all duration-200 ease-in-out flex items-center justify-center">
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          Add Property
        </button>
      </div>
    </div>
  );
}
