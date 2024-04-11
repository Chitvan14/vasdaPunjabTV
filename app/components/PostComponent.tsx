"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Post } from "../utils/interface";
import Image from "next/legacy/image";
import { Facebook, Instagram, Whatsapp, Youtube } from "./Icons";

interface Props {
  post: Post;
  cardNumber: number;
}

const PostComponent = ({ post, cardNumber }: Props) => {
  const [imgSrc, setImgSrc] = useState(post?.poster);

  return (
    <div>
      {cardNumber === 1 && (
        <Link
          href={post.tags[0].name.toLowerCase() + "/" + post?.slug.current}
          className="relative mb-2 cursor-pointer"
        >
          {/* <Image
            onError={() => {
              setImgSrc("/images/vasda-punjab-logo.png");
            }}
            width={0}
            height={60}
            src={imgSrc}
            alt={post.slug.current}
            layout="responsive" // or layout="fill"
            objectFit="cover" // Optional: Adjust objectFit as needed
            objectPosition="center"
          /> */}
          <Image
            onError={() => {
              setImgSrc("/images/vasda-punjab-logo.png");
            }}
            src={imgSrc}
            alt={post.slug.current}
            width={800}
            height={500}
            layout="responsive"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

          <div className="absolute bottom-0 p-4 text-lg text-white">
            {" "}
            {post?.title.length > 100
              ? post?.title.substring(0, 100) + "..."
              : post?.title}
          </div>
        </Link>
      )}
      {cardNumber === 2 && (
        <Link
          href={post.tags[0].name.toLowerCase() + "/" + post?.slug.current}
          className="hover:bg-gray-100 cursor-pointer grid grid-cols-4 gap-2 w-full border-b py-1 border-gray-200 mb-1 items-center"
        >
          <p className="col-span-3 truncate whitespace-normal overflow-hidden">
            {post?.title.length > 100
              ? post?.title.substring(0, 100) + "..."
              : post?.title}
          </p>
          <div className="col-span-1">
            <Image
                width={800}
                height={500}
              src={post?.poster}
              alt={post.slug.current}
              layout="responsive" // or layout="fill"
             // objectFit="cover" // Optional: Adjust objectFit as needed
             // objectPosition="center"
            />
          </div>
        </Link>
      )}
      {cardNumber === 3 && (
        <div className="relative mb-2 flex md:flex-row flex-col justify-center items-start bg-gray-200 overflow-auto">
          <div className="w-full md:w-[70%]">
            <Image
               width={800}
               height={500}
              src={post?.poster}
              alt={post.slug.current}
              layout="responsive" // or layout="fill"
              //objectFit="cover" // Optional: Adjust objectFit as needed
              //objectPosition="center"
            />
          </div>
          <div className="flex-1 text-xs flex flex-col justify-between p-2">
            <div className="pr-2">Share </div>
            <div className="flex justify-start items-center px-2 pt-1 pb-4">
              {/* <div className="text-xs pr-2 md:hidden block">JOIN US</div> */}
              <div className="pr-2">
                <Whatsapp size="30" />
              </div>
              <div className="pr-2">
                <Facebook size="30" />
              </div>
              <div className="pr-2">
                <Youtube size="30" />
              </div>
              <div className="pr-2 ">
                <Instagram size="30" />
              </div>
            </div>
            <ul className="">
              <li>Reported By: {post?.author[0].author}</li>
              <li>Channel: Vasda Punjab</li>
              <li>
                Last Updated:
                {new Date(post?.publishedAt).toDateString()}
              </li>
              <li>
                Location:
                {post.location[0].state + ", " + post.location[0].country}
              </li>
              <li>
                Category:
                <Link href={"/" + post?.tags[0].slug.current}>
                  {post?.tags[0].name}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
    // <div className={cardStyle}>
    //   <Link href={`/posts/${post?.slug?.current}`}>
    //     <h2 className={`${recursive.className} text-2xl dark:text-slate-300`}>{post?.title}</h2>
    //     <p className={`${recursive.className} my-2 text-purple-800`}>{new Date(post?.publishedAt).toDateString()}</p>
    //     <p className='dark:text-gray-400 mb-4 line-clamp-2'>{post?.excerpt}</p>
    //   </Link>

    //   {/* TAGS */}

    //   <div>
    //     {post?.tags?.map((tag) => (
    //       <span key={tag?._id} className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900'>#{tag?.name}</span>
    //     ))}
    //   </div>
    // </div>
  );
};

export default PostComponent;

const cardStyle = `
mb-8
p-4
border
border-gray-900
rounded-md
shadow-sm
shadow-purple-950
hover:shadow-md
hover:bg-purple-500
hover:text-white
hover:dark:bg-gray-950
`;
