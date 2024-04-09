export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any;
  tags: Array<Tag>;
  _id: string;
  headings?: Array<HTMLHeadElement | string>;
  poster: string;
  location: Array<Location>;
  author: Array<Author>;
}

export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
  postCount?: number;
  description: string;
}
export interface Location {
  city: string;
  _id: string;
  postCount?: number;
  state: string;
  country: string;
}
export interface Author {
  author: string;
  _id: string;
  postCount?: number;
}
export interface SizeProps {
  size?: string;
}
