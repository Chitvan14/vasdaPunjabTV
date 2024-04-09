import { defineType } from "sanity";
import { Rule } from "sanity";

export const tag = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Tag Name",
      type: "string",
      validation: (Rule: Rule) => Rule.uppercase().error("Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
  ],
});
