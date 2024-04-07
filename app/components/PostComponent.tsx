import Link from "next/link";
import React from "react";
import { Recursive } from "next/font/google";
import { Post } from "../utils/interface";
import Image from "next/image";
import { Facebook, Instagram, Whatsapp, Youtube } from "./Icons";

interface Props {
  post: Post;
  cardNumber: number;
}

const recursive = Recursive({ subsets: ["latin"] });
const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae unde commodi iure earum possimus adipisci asperiores, amet, saepe libero voluptatem sapiente. Labore eos dignissimos delectus reiciendis ex quos dolores saepe!";
const PostComponent = ({ post, cardNumber }: Props) => {
  return (
    <div>
      {cardNumber === 1 && (
        <Link href={post?.slug.current} className="relative mb-2 cursor-pointer">
          <Image
            width={0}
            height={0}
            src={"/images/pm-modi.webp"}
            alt={"vasda-punjab-logo"}
            layout="responsive" // or layout="fill"
            objectFit="cover" // Optional: Adjust objectFit as needed
            objectPosition="center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

          <div className="absolute bottom-0 p-4 text-lg text-white">
            {" "}
            {text.length > 50 ? text.substring(0, 50) + "..." : text}
          </div>
        </Link>
      )}
      {cardNumber === 2 && (
        <div className="hover:bg-gray-100 cursor-pointer grid grid-cols-4 gap-2 w-full border-b pb-1 border-gray-200 mb-1 items-center">
          <p className="col-span-3 truncate whitespace-normal overflow-hidden">
            {text.length > 100 ? text.substring(0, 100) + "..." : text}
          </p>
          <div className="col-span-1">
            <Image
              width={0}
              height={0}
              src={"/images/pm-modi.webp"}
              alt={"vasda-punjab-logo"}
              layout="responsive" // or layout="fill"
              objectFit="cover" // Optional: Adjust objectFit as needed
              objectPosition="center"
            />
          </div>
        </div>
      )}
      {cardNumber === 3 && (
        <div className="relative mb-2 flex md:flex-row flex-col justify-center items-start bg-gray-200">
          <Image
            width={0}
            height={0}
            src={"/images/pm-modi.webp"}
            alt={"vasda-punjab-logo"}
            layout="responsive" // or layout="fill"
            objectFit="cover" // Optional: Adjust objectFit as needed
            objectPosition="center"
            className="flex-1"
          />
          <div className="flex-1 text-sm flex flex-col justify-between p-2">
              <div className="pr-2">Share </div>
            <div className="flex justify-start items-center px-2 pt-1 pb-4">
              {/* <div className="text-xs pr-2 md:hidden block">JOIN US</div> */}
              <div className="pr-2">
                <Whatsapp size="30"/>
              </div>
              <div className="pr-2">
                <Facebook size="30"/>
              </div>
              <div className="pr-2">
                <Youtube size="30"/>
              </div>
              <div className="pr-2 ">
                <Instagram size="30"/>
              </div>
            </div>
            <div>
              <div>Reported By: Mohammad Haris</div>
              <div>Vasda Punjab</div>
              <div>Last Updated: APRIL 06, 2024, 20:00 IST</div>
              <div>Location</div>
              <div>Category</div>
            </div>
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
