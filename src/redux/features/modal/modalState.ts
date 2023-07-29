import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';

export interface ModalState {
  logModalVisible: boolean;
  userAddModalVisible: boolean;
  cardAddModalVisibie: boolean;
  roomAddModalVisible: boolean;
  selectModalVisible: boolean;
  cardDetailModalVisible: boolean;
  userEditModalVisible: boolean;
  reservationAddModalVisible: boolean;
  reservationEditModalVisible: boolean;
}

const initialState: ModalState = {
  logModalVisible: false,
  userAddModalVisible: false,
  cardAddModalVisibie: false,
  roomAddModalVisible: false,
  selectModalVisible: false,
  cardDetailModalVisible: false,
  userEditModalVisible: false,
  reservationAddModalVisible: false,
  reservationEditModalVisible: false,
} as const;

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setLogModalVisible: (state, action: PayloadAction<boolean>) => {
      state.logModalVisible = action.payload;
    },
    setUserAddModalVisible: (state, action: PayloadAction<boolean>) => {
      state.userAddModalVisible = action.payload;
    },
    setCardAddModalVisibie: (state, action: PayloadAction<boolean>) => {
      state.cardAddModalVisibie = action.payload;
    },
    setRoomAddModalVisible: (state, action: PayloadAction<boolean>) => {
      state.roomAddModalVisible = action.payload;
    },
    setSelectModalVisible: (state, action: PayloadAction<boolean>) => {
      state.selectModalVisible = action.payload;
    },
    setCardDetailModalVisible: (state, action: PayloadAction<boolean>) => {
      state.cardDetailModalVisible = action.payload;
    },
    setUserEditModalVisible: (state, action: PayloadAction<boolean>) => {
      state.userEditModalVisible = action.payload;
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
  setLogModalVisible,
  setUserAddModalVisible,
  setCardAddModalVisibie,
  setRoomAddModalVisible,
  setSelectModalVisible,
  setCardDetailModalVisible,
  setUserEditModalVisible,
  setReservationEditModalVisible,
  setReservationAddModalVisible,
} = modal.actions;
export const getLogModalVisible = (state: RootState) =>
  state.modal.logModalVisible;
export const getUserAddModalVisible = (state: RootState) =>
  state.modal.userAddModalVisible;
export const getCardAddModalVisible = (state: RootState) =>
  state.modal.cardAddModalVisibie;
export const getRoomAddModalVisible = (state: RootState) =>
  state.modal.roomAddModalVisible;
export const getSelectModalVisible = (state: RootState) =>
  state.modal.selectModalVisible;
export const getCardDetailModalVisible = (state: RootState) =>
  state.modal.cardDetailModalVisible;
export const getUserEditModalVisible = (state: RootState) =>
  state.modal.userEditModalVisible;
export const getReservationEditModalVisible = (state: RootState) =>
  state.modal.reservationEditModalVisible;
export const getReservationAddModalVisible = (state: RootState) =>
  state.modal.reservationAddModalVisible;

export default modal.reducer;
