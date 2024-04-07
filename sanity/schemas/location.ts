import { defineType } from "sanity";

export const location = defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    {
      name: "city",
      title: "City Name",
      type: "string",
    }, {
      name: "state",
      title: "State Name",
      type: "string",
    },{
      name: "country",
      title: "Country Name",
      type: "string",
    }
    
  ],
});
