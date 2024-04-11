import { client } from "@/sanity/lib/client";
import { Post } from "../utils/interface";
import PostParentComponent from "../components/PostParentComponent";
import { reducer } from "../utils/helpers";

async function getPosts() {
  // const query = `
  // *[_type == "post"] {
  //   title,
  //   slug,
  //   publishedAt,
  //   excerpt,
  //   tags[]-> {
  //     _id,
  //     slug,
  //     name
  //   }
  // }
  // `;
  const query = `*[_type == "post"]{
     slug, 
     title, 
     "poster":poster.asset->url,
        tags[]-> {
      name
     }
    }`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts);
  return (
    <div>
      <div className="flex">
        <div className="border-b-4 border-red-500 mb-1 w-4/5 text-lg text-red-500">
          {" "}
          TOP NEWS
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-full">
        <div className="md:col-span-2  h-auto">
          <PostParentComponent
            posts={reducer(posts, true, 0, 3)}
            columnType={1}
          />
        </div>

        <div className="md:col-span-2 md:border-l-2 md:border-gray-200  pl-2 h-auto">
          <PostParentComponent
            posts={reducer(posts, false, 0, 6)}
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
}
