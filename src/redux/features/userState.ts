import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store';

export interface UserDataState {
  id: string;
  name: string;
  phone: string;
  lastTagged: string;
  roomId: string;
  cardId: string;
}
export interface UserState {
  userList: UserDataState[];
  selectedUser: UserDataState;
}
const initSelectedUser: UserDataState = {
  id: 'EXAMPLE-ID',
  name: 'EXAMPLE-NAME',
  lastTagged: '2016-05-31T01:02:03',
  phone: '010-1234-5678',
  roomId: 'EXAMPLE-ROOM-ID',
  cardId: 'EXAMPLE-CARD-ID',
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
      state.selectedUser.lastTagged = action.payload.lastTagged;
      state.selectedUser.phone = action.payload.phone;
      state.selectedUser.roomId = action.payload.roomId;
      state.selectedUser.cardId = action.payload.cardId;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.selectedUser.id = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.selectedUser.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addNewUser, setUser, setUserId, setUserName} = user.actions;
export const getSelectedUser = (state: RootState) => state.user.selectedUser;
export const getUserList = (state: RootState) => state.user.userList;
export default user.reducer;
