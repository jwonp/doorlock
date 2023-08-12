import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';
import {
  CARD,
  RESERVATION,
  ROOM,
  SCAN,
  USER,
} from '@/assets/static/texts/DataTypes';

export const DataType = {
  card: CARD,
  user: USER,
  room: ROOM,
  reservation: RESERVATION,
  scan: SCAN,
} as const;

export type DataType = (typeof DataType)[keyof typeof DataType];

export interface ModalState {
  type: DataType;
}

const initialState: ModalState = {
  type: DataType.card,
} as const;

export const screen = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<DataType>) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setScreen} = screen.actions;
export const getScreenType = (state: RootState) => state.screen.type;

export default screen.reducer;
