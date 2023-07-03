import {configureStore} from '@reduxjs/toolkit';
import userReducer from '@/redux/features/userState';
import modalReducer from '@/redux/features/modalState';
import cardReducer from '@/redux/features/cardState';
import roomReducer from '@/redux/features/roomState';
import reservationReducer from '@/redux/features/reservationState';
import modalTypeReducer from '@/redux/features/modalTypeState';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      card: cardReducer,
      room: roomReducer,
      reservation: reservationReducer,
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
