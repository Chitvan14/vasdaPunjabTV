import { Breadcrumb } from "@/app/components/Breadcrumb";
import Header from "@/app/components/Header";
import PostParentComponent from "@/app/components/PostParentComponent";
import { reducer } from "@/app/utils/helpers";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { notFound, redirect } from "next/navigation";
import React from "react";
// import { posts } from "../page";

async function getPostsByTag(tag: string) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    slug, 
    title, 
    "poster": poster.asset->url,
       tags[]-> {
                  name,
                  description
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

// Function to determine location type and value
const determineLocationType = async (location: any) => {
  const query = `
  *[_type == "location" && 
    (lower(city) == lower($location) || lower(state) == lower($location) || lower(country) == lower($location))
  ][0]{
    city,
    state,
    country
  }`;

  const params = { location };

  try {
    const result = await client.fetch(query, params);
    console.log("result ", result);
    if (result.city.toLowerCase() === location.toLowerCase())
      return { type: "city", value: location.toLowerCase() };
    if (result.state.toLowerCase() === location.toLowerCase())
      return { type: "state", value: location.toLowerCase() };
    if (result.country.toLowerCase() === location.toLowerCase())
      return { type: "country", value: location.toLowerCase() };
    throw new Error("Location not found");
  } catch (error) {
    console.error("Error determining location type: ", error);
    throw error;
  }
};

// Function to fetch posts based on category and location
const fetchPostsByCategoryAndLocation = async (
  category: any,
  location: any
) => {
  try {
    console.log({ category, location });
    const { type: locationType, value: locationValue } =
      await determineLocationType(location);
    console.log({ locationType, locationValue });

    const query = `
    *[_type == "post" && 
      references(*[_type == "tag" && slug.current == $category]._id) && 
      references(*[_type == "location" && 
        ($locationType == "city" && (lower(city) == lower($location))) ||
        ($locationType == "state" && (lower(state) == lower($location))) ||
        ($locationType == "country" && (lower(country) == lower($location)))
      ]._id)
    ]{
      slug, 
      title, 
      "poster": poster.asset->url,
         tags[]-> {name, description}
    }`;

    const params = {
      category,
      location: locationValue,
      locationType,
    };

    const posts = await client.fetch(query, params);
    return posts;
  } catch (error) {
    console.error("Error fetching posts: ", error);
    return [];
  }
};

export const revalidate = 60;

interface Params {
  params: {
    category: string;
  };
}

const page = async ({ params }: Params) => {
  const posts: Array<Post> = params.category.includes("-")
    ? await fetchPostsByCategoryAndLocation(
        params.category.split("-")[0],
        params.category.split("-")[1]
      )
    : await getPostsByTag(params.category);
  if (posts.length == 0) {
    return redirect("/");
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
            posts={reducer(posts, "Even", 0, 2)}
            columnType={1}
          />{" "}
        </div>

        <div className="md:col-span-2 md:border-l-2 md:border-gray-200  pl-2 h-auto">
          <PostParentComponent
            posts={reducer(posts, "Odd", 0, 5)}
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
            posts={reducer(posts, "Even", 0, 5)}
            columnType={2}
          />
        </div>

        <div className="md:col-span-2 md:border-l-2 md:border-gray-200  pl-2 h-auto">
          <PostParentComponent
            posts={reducer(posts, "Odd", 0, 5)}
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
