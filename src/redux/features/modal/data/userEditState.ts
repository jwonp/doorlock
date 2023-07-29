import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/redux/store';
import {User} from '@/assets/models/entity/User';
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;
export interface UserEditState extends Optional<User, 'password'> {}

const initialState: UserEditState = {
  id: '',
  name: '',
  phone: '',
  lastTagged: '',
};

export const userEdit = createSlice({
  name: 'userEdit',
  initialState,
  reducers: {
    setUserEdit: (state, action: PayloadAction<UserEditState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.lastTagged = action.payload.lastTagged;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUserEdit, setPassword} = userEdit.actions;
export const getUserEdit = (state: RootState) => state.userEdit;
export const getPassword = (state: RootState) => state.userEdit.password;
export default userEdit.reducer;
