"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiUser, FiMail, FiCode, FiHome, FiGithub } from "react-icons/fi";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: <FiHome strokeWidth={1.5} size={26} />,
    selectedBG: "bg-red-500",
    newTab: false
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <FiCode size={25} />,
    selectedBG: "bg-blue-500",
    newTab: false
  },
  {
    name: "About",
    href: "/about",
    icon: <FiUser strokeWidth={1.5} size={25} />,
    selectedBG: "bg-green-500",
    newTab: false
  },
  {
    name: "Contact",
    href: "mailto:keanegrech@gmail.com",
    icon: <FiMail strokeWidth={1.6} size={25} />,
    selectedBG: "bg-yellow-500",
    newTab: false
  },
  {
    name: "Github",
    href: "https://github.com/keanegrech",
    icon: <FiGithub size={25} />,
    selectedBG: "bg-purple-500",
    newTab: true
  },
];

export default function Dock() {
  const pathname = usePathname();
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  return (
    <div className="md:p-[12px] bg-transparent md:bg-[#f8f8f8]/70 md:dark:bg-[#212121]/50 md:backdrop-blur-xl sm:drop-shadow-xl md:border dark:border-[#ffffff1a] border-[#fefdfe] rounded-[24px]">
      <div className="flex gap-4 transition-all flex-col bg-transparent md:flex-row sm:animate-fadeIn">
        {navigation.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            title={item.name}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`w-[48px] h-[48px] drop-shadow-md flex ease-in-out justify-center border dark:border-[#ffffff1a] border-[#dededf] rounded-[12px] cursor-pointer transition-all duration-200 ${
              pathname === item.href
                ? `${item.selectedBG}`
                : hoverIndex === index
                ? `${item.selectedBG}`
                : `dark:bg-[#222122]/70 bg-[#f8f8f8d6]/70 dark:border-[#ffffff1a] border-[#dededf]`
            }`}
            {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <div className="self-center dark:text-white text-black">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
