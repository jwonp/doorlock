import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';

export interface ModalState {
  newUserModalVisible: boolean;
  selectModalVisible: boolean;
  reservationEditModalVisible: boolean;
}

const initialState: ModalState = {
  newUserModalVisible: false,
  selectModalVisible: false,
  reservationEditModalVisible: false,
} as const;

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setNewUserModalVisible: (state, action: PayloadAction<boolean>) => {
      state.newUserModalVisible = action.payload;
    },
    setSelectModalVisible: (state, action: PayloadAction<boolean>) => {
      state.selectModalVisible = action.payload;
    },
    setReservationEditModalVisible: (state, action: PayloadAction<boolean>) => {
      state.reservationEditModalVisible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setNewUserModalVisible,
  setSelectModalVisible,
  setReservationEditModalVisible,
} = modal.actions;
export const getNewUserModalVisible = (state: RootState) =>
  state.modal.newUserModalVisible;
export const getSelectModalVisible = (state: RootState) =>
  state.modal.selectModalVisible;
export const getReservationEditModalVisible = (state: RootState) =>
  state.modal.reservationEditModalVisible;

export default modal.reducer;
