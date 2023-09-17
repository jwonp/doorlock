import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';
import {CARD, DataTypes, TAG} from '@/assets/static/texts/DataTypes';

export interface ModalState {
  type: DataTypes;
}

const initialState: ModalState = {
  type: TAG,
} as const;

export const screen = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<DataTypes>) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setScreen} = screen.actions;
export const getScreenType = (state: RootState) => state.screen.type;

export default screen.reducer;
