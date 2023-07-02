import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';
import {RoomWithReservationResponse} from '../../assets/models/dto/room/RoomWithReservationResponse';
import {Reservation} from '../../assets/models/entity/Reservation';

export interface ReservationState {
  selectedReservation: Reservation;
}

const initSelectedReservation: Reservation = {
  id: 0,
  userId: '',
  roomId: 0,
  cardId: '',
  isCheckedIn: false,
};

const initialState: ReservationState = {
  selectedReservation: initSelectedReservation,
};

export const reservation = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    setSelectedReservation: (state, action: PayloadAction<Reservation>) => {
      state.selectedReservation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSelectedReservation} = reservation.actions;
export const getSelectedReservation = (state: RootState) =>
  state.reservation.selectedReservation;

export default reservation.reducer;
