"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Blink, Facebook, Instagram, TV, Whatsapp, Youtube } from "./Icons";
import Image from "next/legacy/image";
import { client } from "@/sanity/lib/client";
import { Tag } from "../utils/interface";

const Navbar = () => {
  const [tags, tagSet] = useState<Tag[]>([]);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  useEffect(() => {
    async function getTags() {
      const query = `*[_type == "tag"]{
        slug, 
          name,_id
        }`;
      const data = await client.fetch(query);
      console.log(data);
      tagSet(data);
    }

    getTags();
  }, []);
  return (
    <div className="mx-auto fixed  z-20 top-0 w-full">
      <div className="flex justify-between items-center h-16 w-full px-4 bg-white">
        {/* <Link href="/">
          <div className={`${recursive.className} text-3xl dark:text-white-50`}>
            Dev
            <span className="text-purple-500">Blook</span>
          </div>
        </Link>
        <ThemeSwitch /> */}
        <Link
          href={"/"}
          className="flex items-center justify-center shadow-xl border-4 border-gray-200
           border-t-white border-l-white border-r-gray-200 border-b-gray-200"
        >
          <Image
            src={"/images/vasda-punjab-logo-English.webp"}
            alt={"vasda-punjab-logo-English"}
            width={120}
            height={40}
            className=" rounded-sm"
          />
        </Link>
        <div className="flex justify-center items-center">
          <div className="relative flex">
            <Link
              href={"/livetv"}
              className="flex justify-center items-center shadow-lg bg-gray-200 px-2 py-1 rounded-full mr-2"
            >
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ef4444]"></span>
              </span>{" "}
              <div className="text-xs px-2">LIVE TV</div> <TV />
            </Link>
            {/* <div className="absolute right-2 top-0">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef4444]"></span>
              </span>
            </div> */}
          </div>

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
          {tags?.map((tag) => (
            <Link
              key={tag?._id}
              href={"/" + tag?.slug.current}
              className="inline-block p-2 hover:text-red-500 border-b-2 border-gray-200 hover:border-red-500"
            >
              {tag?.name}
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
