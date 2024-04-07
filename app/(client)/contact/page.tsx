import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import Toc from "@/app/components/Toc";
import { slugify } from "@/app/utils/helpers";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Recursive } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const Contact = async () => {
  return (
    <div>
      <div className="text-xs flex justify-start items-center py-1">
        <div className="text-gray-500 mr-1">NEWS {" > "} CONTACT</div>
      </div>
      <div className="border-y-2 border-gray-200 mb-1 py-2 w-4/5">
        {/* <div className=" "></div> */}
        <div className="  text-3xl "> CONTACT US</div>
      </div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
        <div className="md:col-span-3  h-auto">
          <div>
            At Vasda Punjab we are always looking forward to hearing from you.{" "}
            <br />
            <br />
            If you have any questions, comments, suggestions for us please send
            them to
            <br />
            <br />
            editor@abc.com <br />
            SMS us with your suggestions at 5186618. <br />
            Phone: +91-120-4343818, 3912777 <br />
            <br />
            Write us at: <br />
            Corporate Office <br />
            Skymark one, Tower-E,
            <br /> Sector 98,
            <br /> Ludhiana,
            <br /> Punjab,
            <br /> India.
            <br /> PIN 201303 Grievance Officer <br />
            Satyajit Sahoo, <br />
            Sr Counsel Legal <br />
            Contact detail: complaint@abc.com
          </div>
        </div>
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
