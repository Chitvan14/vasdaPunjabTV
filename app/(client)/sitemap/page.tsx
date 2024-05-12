"use client";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import Header from "@/app/components/Header";
import { Tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Sitemap = () => {
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
      <Breadcrumb homeElement={"NEWS "} separator={" > "} />

      <Header title={"SITEMAP"} color={"black"} />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
        <div className="md:col-span-3 flex flex-col h-[60vh]">
          {tags?.map((tag) => (
            <Link key={tag?._id} href={"/" + tag?.slug.current} className="p-2 bg-gray-200 mb-2">
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
