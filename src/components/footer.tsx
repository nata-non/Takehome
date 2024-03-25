import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#F5F4F8] min-h-[15vh]">
      <div>
        <div className="flex gap-2">
          <FaRegUser size={24} />
          <h1>Natanon Hanchana</h1>
        </div>
        <div className="flex gap-2">
          <MdOutlineEmail size={24} />
          <h1>natanon.han@gmail.com</h1>
        </div>
        <Link
          target="_blank"
          href="https://github.com/nata-non"
          className="flex gap-2"
        >
          <FaGithub size={24} />
          <h1>nata-non</h1>
        </Link>
      </div>
    </div>
  );
}
