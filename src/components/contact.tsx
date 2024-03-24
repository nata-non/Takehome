import Image from "next/image";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center mx-auto w-full max-w-[1300px] px-3 mb-12">
      <div className=" items-center justify-center min-w-[100px] hidden lg:flex">
        <hr className="" />
      </div>
      <div>
        <div className="flex items-center mb-6 gap-2">
          <Image
            src="/assets/searchIcon.webp"
            alt="Vercel Logo"
            width={32}
            height={32}
            priority
          />
          <h1 className="text-2xl font-semibold">Contact with us</h1>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 mb-6">
          <div className="flex items-center gap-2 hover:text-[#fd5631] cursor-pointer">
            <MdOutlineEmail className="text-2xl" />
            <h1>sad_carousel@gmail.com</h1>
          </div>
          <div className="flex items-center gap-2 hover:text-[#fd5631] cursor-pointer">
            <IoPhonePortraitOutline size={24} />
            <h1>061-023-9823</h1>
          </div>
        </div>
        <div className="flex gap-2 justify-center md:justify-start">
          <div className="right-0 transform  bg-white hover:bg-[#fd5631] p-[6px] flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-colors hover:text-white">
            <TiSocialFacebook />
          </div>
          <div className="right-0 transform  bg-white hover:bg-[#fd5631] p-[6px] flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-colors hover:text-white">
            <FaTwitter />
          </div>
          <div className="right-0 transform  bg-white hover:bg-[#fd5631] p-[6px] flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-colors hover:text-white">
            <FaPhoneSquareAlt />
          </div>
          <div className="right-0 transform  bg-white hover:bg-[#fd5631] p-[6px] flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-colors hover:text-white">
            <BiLogoTelegram />
          </div>
        </div>
      </div>
    </div>
  );
}
