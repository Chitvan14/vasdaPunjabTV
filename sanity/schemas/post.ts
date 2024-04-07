import { Rule } from "sanity";
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'

export const post = {
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title",isUnique: isUniqueAcrossAllDocuments},
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    // {
    //   name: "excerpt",
    //   title: "Excerpt",
    //   type: "text",
    //   validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters"),
    // },
    {
      title: "Poster",
      name: "poster",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      // fields: [
      //   {
      //     name: "caption",
      //     type: "string",
      //     title: "Caption",
      //   },
      //   {
      //     name: "attribution",
      //     type: "string",
      //     title: "Attribution",
      //   },
      // ],
      validation: (Rule: Rule) => Rule.required().error("Required"),

    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
      validation: (Rule: Rule) => Rule.required().error("Required"),

    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      validation: (Rule: Rule) => Rule.required().error("Required"),

    },
    {
      name: "author",
      title: "Author",
      type: "array",
      of: [{ type: "reference", to: [{ type: "author" }] }],
      validation: (Rule: Rule) => Rule.required().error("Required"),

    },
    {
      name: "location",
      title: "Location",
      type: "array",
      of: [{ type: "reference", to: [{ type: "location" }] }],
      validation: (Rule: Rule) => Rule.required().error("Required"),

    },
  ],
};
