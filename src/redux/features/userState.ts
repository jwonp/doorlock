import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';

export interface UserState {
  id: string;
  name: string;
  privateKey: string;
  lastTagged: string;
}

const initialState: UserState = {
  id: '1A2S3D4D5D',
  name: 'Joowon',
  privateKey: 'PRIVATE-KEY-INIT',
  lastTagged: '2016-05-31T01:02:03',
} as const;

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = {...action.payload};
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setPrivateKey: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setLastTagged: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser, setId, setName, setPrivateKey, setLastTagged} =
  user.actions;
export const getUser = (state: RootState) => state.user;
export default user.reducer;
