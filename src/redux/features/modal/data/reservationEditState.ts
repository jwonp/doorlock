import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/redux/store';

export interface ReservationEditState {
  id: number;
  userId: string;
  cardId: string;
  roomId: number;
}

const initialState: ReservationEditState = {
  id: 0,
  userId: '',
  cardId: '',
  roomId: 0,
} as const;

export const reservationEdit = createSlice({
  name: 'reservationEdit',
  initialState,
  reducers: {
    setReservationEditId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setRoomEditId: (state, action: PayloadAction<number>) => {
      state.roomId = action.payload;
    },
    setCardEditId: (state, action: PayloadAction<string>) => {
      state.cardId = action.payload;
    },
    setUserEditId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    resetEditIds: state => {
      state.cardId = '';
      state.userId = '';
      state.roomId = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setReservationEditId,
  setRoomEditId,
  setCardEditId,
  setUserEditId,
  resetEditIds,
} = reservationEdit.actions;
export const getReservationEditId = (state: RootState) =>
  state.reservationEdit.id;
export const getReservationEditRoomId = (state: RootState) =>
  state.reservationEdit.roomId;
export const getReservationEditUserId = (state: RootState) =>
  state.reservationEdit.userId;
export const getReservationEditCardId = (state: RootState) =>
  state.reservationEdit.cardId;

export default reservationEdit.reducer;
