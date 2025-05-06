"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [activeNv, setActiveNav] = useState(false);
  return (
    <header className="absolute top-[40px] left-0 z-[60] right-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="relative w-[100px] h-[40px] xl:w-[60px] xl:h-[30px] z-[60] -top-5 "
          >
            <Image
              src="/assets/xxx.svg"
              alt="Logo"
              width={60}
              height={30}
              className="object-contain"
            />
          </Link>

          <button
            onClick={() => setActiveNav(!activeNv)}
            className="w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none "
          >
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                activeNv ? "top-1/2 rotate-45" : "top-0 translate-y-0"
              }`}
            />

            <span
              className={`w-full h-[1.5px] bg-current absolute left-0  transition-opacity duration-300 ${
                activeNv ? "opacity-0" : "top-1/2"
              }`}
            />

            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                activeNv ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">{activeNv && <Nav />}</AnimatePresence>
    </header>
  );
};

export default Header;
