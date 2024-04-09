"use client";
import { Tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Sitemap = async () => {
  const [tags, tagSet] = useState<Tag[]>([]);

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
        <div className="md:col-span-3 flex flex-col h-[60vh]">
          {tags?.map((tag) => (
            <Link key={tag?._id} href={"/" + tag?.slug.current}>
              {tag?.name}
            </Link>
          ))}
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
