"use client";
import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Recursive } from "next/font/google";
import Header from "./Header";
import { Facebook, Hamburger, Instagram, TV, Whatsapp, Youtube } from "./Icons";
import Image from "next/image";

const recursive = Recursive({ subsets: ["latin"] });

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <div className="mx-auto bg-[#100E44]">
      <div className="flex justify-between items-center h-16 w-full px-4">
        {/* <Link href="/">
          <div className={`${recursive.className} text-3xl dark:text-white-50`}>
            Dev
            <span className="text-purple-500">Blook</span>
          </div>
        </Link>
        <ThemeSwitch /> */}
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src={"/images/vasda-punjab-logo.png"}
            alt={"vasda-punjab-logo"}
            width={120}
            height={0}
            className="bg-white rounded-sm"
          />
        </Link>
        <div className="flex justify-center items-center">
          <Link
            href={"/livetv"}
            className="flex justify-center items-center shadow-lg bg-gray-200 px-2 py-1 rounded-full mr-2"
          >
            <div className="text-xs pr-2">LIVE TV</div> <TV />
          </Link>
          <div className="flex justify-center items-center shadow-lg bg-gray-200 px-2 py-1 rounded-full">
            {/* <div className="text-xs pr-2 md:hidden block">JOIN US</div> */}
            <div className="text-xs pr-2 md:block hidden">FOLLOW US ON </div>
            <div className="pr-2 md:block hidden">
              <Whatsapp />
            </div>
            <div className="pr-2">
              <Facebook />
            </div>
            <div className="pr-2 md:block hidden">
              <Youtube />
            </div>
            <div className="pr-2 ">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-1 border-gray-600 bg-gray-200 flex justify-start items-center px-2 md:px-4">
        {/* <div className="m-2"  onClick={toggleMenu}>
            <Hamburger />
          </div> */}
        <div className="overflow-x-auto whitespace-nowrap">
          {Array(18)
            .fill(1)
            .map((m, i) => (
              <Link
                href={"/TEXT" + i + 1}
                className="inline-block p-2 hover:text-red-500 border-b-2 border-gray-200 hover:border-red-500"
              >
                TEXT {i + 1}
              </Link>
            ))}
        </div>
      </div>
      {/* Mobile Menu */}
      {/* <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden fixed top-0 left-0 h-full w-3/4 bg-gray-900 transition-transform duration-300 ease-in-out z-10 overflow-y-auto`}
      >
        {" "}
        <div className="px-4 py-2">
          <Link href="/" className="block text-white py-2">
            Home
          </Link>
          <Link href="/" className="block text-white py-2">
            Live TV
          </Link>
          <Link href="/" className="block text-white py-2">
            Videos
          </Link>
          <Link href="/" className="block text-white py-2">
            Photos
          </Link>
          <Link href="/" className="block text-white py-2">
            Latest
          </Link>
          <Link href="/" className="block text-white py-2">
            India
          </Link>
          <Link href="/" className="block text-white py-2">
            World
          </Link>
          <Link href="/" className="block text-white py-2">
            Business
          </Link>
          <Link href="/" className="block text-white py-2">
            Tech
          </Link>
          <Link href="/" className="block text-white py-2">
            Auto
          </Link>
          <Link href="/" className="block text-white py-2">
            Cryptonow
          </Link>
          <Link href="/" className="block text-white py-2">
            Health
          </Link>
          <Link href="/" className="block text-white py-2">
            Video
          </Link>
          <Link href="/" className="block text-white py-2">
            World
          </Link>
          <Link href="/" className="block text-white py-2">
            Business
          </Link>
          <Link href="/" className="block text-white py-2">
            Tech
          </Link>
          <Link href="/" className="block text-white py-2">
            Auto
          </Link>
          <Link href="/" className="block text-white py-2">
            Cryptonow
          </Link>
          <Link href="/" className="block text-white py-2">
            Health
          </Link>
          <Link href="/" className="block text-white py-2">
            Video
          </Link>
        </div>
      </div> */}
      {/* <Header title="Articles" tags /> */}
    </div>
  );
};

export default Navbar;
