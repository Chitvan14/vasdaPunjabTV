import { Breadcrumb } from "@/app/components/Breadcrumb";
import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import { slugify } from "@/app/utils/helpers";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/legacy/image";
import { notFound } from "next/navigation";
import React from "react";


interface Params {
  params: {
    post: string;
    category: string;
  };
}

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    body,_id,
    slug, 
    publishedAt,
     title, 
     "poster":poster.asset->url,
        tags[]-> {
      name,slug
     },
     location[]->{
      state,country
     },author[]->{
      author
     }
  }
  `;

  // title,
  // slug,
  // publishedAt,
  // excerpt,
  // _id,
  // "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
  // body,
  // tags[]-> {
  //   _id,
  //   slug,
  //   name
  // }
  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const post: Post = await getPost(params?.post);
  // const post: Post = {
  //   title:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores.",
  //   slug: { current: "dd" },
  //   publishedAt: "343434",
  //   excerpt: "fsadfasdf",
  //   body: "dfasdfadfbfgfa",
  //   tags: [],
  //   _id: "34234234",
  // };
  if (!post) {
    notFound();
  }
  console.log(post);
  return (
    <div>
      <Breadcrumb homeElement={"NEWS "} separator={" > "} />
      <Header title={post?.title} color={"black"} />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
        <div className="md:col-span-3  h-auto">
          <PostComponent key={post?._id} post={post} cardNumber={3} />
          <div className="">
            {/* <span className={`${recursive?.className} text-purple-500`}>
          {new Date(post?.publishedAt).toDateString()}
        </span> */}
            {/* <div className="mt-5">
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                #{tag.name}
              </span>
            </Link>
          ))}
        </div> */}
            {/* <Toc headings={post?.headings} /> */}
            <div className={richTextStyles}>
              <PortableText
                value={post?.body}
                components={myPortableTextComponents}
              />
            </div>
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

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value).url()}
        alt="Post"
        width={700}
        height={700}
      />
    ),
  },
  block: {
    h2: ({ value }: any) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold mb-3"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }: any) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }: any) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold mb-3"
      >
        {value.children[0].text}
      </h6>
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
