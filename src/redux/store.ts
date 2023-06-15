import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/userState';
import modalReducer from './features/modalState';
import cardReducer from './features/cardState';
import modalTypeReducer from './features/modalTypeState';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      card: cardReducer,
      modal: modalReducer,
      modalType: modalTypeReducer,
    },
  });
};
export const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
