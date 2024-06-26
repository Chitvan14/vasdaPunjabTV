import { Post } from "./interface";

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export const reducer = (
  arr: Post[],
  isEven: "Even" | "Odd" | "All",
  start: number,
  end: number
) => {
  return arr
    ?.reduce((acc: Post[], curr, index) => {
      if (isEven == "Even" && index % 2 === 0) {
        acc.push(curr);
      }
      if (isEven == "Odd" && index % 2 !== 0) {
        acc.push(curr);
      }
      if (isEven == "All") {
        acc.push(curr);
      }
      return acc;
    }, [])
    .slice(start, end);
};
