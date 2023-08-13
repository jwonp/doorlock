import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';

export interface ReservationAddState {
  userId: string;
  cardId: string;
  roomId: number;
}

const initialState: ReservationAddState = {
  userId: '',
  cardId: '',
  roomId: 0,
};

export const reservationAdd = createSlice({
  name: 'reservationAdd',
  initialState,
  reducers: {
    setIds: (state, action: PayloadAction<ReservationAddState>) => {
      state.userId = action.payload.userId;
      state.cardId = action.payload.cardId;
      state.roomId = action.payload.roomId;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setCardId: (state, action: PayloadAction<string>) => {
      state.cardId = action.payload;
    },
    setRoomId: (state, action: PayloadAction<number>) => {
      state.roomId = action.payload;
    },
    resetIds: state => {
      state.roomId = initialState.roomId;
      state.cardId = initialState.cardId;
      state.userId = initialState.userId;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setIds, setUserId, setCardId, setRoomId, resetIds} =
  reservationAdd.actions;
export const getReservationAddIds = (state: RootState) => state.reservationAdd;
export const getReservationAddUserId = (state: RootState) =>
  state.reservationAdd.userId;
export const getReservationAddCardId = (state: RootState) =>
  state.reservationAdd.cardId;
export const getReservationAddRoomId = (state: RootState) =>
  state.reservationAdd.roomId;

export default reservationAdd.reducer;
