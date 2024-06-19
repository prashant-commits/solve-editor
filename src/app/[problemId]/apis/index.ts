import axios from "axios";

export const getProblemBySlug = (slug: string) =>
  axios.get<Problem>(
    `https://adminapi.takeuforward.org/api/blog/article/data-structure/${slug}`
  );
