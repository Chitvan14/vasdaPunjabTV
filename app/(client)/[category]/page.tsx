import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";

async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

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
  // const posts: Array<Post> = await getPostsByTag(params.slug);
  const posts: Post[] = [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
      slug: { current: "dd" },
      publishedAt: "343434",
      excerpt: "fsadfasdf",
      body: "dfasdfadfbfgfa",
      tags: [],
      _id: "34234234",
    },
  ];
  console.log(posts, "posts by tag");
  return (
    <div>
      <div className="text-xs flex justify-start items-center py-1">
        <div className="text-gray-500 mr-1">NEWS {" > "}</div>
        <div> {params?.category}</div>
      </div>
      <div className="border-y-2 border-gray-200 mb-1 py-2 w-4/5">
        {/* <div className=" "></div> */}
        <div className="  text-2xl text-red-500"> {params?.category} NEWS</div>
        <div className="text-xs text-gray-500">description of taggg</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-2  h-auto">
          {posts?.length > 0 && (
            <>
              <PostComponent
                key={posts[0]?._id}
                post={posts[0]}
                cardNumber={1}
              />
              <div className="md:col-span-1 bg-yellow-500 h-16 md:hidden block mb-2">
                <div className="text-xs text-gray-500">Ad</div>
                <div></div>
              </div>

              {/* {posts?.slice(2, 4)?.map((post) => (
                <PostComponent key={post?._id} post={post} cardNumber={2} />
              ))} */}
            </>
          )}
        </div>

        <div className="md:col-span-2 md:border-l-2 md:border-gray-200  pl-2 h-auto">
          {" "}
          {posts?.length > 0 &&
            posts
              ?.slice(2, 6)
              .map((post) => (
                <PostComponent key={post?._id} post={post} cardNumber={2} />
              ))}
        </div>
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
      </div>
      <div className="flex">
        {/* <div className=" "></div> */}
        <div className="border-b-4 border-red-500 mb-1 w-4/5 text-lg text-red-500">
          {" "}
          LATEST NEWS ON {params?.category}{" "}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-2  h-auto">
          {posts?.length > 0 &&
            posts
              ?.slice(2, 6)
              .map((post) => (
                <PostComponent key={post?._id} post={post} cardNumber={2} />
              ))}
        </div>

        <div className="md:col-span-2 md:border-l-2 md:border-gray-200  pl-2 h-auto">
          {" "}
          {posts?.length > 0 &&
            posts
              ?.slice(6, 10)
              .map((post) => (
                <PostComponent key={post?._id} post={post} cardNumber={2} />
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

export default page;
