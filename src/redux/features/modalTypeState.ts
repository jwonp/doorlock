import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';

export const ModalType = {
  user: 'user',
  room: 'room',
} as const;
export type ModalType = (typeof ModalType)[keyof typeof ModalType];
export interface ModalState {
  type: ModalType;
}

const initialState: ModalState = {
  type: ModalType.user,
} as const;

export const modalType = createSlice({
  name: 'modalType',
  initialState,
  reducers: {
    setModalType: (state, action: PayloadAction<ModalType>) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setModalType} = modalType.actions;
export const getModalType = (state: RootState) => state.modalType.type;

export default modalType.reducer;
