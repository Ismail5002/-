import GetPosts from "../Components/GetPosts";
import PostPosts from "../Components/PostPosts";
import SinglePosts from "../Components/SinglePosts";
import PutPosts from "../Components/PutPosts";

export const ROUTES = [
  { path: "/GET", Element: GetPosts },
  { path: "/POST", Element: PostPosts },
  { path: "PUT", Element: PutPosts },
  { path: "/GET/products/:id", Element: SinglePosts },
];
