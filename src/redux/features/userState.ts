import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';

export interface UserDataState {
  id: string;
  name: string;
  privateKey: string;
  lastTagged: string;
}
export interface UserState {
  userList: UserDataState[];
  selectedUser: UserDataState;
}
const initSelectedUser: UserDataState = {
  id: 'EXAMPLE-ID',
  name: 'EXAMPLE-NAME',
  privateKey: 'PRIVATE-KEY-INIT',
  lastTagged: '2016-05-31T01:02:03',
};
const initialState: UserState = {
  userList: [initSelectedUser],
  selectedUser: initSelectedUser,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<UserDataState>) => {
      state.userList = [...state.userList, action.payload];
    },
    setUser: (state, action: PayloadAction<UserDataState>) => {
      state.selectedUser.id = action.payload.id;
      state.selectedUser.name = action.payload.name;
      state.selectedUser.privateKey = action.payload.privateKey;
      state.selectedUser.lastTagged = action.payload.lastTagged;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.selectedUser.id = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.selectedUser.name = action.payload;
    },
    setUserPrivateKey: (state, action: PayloadAction<string>) => {
      state.selectedUser.privateKey = action.payload;
    },
    setUserLastTagged: (state, action: PayloadAction<string>) => {
      state.selectedUser.lastTagged = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewUser,
  setUser,
  setUserId,
  setUserName,
  setUserPrivateKey,
  setUserLastTagged,
} = user.actions;
export const getSelectedUser = (state: RootState) => state.user.selectedUser;
export const getUserList = (state: RootState) => state.user.userList;
export default user.reducer;
