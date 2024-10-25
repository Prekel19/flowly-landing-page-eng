"use client";

import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ITabs } from "../models/interface";
import plFlag from "../assets/pl-flag.svg";

interface MobileMenuProps {
  menuTabs: ITabs[];
}

export default function MobileMenu({ menuTabs }: MobileMenuProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="hidden max-md:flex items-center">
        <div onClick={toggleMenu} className="flex justify-center items-center h-7 w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke={isActive ? "#147487" : "#000000"}
            className="size-7 transition duration-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={`hidden max-md:flex flex-col items-center bg-secondary2 fixed top-0 left-0 h-full w-1/2 max-sm:w-3/5 ${
          isActive ? "translate-x-0" : "-translate-x-full"
        } z-10 transition duration-300`}
      >
        <div className="flex justify-end w-full py-2 pr-4">
          <div className="flex h-7 w-7" onClick={toggleMenu}>
            <XMarkIcon />
          </div>
        </div>
        <ul className="flex flex-col items-center gap-8 pt-8">
          {menuTabs.map((tab, index) => {
            return (
              <li key={index} className="text-base font-semibold menu-item">
                <a href={`#${tab.name.toLocaleLowerCase()}`} onClick={toggleMenu}>
                  {tab.name}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="https://flowly-site.vercel.app"
          className="flex items-center gap-1 font-noto text-sm font-light pt-6"
        >
          <Image
            src={plFlag}
            alt="Flag of Poland"
            height={24}
            width={24}
            className="max-lg:scale-90"
          />
          PL
        </a>
        <div className="flex flex-col-reverse items-center gap-6 pb-10 mt-auto *:transition">
          <a
            href="#"
            className="flex bg-primary1 text-white items-center py-2 px-6 border border-primary1 rounded-xl hover:bg-secondary1 hover:text-primary1"
          >
            Create account
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-6 border border-primary1 rounded-xl hover:bg-primary1 hover:text-white"
          >
            Log in
          </a>
        </div>
      </div>
    </>
  );
}
