import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';

export interface UserDataState {
  id: string;
  name: string;
  phone: string;
  lastTagged: string;
}
export interface UserState {
  selectedUsers: string[];
}
const initSelectedUsers: string[] = [];
const initialState: UserState = {
  selectedUsers: initSelectedUsers,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserSelected: (state, action: PayloadAction<string>) => {
      state.selectedUsers = [...state.selectedUsers, action.payload];
    },
    deleteUserSelected: (state, action: PayloadAction<string>) => {
      state.selectedUsers = state.selectedUsers.filter(
        value => value !== action.payload,
      );
    },
    resetUserSelected: state => {
      state.selectedUsers = initSelectedUsers;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addUserSelected, deleteUserSelected, resetUserSelected} =
  user.actions;
export const getSelectedUsers = (state: RootState) => state.user.selectedUsers;

export default user.reducer;
