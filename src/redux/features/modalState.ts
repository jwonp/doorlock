import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';

export interface ModalState {
  newUserModalVisible: boolean;
  selectModalVisible: boolean;
}

const initialState: ModalState = {
  newUserModalVisible: false,
  selectModalVisible: false,
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
  },
});

// Action creators are generated for each case reducer function
export const {setNewUserModalVisible, setSelectModalVisible} = modal.actions;
export const getNewUserModalVisible = (state: RootState) =>
  state.modal.newUserModalVisible;
export const getSelectModalVisible = (state: RootState) =>
  state.modal.selectModalVisible;

export default modal.reducer;
