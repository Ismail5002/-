import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./posts/postsReducer";
import { postApi } from './api/postApi';

export const store = configureStore({
  reducer: {
    posts: PostsSlice,
    [postApi.reducerPath]: postApi.reducer
  },
  middleware: (defaultMiddleWare) => {
    return defaultMiddleWare().concat(postApi.middleware)
  }
});
