import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/userState';
import modalReducer from './features/modalState';
import cardReducer from './features/cardState';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      card: cardReducer,
      modal: modalReducer,
    },
  });
};
export const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
