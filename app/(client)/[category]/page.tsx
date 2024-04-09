import { Breadcrumb } from "@/app/components/Breadcrumb";
import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import PostParentComponent from "@/app/components/PostParentComponent";
import { reducer } from "@/app/utils/helpers";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import React from "react";
// import { posts } from "../page";

async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    slug, 
    title, 
    "poster":poster.asset->url,
       tags[]-> {
     name,description
    }
  }
  `;
  // title,
  // slug,
  // publishedAt,
  // excerpt,
  // tags[]-> {
  //   _id,
  //   slug,
  //   name
  // }
  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 60;

interface Params {
  params: {
    category: string;
  };
}

const page = async ({ params }: Params) => {
  const posts: Array<Post> = await getPostsByTag(params.category);

  console.log(posts, "posts by tag");
  if (posts.length == 0) {
    notFound();
  }
  return (
    <div>
      <Breadcrumb homeElement={"NEWS "} separator={" > "} />
      <Header
        title={params?.category.toUpperCase() + " NEWS"}
        description={posts[0]?.tags[0]?.description}
        color={"red"}
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-2  h-auto">
          <PostParentComponent
            posts={reducer(posts, true, 0, 2)}
            columnType={1}
          />{" "}
        </div>

        <div className="md:col-span-2 md:border-l-2 md:border-gray-200  pl-2 h-auto">
          <PostParentComponent
            posts={reducer(posts, false, 0, 5)}
            columnType={2}
          />
        </div>
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
      </div>
      <br />
      <div className="flex">
        <div className="border-b-4 border-red-500 mb-1 w-4/5 text-lg text-red-500">
          {" "}
          LATEST NEWS ON {params?.category.toUpperCase()}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-2  h-auto">
          <PostParentComponent
            posts={reducer(posts, true, 0, 5)}
            columnType={2}
          />
        </div>

        <div className="md:col-span-2 md:border-l-2 md:border-gray-200  pl-2 h-auto">
          <PostParentComponent
            posts={reducer(posts, false, 0, 5)}
            columnType={2}
          />
        </div>
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
