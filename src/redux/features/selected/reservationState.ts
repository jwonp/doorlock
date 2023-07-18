import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';

import {Reservation} from '@/assets/models/entity/Reservation';

export interface ReservationState {
  selectedReservations: number[];
}

const initSelectedReservations: number[] = [];

const initialState: ReservationState = {
  selectedReservations: initSelectedReservations,
};

export const reservation = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservationSelected: (state, action: PayloadAction<number>) => {
      state.selectedReservations = [
        ...state.selectedReservations,
        action.payload,
      ];
    },
    deleteReservationSelected: (state, action: PayloadAction<number>) => {
      state.selectedReservations = state.selectedReservations.filter(
        value => value !== action.payload,
      );
    },
    resetReservationSelected: state => {
      state.selectedReservations = initSelectedReservations;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addReservationSelected,
  deleteReservationSelected,
  resetReservationSelected,
} = reservation.actions;
export const getSelectedReservations = (state: RootState) =>
  state.reservation.selectedReservations;

export default reservation.reducer;
