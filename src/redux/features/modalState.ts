import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';

export interface ModalState {
  newUserModalVisible: boolean;
  selectModalVisible: boolean;
  reservationAddModalVisible: boolean;
  reservationEditModalVisible: boolean;
}

const initialState: ModalState = {
  newUserModalVisible: false,
  selectModalVisible: false,
  reservationAddModalVisible: false,
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
    setReservationAddModalVisible: (state, action: PayloadAction<boolean>) => {
      state.reservationAddModalVisible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setNewUserModalVisible,
  setSelectModalVisible,
  setReservationEditModalVisible,
  setReservationAddModalVisible,
} = modal.actions;
export const getNewUserModalVisible = (state: RootState) =>
  state.modal.newUserModalVisible;
export const getSelectModalVisible = (state: RootState) =>
  state.modal.selectModalVisible;
export const getReservationEditModalVisible = (state: RootState) =>
  state.modal.reservationEditModalVisible;
export const getReservationAddModalVisible = (state: RootState) =>
  state.modal.reservationAddModalVisible;

export default modal.reducer;
