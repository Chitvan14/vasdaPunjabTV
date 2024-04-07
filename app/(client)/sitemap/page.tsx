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

const Sitemap = async () => {
  return (
    <div>
      <div className="text-xs flex justify-start items-center py-1">
        <div className="text-gray-500 mr-1">NEWS {" > "} SITEMAP</div>
      </div>
      <div className="border-y-2 border-gray-200 mb-1 py-2 w-4/5">
        {/* <div className=" "></div> */}
        <div className="  text-3xl "> SITEMAP</div>
      </div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
        <div className="md:col-span-3 h-auto">
          <ul>
            {" "}
            {Array(18)
              .fill(1)
              .map((m, i) => (
                <li className="">TEXT {i + 1}</li>
              ))}
          </ul>
        </div>
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
