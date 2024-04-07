import { defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "author",
      title: "Author Name",
      type: "string",
    }
  ],
});
