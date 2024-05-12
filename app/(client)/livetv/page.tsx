"use client";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import Header from "@/app/components/Header";
import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Video = (props: any) => {
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    if (videoNode.current) {
      const _player: any = videojs(videoNode.current, props);
      setPlayer(_player);
      return () => {
        if (player !== null) {
          // player.dispose();
        }
      };
    }
  }, [player,props]);

  return (
    <div data-vjs-player>
      <video ref={videoNode} className="video-js"></video>
    </div>
  );
};
// const recursive = Recursive({ subsets: ["latin"] });

// interface Params {
//   params: {
//     post: string;
//     category: string;
//   };
// }

// async function getPost(slug: string) {
//   const query = `
//   *[_type == "post" && slug.current == "${slug}"][0] {
//     title,
//     slug,
//     publishedAt,
//     excerpt,
//     _id,
//     "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
//     body,
//     tags[]-> {
//       _id,
//       slug,
//       name
//     }
//   }
//   `;

//   const post = await client.fetch(query);
//   return post;
// }

export const revalidate = 60;

const LiveTV = () => {
  const play = {
    fill: true,
    fluid: true,
    autoplay: true,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: "https://livestream.unlimitedcdn.com/agm-pn/punjabi-national-tv/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  //   const post: Post = await getPost(params?.post);
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
  //   if (!post) {
  //     notFound();
  //   }

  return (
    <div>
           <Breadcrumb homeElement={"NEWS "} separator={" > "} />

           <Header title={"LIVE TV"} color={"black"} />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
        <div className="md:col-span-3  h-auto">
          <Video {...play} />
        </div>
        <div className="md:col-span-1 bg-yellow-500 h-16 relative">
          <div className="text-xs text-gray-500">Ad</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LiveTV;
