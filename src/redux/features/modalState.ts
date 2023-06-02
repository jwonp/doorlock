import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';

export interface ModalState {
  newUserModalVisible: boolean;
}

const initialState: ModalState = {
  newUserModalVisible: false,
} as const;

export const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setNewUserModalVisible: (state, action: PayloadAction<boolean>) => {
      state.newUserModalVisible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setNewUserModalVisible} = modal.actions;
export const getNewUserModalVisible = (state: RootState) =>
  state.modal.newUserModalVisible;
export default modal.reducer;
