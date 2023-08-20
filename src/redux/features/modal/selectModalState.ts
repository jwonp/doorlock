import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/redux/store';

import {Actions, ADD} from '@/assets/static/texts/SelectModalActions';
import { CARD, DataTypes } from '@/assets/static/texts/DataTypes';

export interface ModalState {
  action: Actions;
  type: DataTypes;
}

const initialState: ModalState = {
  action: ADD,
  type: CARD,
} as const;

export const selectModal = createSlice({
  name: 'selectModal',
  initialState,
  reducers: {
    setSelectedModalType: (state, action: PayloadAction<DataTypes>) => {
      state.type = action.payload;
    },
    setSelectModalAction: (state, action: PayloadAction<Actions>) => {
      state.action = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSelectedModalType, setSelectModalAction} = selectModal.actions;
export const getSelectedModalType = (state: RootState) =>
  state.selectModal.type;
export const getSelectModalAction = (state: RootState) =>
  state.selectModal.action;

export default selectModal.reducer;
