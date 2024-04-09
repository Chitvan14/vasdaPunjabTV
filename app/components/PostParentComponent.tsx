import React from "react";
import PostComponent from "./PostComponent";
import { Post } from "../utils/interface";
interface Props {
  posts: Post[];
  columnType: 1 | 2;
}
const PostsColumnComponent = ({ posts = [], columnType }: Props) => {
  return (
    <>
      {columnType == 1 && posts?.length > 0 && (
        <>
          <PostComponent key={posts[0]?._id} post={posts[0]} cardNumber={1} />
          <div className="md:col-span-1 bg-yellow-500 h-16 md:hidden block mb-2">
            <div className="text-xs text-gray-500">Ad</div>
            <div></div>
          </div>

          {posts?.splice(1)?.map((post) => (
            <PostComponent key={post?._id} post={post} cardNumber={2} />
          ))}
        </>
      )}

      {columnType == 2 &&
        posts?.length > 0 &&
        posts.map((post) => (
          <PostComponent key={post?._id} post={post} cardNumber={2} />
        ))}
    </>
  );
};

export default PostsColumnComponent;
