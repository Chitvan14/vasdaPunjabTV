"use client";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, TV, Whatsapp, Youtube } from "./Icons";
import Image from "next/legacy/image";

const Footer = () => {
  return (
    <div className="mx-auto">
      <div className="flex md:flex-row flex-col justify-between items-center shadow-sm h-auto w-full  p-4 bg-[#100E44] text-white">
        <div className="flex md:flex-row flex-col items-center justify-center">
          <Link href={"/"}>
            <Image
              src={"/images/vasda-punjab-logo-English.webp"}
              alt={"vasda-punjab-logo-English"}
              width={120}
              height={40}
              className="bg-white rounded-sm"
            />
          </Link>
          <div className="flex md:p-0 p-4 items-center justify-center">
            <div className="mx-4 text-sm">
              <Link href="/aboutus">About Us</Link>
              <br />
              <Link href="/privacypolicy">Privacy Policy</Link>
            </div>{" "}
            <div className="mx-4 text-sm">
              <div>Disclaimer</div>
              <Link href="/contact">Advertise With Us</Link>
            </div>
            <div className="mx-4 text-sm">
              <Link href="/contact">Contact Us</Link>
              <br />
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center text-white bg-red-500 px-4 py-2 rounded-full mr-2">
            <div className="text-xs pr-2">LIVE TV</div> <TV />
          </div>
          <div className="flex justify-center items-center text-black bg-gray-200 px-4 py-2 rounded-full">
            {/* <div className="text-xs pr-2 md:hidden block">JOIN US</div> */}
            <div className="text-xs pr-2">FOLLOW US ON </div>
            <div className="pr-2 ">
              <Whatsapp />
            </div>
            <div className="pr-2">
              <Facebook />
            </div>
            <div className="pr-2">
              <Youtube />
            </div>
            <div className="pr-2 ">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
