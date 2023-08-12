import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';
import {User} from '@/assets/models/entity/User';
import {Optional} from '@/util/type';

export interface UserEditState extends Optional<User, 'password'> {}

const initialState: UserEditState = {
  id: '',
  name: '',
  phone: '',
};
export const initialUserEditState = initialState;
export const userEdit = createSlice({
  name: 'userEdit',
  initialState,
  reducers: {
    setUserEdit: (state, action: PayloadAction<UserEditState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetPassword: state => {
      state.password = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUserEdit, setName, setPhone, setPassword, resetPassword} =
  userEdit.actions;
export const getUserEdit = (state: RootState) => state.userEdit;
export const getPassword = (state: RootState) => state.userEdit.password;
export const getName = (state: RootState) => state.userEdit.name;
export const getPhone = (state: RootState) => state.userEdit.phone;
export default userEdit.reducer;
