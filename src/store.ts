import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/store/usersSlice";
import postsReducer from "./features/posts/store/postsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
