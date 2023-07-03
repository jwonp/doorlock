import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';

export const ModalType = {
  card: 'card',
  room: 'room',
} as const;
export type ModalType = (typeof ModalType)[keyof typeof ModalType];
export interface ModalState {
  type: ModalType;
}

const initialState: ModalState = {
  type: ModalType.card,
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
