import {configureStore} from '@reduxjs/toolkit';
import userReducer from '@/redux/features/selected/userState';
import modalReducer from '@/redux/features/modal/modalState';
import cardReducer from '@/redux/features/selected/cardState';
import roomReducer from '@/redux/features/selected/roomState';
import reservationReducer from '@/redux/features/selected/reservationState';
import reservationAddReducer from '@/redux/features/modal/data/reservationAddState';
import screenReducer from '@/redux/features/modal/screenState';
import selectModalTypeReducer from '@/redux/features/modal/selectModalState';
import reservationEditReducer from '@/redux/features/modal/data/reservationEditState';
import cardDetailReducer from '@/redux/features/modal/data/cardDetailState';
import userEditReducer from '@/redux/features/modal/data/userEditState';
export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      card: cardReducer,
      room: roomReducer,
      reservation: reservationReducer,
      cardDetail: cardDetailReducer,
      reservationAdd: reservationAddReducer,
      modal: modalReducer,
      screen: screenReducer,
      selectModal: selectModalTypeReducer,
      reservationEdit: reservationEditReducer,
      userEdit: userEditReducer,
    },
  });
};
export const store = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
