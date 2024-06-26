import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex fixed top-0 min-w-full bg-white py-2 z-50 px-3">
      <div className="flex justify-between mx-auto w-full max-w-[1300px] ">
        <div className="flex mt-2 gap-2 cursor-pointer">
          <div>
            <Image
              src="/assets/searchIcon.webp"
              alt="Vercel Logo"
              width={32}
              height={32}
              priority
            />
          </div>
          <h1 className="text-[1.5rem] font-semibold mb-4">Bangkok Asset</h1>
        </div>
        <div className="flex h-9 my-auto bg-[#fd5631] hover:bg-[#fd390e] cursor-pointer hover:shadow-lg hover:shadow-[#fd5631]/30 text-white font-medium px-3 py-1 rounded transition-all duration-200 ease-in-out items-center justify-center text-sm">
          <svg
            className="mr-1 w-3 h-3"
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
          <p>Add Property</p>
        </div>
      </div>
    </div>
  );
}
